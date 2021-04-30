import { useStateMachine } from 'little-state-machine'

import { Heading, Box } from '@chakra-ui/react'

export function Results () {
  const { state } = useStateMachine()
  const { questions } = state.calculator
  return (
    <Box>
      <Heading size='lg'>My Results</Heading>

    </Box>
  )
}
