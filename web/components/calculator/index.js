import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { useStateMachine } from 'little-state-machine'
import updateAction from '@/hooks/updateAction'
import { isStringEmpty } from '@/utils/helpers'
import { motion } from 'framer-motion'

// import { AnimatePresence } from 'framer-motion'
// import { Text as BodyText } from '@/components/serializers/text'

import { Question } from '@/components/calculator/question'

import { Flex, Heading, Box, Stack, Button, Spinner, Progress, Text } from '@chakra-ui/react'
// import { HiChevronRight, HiChevronLeft } from 'react-icons/hi'
import { FaCaretSquareLeft, FaArrowAltCircleRight, FaArrowAltCircleLeft, FaCaretSquareRight } from 'react-icons/fa'

export function Calculator({ question, questions, slug, dev }) {
  const router = useRouter()
  // console.log({questions})
  const { actions, state } = useStateMachine({ updateAction })
  // const { currentQuestion } = state.calculator
  const currentQuestion = parseInt(slug)
  const { showResults, lastQuestion } = state.calculator
  const questionLength = questions?.length  // - 1
  const [currentQuestionID, setCurrentQuestionID] = useState(questions[currentQuestion]._id)
  const [seeResultsBtn, setSeeResultsBtn] = useState(false)
  const [atTheLastQuestion, setAtTheLastQuestion] = useState(false)
  const [questionAnswered, setQuestionAnswered] = useState(false)

  // Animation Variants (Framer Motion)
  const variants = {
    initial: {
      opacity: 0,
      // x: -50,
      display: 'none'
    },
    animate: {
      opacity: 1,
      // x: 0,
      display: 'block'
    },
    removed: {
      opacity: 0,
      // x: 50,
      display: 'none'
    },
    transition: { duration: 2 }
  }

  const showQ = useCallback((q, optionLogicConditional, i) => {
    let showQuestion = []
    let returnVal = ''

    if (i >= questionLength || (showQuestion !== undefined && !showQuestion.length > 1)) {
      return 'hide'
    }

    if (q?.optionLogics === undefined || q?.optionLogics?.length === 0) {
      showQuestion.push('show')
    } else {
      q?.optionLogics &&
        q?.optionLogics?.map(logic => {
          // String Logic
          if (logic._type === 'optionLogic') {
            if (
              state?.calculator?.questions[logic.logicSourceQuestion._ref]?.answer ===
              logic.logicSourceValue
            ) {
              showQuestion.push('show')
            } else {
              showQuestion.push('hide')
            }
          }

          // Numeric Operational Logic
          if (logic._type === 'optionNumericLogic') {
            let questionVal = Number(
              state?.calculator?.questions[logic?.logicSourceQuestion?._ref]?.answer
            )
            let logicVal = logic?.operatorValue
            let mathOperation = logic?.mathOperation
            showQuestion.push(operatorMagic(questionVal, mathOperation, logicVal))
          }
        })[0]
    }

    if (optionLogicConditional === 'and') {
      showQuestion.includes('hide') ? (returnVal = 'hide') : (returnVal = 'true')
    }

    if (optionLogicConditional === 'or') {
      showQuestion.includes('show') ? (returnVal = 'show') : (returnVal = 'hide')
    }
    return returnVal
  }, [questionLength, state])

  useEffect(() => {
    setCurrentQuestionID(questions[currentQuestion]._id)
  }, [questions, currentQuestion])

  useEffect(() => {
    // console.clear()
    // Check to see if the question has been answered
    setQuestionAnswered(
      isStringEmpty(state?.calculator?.questions[currentQuestionID]?.answer) ? false : true
    )
    // Question has been answered 👍🏻
    if (questionAnswered === true) {
      // console.log('👍🏻 question answered')
      let i = currentQuestion
      let showQuestion = 'hide'
      let optionLogicConditional = 'or'
      while (showQuestion === 'hide') {
        i += 1
        if (i >= questionLength) {
          break
        }
        optionLogicConditional = questions[i]?.optionLogicConditional || 'or'
        showQuestion = showQ(questions[i], optionLogicConditional, i)
      }
      // Logic to see if at the end of questions or not
      if (i === undefined || i >= questionLength) {
        // console.log('🔚 you have reached the end of our questions')
        i = currentQuestion
        setAtTheLastQuestion(true)
      } else {
        setAtTheLastQuestion(false)
        // console.log('✅ another question')
      }
      // Question not answered 👎🏻
    } else {
      setAtTheLastQuestion(false)
      // console.log('👎🏻 question answered')
    }
    // console.log({lastQuestion})
    // console.log({questionAnswered})
    // console.log({atTheLastQuestion})
  }, [state.calculator.questions, currentQuestionID, questionAnswered, currentQuestion, questionLength, questions, showQ])

  // useEffect(() => {
  //   if (atTheLastQuestion) {
  //     actions.updateAction({
  //       ...state,
  //       lastQuestion: currentQuestion
  //     })
  //   }
  //   // console.log({currentQuestion})
  //   // console.log({atTheLastQuestion})
  //   // console.log({lastQuestion})
  // }, [actions, state, currentQuestion, atTheLastQuestion])

  const operatorMagic = (questionVal, mathOperation, logicVal) => {
    if (mathOperation === 'equals') {
      return questionVal === logicVal ? 'show' : 'hide'
    } else if (mathOperation === 'doesNotEqual') {
      return questionVal !== logicVal ? 'show' : 'hide'
    } else if (mathOperation === 'lessThan') {
      return questionVal < logicVal ? 'show' : 'hide'
    } else if (mathOperation === 'lessThanOrEquals') {
      return questionVal <= logicVal ? 'show' : 'hide'
    } else if (mathOperation === 'greaterThan') {
      return questionVal > logicVal ? 'show' : 'hide'
    } else if (mathOperation === 'greaterThanOrEquals') {
      return questionVal >= logicVal ? 'show' : 'hide'
    } else {
      return 'hide'
    }
  }



  // Button to advance the user to the next question, not shown or disabled on the last question
  const nextQuestion = () => {
    let i = currentQuestion
    let showQuestion = 'hide'
    let optionLogicConditional = 'or'

    while (showQuestion === 'hide') {
      i += 1
      if (i >= questionLength) {
        break
      }
      optionLogicConditional = questions[i]?.optionLogicConditional || 'or'
      showQuestion = showQ(questions[i], optionLogicConditional, i)
    }

    if (i === undefined || i >= questionLength) {
      // console.log('you have magically reached the end 🤔')
      i = currentQuestion
      setAtTheLastQuestion(true)
      setSeeResultsBtn(true)
      actions.updateAction({
        ...state,
        calculator: {
          ...state.calculator,
          showResults: true
        }
      })
      dev ? router.push(`/dev/results`) : router.push(`/results`)
    } else {
      actions.updateAction({
        ...state,
        calculator: {
          ...state.calculator,
          currentQuestion: i === undefined || i > questionLength ? currentQuestion : i
        }
      })
      dev ?
      router.push(
        `/dev/question/${
          i === undefined || i > questionLength ? questions[currentQuestion]._id : questions[i]._id
        }`
      ) :
      router.push(
        `/question/${
          i === undefined || i > questionLength ? questions[currentQuestion]._id : questions[i]._id
        }`
      )
    }
  }

  // Button to advance the user to the previous question, not shown on the first question
  const prevQuestion = () => {
    let i = currentQuestion
    let showQuestion = 'hide'
    let optionLogicConditional = 'or'

    while (showQuestion === 'hide') {
      i -= 1
      if (i >= questionLength) {
        break
      }
      optionLogicConditional = questions[i]?.optionLogicConditional || 'or'
      showQuestion = showQ(questions[i], optionLogicConditional, i)
    }

    if (i === undefined || i >= questionLength) {
      i = currentQuestion
      setSeeResultsBtn(true)
    }

    setAtTheLastQuestion(false)
    actions.updateAction({
      ...state,
      calculator: {
        ...state.calculator,
        currentQuestion: i === undefined || i > questionLength ? currentQuestion : i
      }
    })
    dev ?
    router.push(
      `/dev/question/${
        i === undefined || i > questionLength ? questions[currentQuestion]._id : questions[i]._id
      }`
    ) :
    router.push(
      `/question/${
        i === undefined || i > questionLength ? questions[currentQuestion]._id : questions[i]._id
      }`
    )
  }

  // Button function to show the Results, only seen on the last question
  const seeResults = () => {
    setSeeResultsBtn(false)
    actions.updateAction({
      ...state,
      calculator: {
        ...state.calculator,
        showResults: true
      }
    })
    dev ? router.push(`/dev/results`) : router.push(`/results`)
  }
  // console.log({ question, questions, slug, currentQuestion })

  const StartOver = () => {
    // console.clear()
    actions.updateAction({
      ...state,
      calculator: {
        currentQuestion: 0,
        lastQuestion: null,
        showResults: false,
        questions: [],
        results: [],
        totalSemesters: 1
      }
    })
    dev ? router.push(`/dev`) : router.push(`/`)
  }

  if (!question) {
    return <Spinner size="md" />
  }

  return (
    <Flex flex="1" flexDir="column" width="100%">
      <Box mt="10">
        <motion.div
          key={slug}
          variants={variants}
          exit="removed"
          initial="initial"
          animate={currentQuestion === slug ? 'animate' : 'initial'}
        >
          <Box flex="1" width="100%" mb="10">
            <Text fontSize="xs" color="#565A5C" fontStyle="italic" mb="1">
              My progress
            </Text>
            <Progress
              colorScheme="blue"
              size="sm"
              value={((currentQuestion + 1) / questions.length) * 100}
            />
          </Box>

          <Question
            key={question._id}
            question={question}
            index={slug}
            questionLength={questionLength}
            questions={questions}
          />

          <Flex direction={{base: "column", md: "row"}}  alignItems={{base: "flex-start", md: "center"}} >
            {currentQuestion > 0 && (
              <Button
                onClick={() => prevQuestion()}
                leftIcon={<FaArrowAltCircleLeft />}
                variant="solid"
                shadow="md"
                background="#565A5C"
                color="#fff"
                _hover={{ background: '#565A5C' }}
                _active={{ background: '#565A5C' }}
                _disabled={{ background: '#A2A4A3', shadow: 'none', cursor: 'not-allowed' }}
                mr={{ base: "0", md: "24px"}}
                mb={{ base: "24px", md: "0"}}
              >
                Previous Question
              </Button>
            )}

            {questionLength > currentQuestion && (
              <Button
                onClick={() => nextQuestion()}
                isDisabled={questionAnswered ? false : true}
                rightIcon={<FaArrowAltCircleRight />}
                variant="solid"
                shadow="md"
                background="blue.500"
                color="#fff"
                _hover={{ background: 'blue.600' }}
                _active={{ background: 'blue.500' }}
                _disabled={{ background: '#A2A4A3', shadow: 'none', cursor: 'not-allowed'   }}
                //tabIndex="4"
                mr="24px"
              >
                {atTheLastQuestion ? 'See Results' : 'Next Question'}
              </Button>
            )}

          </Flex>

          <Flex mt="12" alignItems="center" suppressHydrationWarning={true}>
            <Button
              leftIcon={<FaCaretSquareLeft />}
              variant="link"
              fontSize="sm"
              colorScheme="blue"
              mr="24px"
              onClick={() => StartOver()}
            >Start Over</Button>

            {(showResults && !atTheLastQuestion) &&
            <Button
            rightIcon={<FaCaretSquareRight />}
            variant="link"
            fontSize="sm"
            colorScheme="blue"
          >
            {dev ? <Link href="/dev/results"><a>Back to Results</a></Link> :  <Link href="/results"><a>Back to Results</a></Link>}
          </Button>}

          </Flex>
        </motion.div>
      </Box>
    </Flex>
  )
}
