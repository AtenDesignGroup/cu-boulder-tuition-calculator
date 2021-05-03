import { useState, useEffect } from 'react'
import { useStateMachine } from 'little-state-machine'
import updateAction from '@/hooks/updateAction'
import { isStringEmpty } from '@/utils/helpers'
import { AnimatePresence } from 'framer-motion'
import { Text as BodyText } from '@/components/serializers/text'

import { Question } from '@/components/calculator/question'
import { Results } from '@/components/calculator/results'
import { Flex, Heading, Box, Stack, Button } from '@chakra-ui/react'
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

export function Calculator ({ tuitionCalculator, questions }) {

  const { actions, state } = useStateMachine({ updateAction })
  const { currentQuestion } = state.calculator
  const { showResults } = state.calculator
  const questionLength = questions?.length - 1
  const [currentQuestionID, setCurrentQuestionID] = useState(questions[currentQuestion]._id)

  useEffect(() => {
    setCurrentQuestionID(questions[currentQuestion]._id)
  }, [currentQuestion])

    // Using the question's logic to show or hide
    const questionLogic = () => {
      let showQuestion = false
      if (question.optionLogics === undefined || question?.optionLogics?.length === 0) {
        showQuestion = true
      } else {
        // console.log({ question })
        showQuestion = question?.optionLogics && question?.optionLogics?.map(logic =>
          state?.calculator?.questions[logic.logicSourceQuestion._ref]?.answer === logic.logicSourceValue
        )[0]
      }
      return showQuestion
    }

    const showQ = (q) => {
      // console.log({ q })
      let showQuestion = false
      if (q?.optionLogics === undefined || q?.optionLogics?.length === 0) {
        showQuestion = true
      } else {
        // console.log({ question })
        showQuestion = q?.optionLogics && q?.optionLogics?.map(logic =>
          state?.calculator?.questions[logic.logicSourceQuestion._ref]?.answer === logic.logicSourceValue
        )[0]
      }
      return showQuestion
    }
    // console.log(questionLogic())

    const nextQuestion = () => {
      // console.clear()
      let i = currentQuestion
      let showQuestion = false
      do {
        i += 1
        showQuestion = showQ(questions[i])
      } while (showQuestion === false || i === questionLength)
      i = (i === undefined || i > questionLength) ? questionLength : i
      // console.log(i)

      actions.updateAction({
        ...state,
        calculator: {
          ...state.calculator,
          currentQuestion: (i === undefined || i > questionLength) ? questionLength : i
        }
      })
      // FIXME:
      // selectQuestionRef.current.focus()
    }

    // Button to advance the user to the previous question, not shown on the first question
    const prevQuestion = () => {
      // console.clear()
      let i = currentQuestion
      let showQuestion = false
      do {
        i -= 1
        // console.log(questions[i])
        // console.log(showQ(questions[i]))
        showQuestion = showQ(questions[i])
      } while (showQuestion === false)
      // console.log({ i })
      actions.updateAction({
        ...state,
        calculator: {
          ...state.calculator,
          currentQuestion: (i === undefined || i < 0) ? 0 : i
        }
      })

      // FIXME:
      //  selectQuestionRef.current.focus()
    }

    // Button function to show the Results, only seen on the last question
    const seeResults = () => {
      // console.log('seeshowResults')
      actions.updateAction({
        ...state,
        calculator: {
          ...state.calculator,
          showResults: true
        }
      })
    }

  return (
    <Flex paddingY={'5rem'} flex='1' flexDir='column' width='100%' maxW='860px' mx='auto'>

      <Heading mb='2'>{tuitionCalculator.title}</Heading>
      <BodyText blocks={tuitionCalculator.description} />

      <Box mt='10' suppressHydrationWarning={true}>
      {process.browser && (<>
        <AnimatePresence>
          {questions.map((question, index) => {
            return (
              <Question key={question._id} question={question} index={index} questionLength={questionLength} questions={questions} />
            )
          })}
        </AnimatePresence>

        <Stack direction='row' spacing={4} align='center' mb='12'>

          {currentQuestion > 0 &&
          <Button onClick={() => prevQuestion()} leftIcon={<HiChevronLeft />} variant="outline">Previous</Button> }

          {questionLength > currentQuestion &&
          <Button onClick={() => nextQuestion()} isDisabled={isStringEmpty(state?.calculator?.questions[currentQuestionID]?.answer) ? true : false} rightIcon={<HiChevronRight />} variant="outline">Next</Button> }

          {questionLength === currentQuestion &&
          <Button onClick={() => seeResults()} isDisabled={isStringEmpty(state?.calculator?.questions[currentQuestionID]?.answer) ? true : false}>See showResults</Button> }

        </Stack>


        {showResults && <Results />}
      </>)}
      </Box>

    </Flex>
  )
}
