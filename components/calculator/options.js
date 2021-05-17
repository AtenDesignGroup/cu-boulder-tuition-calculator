import { useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import updateAction from '@/hooks/updateAction'
import { Text as BodyText } from '@/components/serializers/text'
import { Heading, Box, Select, FormControl, FormLabel } from '@chakra-ui/react'

export function Options ({ question, title, description }) {
  const { register, handleSubmit } = useForm()
  const { actions, state } = useStateMachine({ updateAction })
  const { currentQuestion } = state.calculator
  const optionSetsLength = question?.optionSets?.length
  const selectRef = useRef()

  // function checkForFalse(val) {
  //   return val === false;
  // }

  // console.log({currentQuestion})
  // When the question has been updated/changed focus will be re-set to the Select
  useEffect(() => {
    // console.log('useEffect')
    selectRef.current && selectRef.current.focus();
  }, [currentQuestion])

  // Using the question's logic to show or hide
  const questionLogic = (q) => {
    // console.clear()
    // console.log({q})
    let showQuestion = false
    if (q?.optionLogics === undefined || q?.optionLogics?.length === 0) {
      showQuestion = true
      // console.log('no logics')
    } else {
      // console.log({ question })
      showQuestion = q?.optionLogics && q?.optionLogics?.map(logic =>
        state?.calculator?.questions[logic.logicSourceQuestion._ref]?.answer === logic.logicSourceValue
      )
    }
    let result = Array.isArray(showQuestion) ? !showQuestion.some(element => element === false) : showQuestion;
    return result
  }
  // Update State when a Select value has been updated
  const selectUpdate = (val, question) => {
    // console.log(val, question)
    actions.updateAction({
      ...state,
      calculator: {
        ...state.calculator,
        questions: {
          ...state.calculator.questions,
          [question._id]: {
            title: question.title,
            answer: val ? val : null
          }
        }
      }
    })
  }

  return (
    <>
    {optionSetsLength === 1 ? (
      <FormControl id={question?.optionSets[0]._key} key={question?.optionSets[0]._key} mb='6' ref={selectRef}>
          <FormLabel><Heading mb='6'>{title}</Heading></FormLabel>
          <Box mb='4'><BodyText blocks={description} /></Box>
          <Select
            {...register(`${question._id}`)}
            value={`${state?.calculator?.questions[question?._id]?.answer}`}
            placeholder='Select a value...'

            onChange={(e) => selectUpdate(e.currentTarget.value, question)}>
            {question?.optionSets[0].options.map(option =>
              <option value={option.value.current} key={option._key}>
                {option.title}
              </option>
            )}
          </Select>
        </FormControl>
    ):(
      question?.optionSets.map(optionSet => questionLogic(optionSet) &&
        <FormControl id={optionSet._key} key={optionSet._key} mb='6'>
        <FormLabel><Heading mb='6'>{title}</Heading></FormLabel>
        <Box mb='4'><BodyText blocks={description} /></Box>
          <Select
            {...register(`${question._id}`)}
            value={`${state?.calculator?.questions[question?._id]?.answer}`}
            placeholder='Select a value...'
            onChange={(e) => selectUpdate(e.currentTarget.value, question)}>
            {optionSet.options.map(option =>
              <option value={option.value.current} key={option._key}>
                {option.title}
              </option>
            )}
          </Select>
        </FormControl>
    ))}
    </>
  )
}
