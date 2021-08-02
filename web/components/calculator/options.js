import { useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import updateAction from '@/hooks/updateAction'
import { Text as BodyText } from '@/components/serializers/text'
import { Heading, Box, Select, FormControl, FormLabel } from '@chakra-ui/react'

export function Options({ question, title, description }) {
  const { register, handleSubmit } = useForm()
  const { actions, state } = useStateMachine({ updateAction })
  const { currentQuestion } = state.calculator
  const optionSetsLength = question?.optionSets?.length
  const mainRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      mainRef.current.focus()
    }, 1)
  }, [])

  // Using the question's logic to show or hide
  const questionLogic = q => {
    let showQuestion = false
    if (q?.optionLogics === undefined || q?.optionLogics?.length === 0) {
      showQuestion = true
    } else {
      showQuestion =
        q?.optionLogics &&
        q?.optionLogics?.map(
          logic =>
            state?.calculator?.questions[logic.logicSourceQuestion._ref]?.answer ===
            logic.logicSourceValue
        )
    }
    let result = Array.isArray(showQuestion)
      ? !showQuestion.some(element => element === false)
      : showQuestion
    return result
  }
  // Update State when a Select value has been updated
  const selectUpdate = (val, question) => {
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
        <FormControl id={question?.optionSets[0]._key} key={question?.optionSets[0]._key} mb="6">
          <FormLabel>
            <Heading mb="6" as="h1" ref={mainRef} tabIndex="-1">
              {title}
            </Heading>
          </FormLabel>
          {description && (
            <Box
              mb="8"
              // tabIndex="1"
            >
              <BodyText blocks={description} />
            </Box>
          )}
          <Select
            {...register(`${question._id}`)}
            value={`${state?.calculator?.questions[question?._id]?.answer}`}
            placeholder="Make a selection"
            onChange={e => selectUpdate(e.currentTarget.value, question)}
            // tabIndex="2"

            //rootProps={{}}
            borderColor="#A2A4A3"
            borderRadius="none"
          >
            {question?.optionSets[0].options.map(option => (
              <option value={option.value.current} key={option._key}>
                {option.title}
              </option>
            ))}
          </Select>
        </FormControl>
      ) : (
        question?.optionSets.map(
          optionSet =>
            questionLogic(optionSet) && (
              <FormControl id={optionSet._key} key={optionSet._key} mb="6">
                <FormLabel>
                  <Heading mb="6">{title}</Heading>
                </FormLabel>
                <Box mb="4">
                  <BodyText blocks={description} />
                </Box>
                <Select
                  {...register(`${question._id}`)}
                  value={`${state?.calculator?.questions[question?._id]?.answer}`}
                  placeholder="Make a selection"
                  onChange={e => selectUpdate(e.currentTarget.value, question)}
                >
                  {optionSet.options.map(option => (
                    <option value={option.value.current} key={option._key}>
                      {option.title}
                    </option>
                  ))}
                </Select>
              </FormControl>
            )
        )
      )}
    </>
  )
}