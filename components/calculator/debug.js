import { useStateMachine } from 'little-state-machine'
import updateAction from '@/hooks/updateAction'
import { Heading, Box, Code, Button, Flex } from '@chakra-ui/react'
import { HiTrash } from "react-icons/hi";
export function Debug () {
  const { actions, state } = useStateMachine({ updateAction })
  const { questions } = state.calculator

  const clearData = () => {
    // console.clear()

    actions.updateAction({
      ...state,
      calculator: {
        currentQuestion: 0,
        showResults: false,
        questions: []
      }
    })

  }

  return (
    <Box p='4' overflow='auto'>
      <Flex justifyContent='space-between'>
      <Heading size='lg'>My Data</Heading>
      <Button rightIcon={<HiTrash />} size='sm' colorScheme="red" variant="outline" onClick={() => clearData()}>Clear Data</Button>
      </Flex>
      <Code colorScheme='gray.200'>
        <pre>
          {JSON.stringify(questions, 0, 2)}
        </pre>
      </Code>
    </Box>
  )
}
