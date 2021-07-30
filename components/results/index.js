import { useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useStateMachine } from 'little-state-machine'
import Link from 'next/link'
import updateAction from '@/hooks/updateAction'
import { Category } from '@/components/results/category'

import ReactToPrint from 'react-to-print'
import { showArray, totalGenerator } from '@/utils/results'
import {
  Heading,
  Box,
  Flex,
  Stack,
  Radio,
  RadioGroup,
  Text,
  Button,
  FormLabel,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { Text as BodyText } from '@/components/serializers/text'
import { Counter } from '@/components/counter'
import { FaPencilAlt, FaPrint, FaCaretSquareLeft } from 'react-icons/fa'

export function Results({ categories, tuitionCalculator, dev }) {
  const router = useRouter()
  const { actions, state } = useStateMachine({ updateAction })
  const { questions, results, totalSemesters } = state.calculator
  const mainRef = useRef()
  const componentRef = useRef()

  const updateTotalSemesters = (val) => {
    val = parseInt(val)
    actions.updateAction({
      ...state,
      calculator: {
        ...state.calculator,
        totalSemesters: val,
        ...state.calculator.results,
      },
    })
  }

  const filteredResults = categories
    ?.map((val) => {
      return {
        ...val,
        lineItems: val.lineItems
          .map((item) => {
            return {
              ...item,
              total: totalGenerator(item?.itemValue[0], questions),
            }
          })
          .filter((val) => showArray(val, questions) === true),
      }
    })
    .filter((val) => val.lineItems.length > 0)
    .map((val) => {
      const catTotals = []
      let catTotal = 0
      val.lineItems.map((item) => {
        // console.log(item.frequency)
        catTotals.push(
          item.frequency === 'perSemester'
            ? parseFloat(item.total) * totalSemesters
            : parseFloat(item.total)
        )
        catTotals.length > 0
          ? (catTotal = catTotals.reduce((a, b) => parseFloat(a) + parseFloat(b), 0))
          : (catTotal = catTotals[0])
      })
      return {
        ...val,
        total: catTotal,
      }
    })

  const grandTotals = []
  let grandTotal = 0
  filteredResults.map((item) => {
    grandTotals.push(parseFloat(item.total))
    grandTotals.length > 0
      ? (grandTotal = grandTotals.reduce((a, b) => parseFloat(a) + parseFloat(b), 0))
      : (grandTotal = grandTotals[0])
  })

  const StartOver = () => {
    // console.clear()
    actions.updateAction({
      ...state,
      calculator: {
        currentQuestion: 0,
        lastQuestion: null,
        showResults: false,
        questions: [],
        results: [],
        totalSemesters: 1,
      },
    })
    if (dev) {
      router.push(`/dev`)
    } else {
      router.push(`/`)
    }
  }

  return (
    <Box mb={10} className="printNoMargins">
      <Box ref={componentRef}>
        <Box mb={10} className="printNoMargins">
          <Flex alignItems="center" className="printVisibilityHide" mb={10}>
            <RadioGroup
              name="totalSemestersView"
              onChange={updateTotalSemesters}
              value={totalSemesters.toString()}
              defaultChecked={totalSemesters.toString()}
              as="fieldset"
            >
              <FormLabel fontWeight="bold" as="legend">
                Estimate costs for:
              </FormLabel>
              <Stack direction="row">
                <Radio value="1" id="one" colorScheme="yellow">
                  One Semester
                </Radio>
                <Radio value="2" id="two" colorScheme="yellow">
                  Two Semesters
                </Radio>
              </Stack>
            </RadioGroup>
          </Flex>

          <Flex
            justifyContent="space-between"
            alignItems="baseline"
            className="printNoMargins"
            backgroundColor="yellow.500"
            p="30px"
            flexDirection={{ base: 'column', md: 'row' }}
          >
            <Heading size="lg" as="h1" mb={{ base: '1', md: '0' }}>
              Your total estimate
            </Heading>

            <Text
              fontSize="2xl"
              mb="0"
              fontWeight="bold"
              color="gray.800"
              className="printPrice"
              suppressHydrationWarning={true}
            >
              <Counter target={grandTotal} duration={2} />{' '}
              <ChakraLink href="#disclaimer" aria-label="View disclaimer" textDecoration="none">
                *
              </ChakraLink>
            </Text>
          </Flex>
        </Box>

        <Box mb={10} className="printNoMargins" pt={0}>
          {filteredResults.map((category) => (
            <Category category={category} key={category._id} questions={questions} />
          ))}
        </Box>
      </Box>
      {tuitionCalculator?.disclaimer && (
        <Box mb="8" id="disclaimer">
          <BodyText blocks={tuitionCalculator.disclaimer} />
        </Box>
      )}

      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'flex-start', md: 'center' }}
        justifyContent={{ md: 'space-between' }}
      >
        <Flex
          direction={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'flex-start', md: 'center' }}
          mb={{ base: '6', md: '0' }}
        >
          <ReactToPrint
            trigger={() => {
              return (
                <Button
                  leftIcon={<FaPrint />}
                  variant="solid"
                  fontSize="sm"
                  colorScheme="blue"
                  mr={{ base: '24px' }}
                  mb={{ base: '6', md: '0' }}
                >
                  Print Results
                </Button>
              )
            }}
            content={() => componentRef.current}
          />
          {questions && Object.keys(questions).length > 0 && dev && (
            <Button leftIcon={<FaPencilAlt />} variant="link" fontSize="sm" colorScheme="blue">
              <a href={`/dev/question/${Object.keys(questions)[0]}`}>Edit Answers</a>
            </Button>
          )}
          {questions && Object.keys(questions).length > 0 && !dev && (
            <Button leftIcon={<FaPencilAlt />} variant="link" fontSize="sm" colorScheme="blue">
              <a href={`/question/${Object.keys(questions)[0]}`}>Edit Answers</a>
            </Button>
          )}
        </Flex>

        <Button
          leftIcon={<FaCaretSquareLeft />}
          variant="link"
          fontSize="sm"
          colorScheme="blue"
          onClick={() => StartOver()}
        >
          Start Over
        </Button>
      </Flex>
    </Box>
  )
}
