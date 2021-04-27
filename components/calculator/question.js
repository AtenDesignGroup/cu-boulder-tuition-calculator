import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import updateAction from '@/hooks/updateAction'
import { Text as BodyText } from '@/components/serializers/text'
import { Text, Flex, Heading, Box, Select, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export function Question ({ question, index, questionLength }) {
  const { register, handleSubmit } = useForm()
  const { actions, state } = useStateMachine({ updateAction })
  const { currentQuestion, showResults, questions } = state.calculator

  const selectQuestionRef = useRef()

  const nextQuestion = () => {
    console.log('nextQuestion')
    actions.updateAction({
      ...state,
      calculator: {
        ...state.calculator,
        currentQuestion: currentQuestion + 1
      }
    })
    selectQuestionRef.current.focus()
  }
  const prevQuestion = () => {
    console.log('prevQuestion')
    actions.updateAction({
      ...state,
      calculator: {
        ...state.calculator,
        currentQuestion: currentQuestion - 1
      }
    })
    selectQuestionRef.current.focus()
  }
  const seeResults = () => {
    console.log('seeshowResults')
    actions.updateAction({
      ...state,
      calculator: {
        ...state.calculator,
        showResults: true
      }
    })
  }

  const selectUpdate = (val, id) => {
    console.log(val, id)
    actions.updateAction({
      ...state,
      calculator: {
        ...state.calculator,
        questions: {
          ...state.calculator.questions,
          [id]: {
            answer: val
          }
        }
      }
    })
  }
  // console.log({ currentQuestion })
  // console.log({ state })
  // console.log({ questionLength })
  // console.log({ question })
  const slugify = (val) => {
    return val.replace(/ /g, '-').replace(/[^\w\s]/gi, '-').toLowerCase()
  }
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

  return (
    <motion.div
      key={index}
      variants={variants}
      exit='removed'
      initial='initial'
      animate={currentQuestion === index ? 'animate' : 'initial'}
    >
      <Heading mb='4'>{question.title}</Heading>
      <BodyText blocks={question.description} />

      {/*
        QUESTION - Logic
        question.optionLogics.map(logic =>
          question ID: logic.logicSourceQuestion._ref
          question value: logic.logicSourceQuestion.logicSourceValue

          state.calculator['logic.logicSourceQuestion._ref']
          )
      */}
      {
        question?.optionLogics && question?.optionLogics?.map(logic => {
          let showQ = state.calculator.questions[logic.logicSourceQuestion._ref].answer === logic.logicSourceValue
          console.clear()
          console.log(state.calculator.questions[logic.logicSourceQuestion._ref])
          console.log(logic.logicSourceValue)
          console.log({ showQ })
        }
        )
      }
      <Box background='#e1e1e1' p='4'>
        <pre>
          {JSON.stringify(question.optionLogics, 0, 2)}
        </pre>
      </Box>

      <Box mb='12' mt='4'>
        {question.optionSets.map(optionSet =>
          <Box key={optionSet._key} mb='4'>
            <Text color='#cecece'>{optionSet.title}</Text>
            <Select {...register(`question-${slugify(question.title).toLowerCase()}-${optionSet._key}`)} defaultValue={`question-${slugify(question.title).toLowerCase()}-${optionSet._key}`}
              placeholder='Select a value...' ref={selectQuestionRef}
              onChange={(e) => selectUpdate(e.currentTarget.value, question._id)}
            >
              {optionSet.options.map(option =>
                <option value={option.value.current} key={option._key}>
                  {option.title} - {option.value.current}
                </option>
              )}
            </Select>
          </Box>)}
        questionLength: {questionLength}
        currentQuestion: {currentQuestion}

        {currentQuestion > 0 &&
        <Button onClick={() => prevQuestion()}>Previous</Button> }

        {questionLength > currentQuestion &&
        <Button onClick={() => nextQuestion()}>Next</Button> }

        {questionLength === currentQuestion &&
          <Button onClick={() => seeResults()}>See showResults</Button> }

      </Box>

      {showResults &&
      <Box mb='6'>
        <Heading>showResults</Heading>
      </Box>}

      <Box background='#e1e1e1' p='4'>
        <Heading>Questions</Heading>
        <pre>
          {JSON.stringify(questions, 0, 2)}
        </pre>
      </Box>

    </motion.div>
  )
}
