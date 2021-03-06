import { Options } from '@/components/calculator/options'
import { Box } from '@chakra-ui/react'

export function Question (props) {
  const { question } = props
  return (
      <Box mb='10' mt='4'>
        <Options question={question} title={question.title} description={question.description} />
      </Box>
  )
}
