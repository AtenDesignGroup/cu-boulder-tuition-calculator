import { useEffect } from 'react'
import { useStateMachine } from 'little-state-machine'

import { AnimatePresence } from 'framer-motion'
import { Text as BodyText } from '@/components/serializers/text'

import { Question } from '@/components/calculator/question'
import { Results } from '@/components/calculator/results'
import { Flex, Heading, Box } from '@chakra-ui/react'

export function Calculator ({ tuitionCalculator, questions }) {
  // console.log({ questions })
  // console.log({ tuitionCalculator })
  const { state } = useStateMachine()
  const { showResults } = state.calculator
  const questionLength = questions?.length - 1

  useEffect(() => {
    state.renderClientSideComponent = true;
  });

  return (
    <Flex paddingY={'5rem'} flex='1' flexDir='column' width='100%' maxW='860px' mx='auto'>

      <Heading mb='2'>{tuitionCalculator.title}</Heading>
      <BodyText blocks={tuitionCalculator.description} />

      <Box mt='10'>
        <AnimatePresence>
          {questions.map((question, index) => {
            let prev = questions[index - 1]
            let next = questions[index + 1]
            return (
              <Question key={question._id} question={question} index={index} questionLength={questionLength}
                nextQ={next || null} prevQ={prev || null} questions={questions} />
            )
          })}
        </AnimatePresence>
        {showResults && <Results />}
      </Box>

    </Flex>
  )
}
