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
  // console.log([question])
  // CONSTANTS
  const { actions, state } = useStateMachine({ updateAction })
  // console.log({state})
  const questionLength = questions?.length
  const currentQuestion = parseInt(slug)
  const currentQuestionIndex = questions.map(e => { return e._id }).indexOf(questions[currentQuestion]._id)
  console.log({currentQuestionIndex})
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

  // STATE
  const [atTheLastQuestion, setAtTheLastQuestion] = useState(false)
  const [currentQuestionID, setCurrentQuestionID] = useState(questions[currentQuestion]._id)
  const [questionAnswered, setQuestionAnswered] = useState(false)



  // FUNCTIONS
  const HandleNextQuestion = () => {
    console.log({questions})
    console.log({currentQuestionIndex})
    const nextQuestionID = questions[currentQuestionIndex + 1]?._id
    const nextQuestionIndex = currentQuestionIndex + 1
    actions.updateAction({
      ...state,
      calculator: {
        ...state.calculator,
        currentQuestion: nextQuestionIndex
      }
    })
    dev ?
    router.push(
      `/dev/question/${nextQuestionID}`
    ) :
    router.push(
      `/question/${nextQuestionID}`
    )
  }

  // const nextQuestion = () => {
  //   let i = currentQuestion
  //   let showQuestion = 'hide'
  //   let optionLogicConditional = 'or'
  //   console.log(`Next Question`)


    // while (showQuestion === 'hide') {
    //   i += 1
    //   if (i >= questionLength) {
    //     break
    //   }
    //   optionLogicConditional = questions[i]?.optionLogicConditional || 'or'
    //   showQuestion = showQ(questions[i], optionLogicConditional, i)
    // }

    // if (i === undefined || i >= questionLength) {
    //   // console.log('you have magically reached the end 🤔')
    //   i = currentQuestion
    //   setAtTheLastQuestion(true)
    //   setSeeResultsBtn(true)
    //   actions.updateAction({
    //     ...state,
    //     calculator: {
    //       ...state.calculator,
    //       showResults: true
    //     }
    //   })
    //   dev ? router.push(`/dev/results`) : router.push(`/results`)
    // } else {
    //   actions.updateAction({
    //     ...state,
    //     calculator: {
    //       ...state.calculator,
    //       currentQuestion: i === undefined || i > questionLength ? currentQuestion : i
    //     }
    //   })
      // dev ?
      // router.push(
      //   `/dev/question/${
      //     i === undefined || i > questionLength ? questions[currentQuestion]._id : questions[i]._id
      //   }`
      // ) :
      // router.push(
      //   `/question/${
      //     i === undefined || i > questionLength ? questions[currentQuestion]._id : questions[i]._id
      //   }`
      // )
    // }
  // }

  // const QuestionAnswered = (q) => {
  //   if (state?.calculator?.questions[q]?.answer) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  // console.log(`❓ Current Question Answered: ${QuestionAnswered(currentQuestionID) ? '👍🏻' : '👎🏻' }`)

  useEffect(() => {
    // Set the state for `Question Answered`
    console.log(state?.calculator?.questions[currentQuestionID])
    console.log(state?.calculator?.questions)
    if (state?.calculator?.questions[currentQuestionID]?.answer) {
      setQuestionAnswered(true)
    } else {
      setQuestionAnswered(false)
    }
  }, [currentQuestionID, state])

  if (!question || !questions) {
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

          <Flex direction={{ base: "column", md: "row" }} alignItems={{ base: "flex-start", md: "center" }} >
            {currentQuestion > 0 && (
              <Button
                //    onClick={() => prevQuestion()}
                leftIcon={<FaArrowAltCircleLeft />}
                variant="solid"
                shadow="md"
                background="#565A5C"
                color="#fff"
                _hover={{ background: '#565A5C' }}
                _active={{ background: '#565A5C' }}
                _disabled={{ background: '#A2A4A3', shadow: 'none', cursor: 'not-allowed' }}
                mr={{ base: "0", md: "24px" }}
                mb={{ base: "24px", md: "0" }}
              >
                Previous Question
              </Button>
            )}

            {questionLength > currentQuestion && (
              <Button
                onClick={() => HandleNextQuestion()}
                // isDisabled={QuestionAnswered(currentQuestionID) ? false : true}
                isDisabled={questionAnswered ? false : true}
                rightIcon={<FaArrowAltCircleRight />}
                variant="solid"
                shadow="md"
                background="blue.500"
                color="#fff"
                _hover={{ background: 'blue.600' }}
                _active={{ background: 'blue.500' }}
                _disabled={{ background: '#A2A4A3', shadow: 'none', cursor: 'not-allowed' }}
                //tabIndex="4"
                mr="24px"
              >
                {atTheLastQuestion ? 'See Results' : 'Next Question'}
              </Button>
            )}

          </Flex>
          {/*
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
            <Link href="/results"><a>Back to Results</a></Link>
          </Button>}

          </Flex>
            */}
        </motion.div>
      </Box>
    </Flex>
  )
}
