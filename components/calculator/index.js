import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

import { useStateMachine } from 'little-state-machine'
import updateAction from '@/hooks/updateAction'
import { isStringEmpty } from '@/utils/helpers'
import { motion } from 'framer-motion'

// import { AnimatePresence } from 'framer-motion'
// import { Text as BodyText } from '@/components/serializers/text'

import { Question } from '@/components/calculator/question'

import { Flex, Heading, Box, Stack, Button, Spinner } from '@chakra-ui/react'
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi'

export function Calculator({ question, questions, slug }) {
  const router = useRouter()
  // console.log({questions})
  const { actions, state } = useStateMachine({ updateAction })
  // const { currentQuestion } = state.calculator
  const currentQuestion = parseInt(slug)
  const { showResults } = state.calculator
  const questionLength = questions?.length - 1
  const [currentQuestionID, setCurrentQuestionID] = useState(questions[currentQuestion]._id)
  const [seeResultsBtn, setSeeResultsBtn] = useState(false)
  const [atTheLastQuestion, setAtTheLastQuestion] = useState(false)
  const resultRef = useRef()

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

  useEffect(() => {
    setCurrentQuestionID(questions[currentQuestion]._id)
  }, [currentQuestion])

  // useEffect(() => {
  //   if (seeResultsBtn === true) {
  //     // console.log('seeResultsBtn')
  //     setTimeout(() => {
  //       resultRef.current.focus()
  //     }, 1)
  //   }
  // }, [seeResultsBtn])

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

  const showQ = (q, optionLogicConditional, i) => {
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
  }

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
      router.push(`/results`)
    } else {
      actions.updateAction({
        ...state,
        calculator: {
          ...state.calculator,
          currentQuestion: i === undefined || i > questionLength ? currentQuestion : i
        }
      })
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
    router.push(`/results`)
  }
  // console.log({ question, questions, slug, currentQuestion })
  if (!question) {
    return <Spinner size="md" />
  }
  return (
    <Flex paddingY={'5rem'} flex="1" flexDir="column" width="100%" maxW="860px" mx="auto" px="8">
      <Box mt="10">
        <motion.div
          key={slug}
          variants={variants}
          exit="removed"
          initial="initial"
          animate={'animate'}
          animate={currentQuestion === slug ? 'animate' : 'initial'}
        >
          <Question
            key={question._id}
            question={question}
            index={slug}
            questionLength={questionLength}
            questions={questions}
          />

          <Stack direction="row" spacing={4} align="center" mb="12">
            {currentQuestion > 0 && (
              <Button onClick={() => prevQuestion()} leftIcon={<HiChevronLeft />} variant="outline" //tabIndex="3"
              >
                Previous Question
              </Button>
            )}

            {questionLength > currentQuestion && (
              <Button
                onClick={() => nextQuestion()}
                isDisabled={
                  atTheLastQuestion ||
                  isStringEmpty(state?.calculator?.questions[currentQuestionID]?.answer)
                    ? true
                    : false
                }
                rightIcon={<HiChevronRight />}
                variant="outline"
                //tabIndex="4"
                >
                Next Question
              </Button>
            )}

            {/*{ seeResultsBtn && (
              <Button
                ref={resultRef}
                onClick={() => seeResults()}
                isDisabled={
                  isStringEmpty(state?.calculator?.questions[currentQuestionID]?.answer)
                    ? true
                    : false
                }
                // tabIndex="5"
                aria-live="polite"
                >
                See Results
              </Button>
            )}*/}
          </Stack>
        </motion.div>
      </Box>
    </Flex>
  )
}
