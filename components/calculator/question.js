// import { useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import { isStringEmpty } from '@/utils/helpers'
import updateAction from '@/hooks/updateAction'
import { Text as BodyText } from '@/components/serializers/text'
import { Options } from '@/components/calculator/options'
import { Text, Heading, Box, Button, Stack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";


export function Question ({ question, index, questionLength, nextQ, prevQ, questions }) {
  // console.log({ nextQ })
  // console.log({ prevQ })
  // const { register, handleSubmit } = useForm()
  const { actions, state } = useStateMachine({ updateAction })
  const { currentQuestion } = state.calculator
  // const { currentQuestion, showResults, questions } = state.calculator
  // const selectQuestionRef = useRef()

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

  // Animation Variants (Framer Motion)
  const variants = {
    initial: { opacity: 0, x: -50, display: 'none' },
    animate: {
      opacity: 1,
      x: 0,
      display: 'block'
    },
    removed: {
      opacity: 0,
      x: 50,
      display: 'none'
    }
  }
  // console.log(state?.calculator?.questions[question?._id]?.answer)
  return (
    <motion.div
      key={index}
      variants={variants}
      exit='removed'
      initial='initial'
      animate={currentQuestion === index ? 'animate' : 'initial'}
    >


      <Box mb='12' mt='4'>
        <Options question={question} title={question.title} description={question.description} />

        <Stack direction='row' spacing={4} align='center'>

          {currentQuestion > 0 &&
          <Button onClick={() => prevQuestion()} leftIcon={<HiChevronLeft />} variant="outline">Previous</Button> }

          {questionLength > currentQuestion &&
          <Button onClick={() => nextQuestion()} isDisabled={isStringEmpty(state?.calculator?.questions[question?._id]?.answer) ? true : false} rightIcon={<HiChevronRight />} variant="outline">Next</Button> }

          {questionLength === currentQuestion &&
          <Button onClick={() => seeResults()} isDisabled={isStringEmpty(state?.calculator?.questions[question?._id]?.answer) ? true : false}>See showResults</Button> }

        </Stack>

      </Box>

    </motion.div>
  )
}
