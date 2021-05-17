import { useStateMachine } from 'little-state-machine'

import { Heading, Box, Text, Flex } from '@chakra-ui/react'
import { Text as BodyText } from '@/components/serializers/text'

export function LineItems({data}) {
  // console.log({data})
  const {_key, description, value, title, frequency, optionLogics} = data

  const { state } = useStateMachine()
  const { questions, semesters, results, totalSemesters, totalCreditHours } = state.calculator

  // oneTime * 1
  // perSemester * 1 * [numOfSemesters]
  // perCreditHour * creditHours
  // perYear * 1


  const logic = ({_key, description, value, title, frequency, optionLogics}) => {

  }

  return (
    <>
     <Heading mb={3} size="md">{title}</Heading>
     <Box mb='4' p='6' bg='gray.100' rounded='sm'><BodyText blocks={description} /></Box>
     <Box my='6'>
      <Text>value: ${value}</Text>
      <Text>frequency: {frequency}</Text>
      </Box>
      <Box my='6'>
        <Heading size='sm'>Logic</Heading>
        {optionLogics.map(logic => (
          <Box key={logic._key} my={3} border='solid #e1e1e1 1px' p={5}>
            <Text>Question id: {logic.logicSourceQuestion._ref}</Text>
            <Text>value equals: {logic.logicSourceQuestion._ref}</Text>
          </Box>
        ))}
      </Box>
    </>
  )
}
