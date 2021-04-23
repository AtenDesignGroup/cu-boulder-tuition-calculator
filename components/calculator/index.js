import { useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import updateAction from '@/hooks/updateAction'
import { Text, Flex, Heading, Box, Select, Button } from '@chakra-ui/react'

export function Calculator ({ tuitionCalculator, questions }) {
  const { register, handleSubmit } = useForm()
  const { actions, state } = useStateMachine({ updateAction })
  const onSubmit = (data) => {
    actions.updateAction(data)
    // router.push('/wizard/step2')
    console.log({ data })
  }

  const questionLength = questions?.length
  // console.log({ questionLength })
  // console.log({ questions })
  const slugify = (val) => {
    return val.replace(/ /g, '-').replace(/[^\w\s]/gi, '-').toLowerCase()
  }

  return (
    <Flex paddingY={'5rem'} flex='1' flexDir='column' justifyContent='center' alignItems='center'>

      <Heading mb='2'>{tuitionCalculator.title}</Heading>
      {/* <Text>{tuitionCalculator.description}</Text> */}

      <Box maxW='860px' mx='auto'>
        {questions.map(question =>

          <Box key={question._id}>
            <Heading>{question.title}</Heading>
            {/* <Text>{question.description}</Text> */}

            <Box mb='12'>
              <form onSubmit={handleSubmit(onSubmit)}>
                {question.optionSets.map(optionSet =>
                  <Box key={optionSet._key}>
                    <Text color='#cecece'>{optionSet.title}</Text>
                    <Select {...register(`question-${slugify(question.title).toLowerCase()}-${optionSet._key}`)} defaultValue={`question-${slugify(question.title).toLowerCase()}-${optionSet._key}`}
                      placeholder='Select a value...'>
                      {optionSet.options.map(option =>
                        <option value={option.value.current} key={option._key} >
                          {option.title} - {option.value.current}
                        </option>
                      )}
                    </Select>
                  </Box>)}
                <input type='submit' />
              </form>
            </Box>

          </Box>

        )}

      </Box>

    </Flex>
  )
}
