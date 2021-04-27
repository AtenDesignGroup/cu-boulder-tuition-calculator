import { AnimatePresence } from 'framer-motion'
import { Text as BodyText } from '@/components/serializers/text'

import { Question } from '@/components/calculator/question'
import { Flex, Heading, Box } from '@chakra-ui/react'

export function Calculator ({ tuitionCalculator, questions }) {
  const questionLength = questions?.length - 1

  return (
    <Flex paddingY={'5rem'} flex='1' flexDir='column' width='100%' maxW='860px' mx='auto'>

      <Heading mb='2'>{tuitionCalculator.title}</Heading>
      <BodyText blocks={tuitionCalculator.description} />

      <Box mt='10'>
        <AnimatePresence>
          {questions.map((question, i) =>
            <Question key={question._id} question={question} index={i} questionLength={questionLength} />)}
        </AnimatePresence>
      </Box>

    </Flex>
  )
}
