import { useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useStateMachine } from 'little-state-machine'
import NextLink from "next/link"
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
  useDisclosure,
  Collapse,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Link,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { Text as BodyText } from '@/components/serializers/text'
import { Counter } from '@/components/counter'
import { FaPencilAlt, FaPrint, FaCaretSquareLeft, FaQuestionCircle, FaCheckCircle } from 'react-icons/fa'

export function Results({ categories, tuitionCalculator, dev }) {
  const router = useRouter()
  const { isOpen, onToggle } = useDisclosure()
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
        <Box mb={6} className="printNoMargins">


          <Flex
            justifyContent="space-between"
            alignItems="baseline"
            className="printNoMargins"
            backgroundColor="yellow.500"
            p="30px"
            flexDirection={{ base: 'column', md: 'row' }}
          >
            <Heading size="lg" as="h1" mb={{ base: '1', md: '0' }}>
              Your CU Boulder Cost Estimate
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

          <Flex alignItems="center" className="printVisibilityHide" mt={10}>
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

        </Box>


        <Box mb={6}>

          <Button
                leftIcon={<FaQuestionCircle />}
                color={isOpen ? '#A82E26' : 'blue.600'}
                variant="link"
                onClick={onToggle}
                size="xs"
                py="12px"
                pr="0"
                mr="0"
                alignItems="end"
                aria-expanded={isOpen ? true : false}
                aria-label={`Your Selections`}
                mb={2}
              >
                {isOpen ? 'Hide Your Selections' : 'View Your Selections'}
              </Button>

          <Collapse in={isOpen} animateOpacity>
          <Box px="24px" pt="20px" pb="10px" bg="#fff" border="1px solid #A2A4A3">
          <OrderedList spacing={2} ml={1} mt={2}>
          {Object.values(questions).map(question =>
          <ListItem key={question.questionID} display='flex' alignItems='baseline'>
          <ListIcon as={FaCheckCircle} color='green.500' />

            <Text fontSize='sm' color='gray.600'>{question.title}:</Text>
            <Text fontSize='sm' ml={2} color='gray.800' fontWeight='bold'>{question.answerLabel}</Text>

            <Button leftIcon={<FaPencilAlt />} variant="link" fontSize="sm" colorScheme="blue" ml={3} display='flex' alignItems='baseline'>
            <NextLink href={`/question/${question.questionID}`} passHref><Link >edit</Link></NextLink>
            </Button>

          </ListItem>
            )}
        </OrderedList>
          </Box>
        </Collapse>
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
              <NextLink href={`/dev/question/${Object.keys(questions)[0]}`} passHref><Link>Edit Answers</Link></NextLink>
            </Button>
          )}
          {questions && Object.keys(questions).length > 0 && !dev && (
            <Button leftIcon={<FaPencilAlt />} variant="link" fontSize="sm" colorScheme="blue">
              <NextLink href={`/question/${Object.keys(questions)[0]}`} passHref><Link>Edit Answers</Link></NextLink>
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
