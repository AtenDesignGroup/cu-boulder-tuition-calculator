import { useRef, useEffect } from 'react'
import { useStateMachine } from 'little-state-machine'
import Link from 'next/link'
import updateAction from '@/hooks/updateAction'
import { Category } from '@/components/results/category'

import { Text as BodyText } from '@/components/serializers/text'
import ReactToPrint from 'react-to-print'
import { showArray, totalGenerator, toFixedNumber } from '@/utils/results'
import {
  Heading,
  Box,
  Flex,
  Stack,
  Radio,
  RadioGroup,
  Text,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import { Counter } from '@/components/counter'
import { FaPencilAlt, FaPrint, FaCaretSquareLeft } from 'react-icons/fa'


export function Results({ categories }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { actions, state } = useStateMachine({ updateAction })
  const { questions, results, totalSemesters } = state.calculator
  const mainRef = useRef()
  const componentRef = useRef()

  const linkToPrint = () => {
    return <button>Click To PrintOF Body</button>
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     mainRef.current.focus();
  //   }, 1)
  // }, [])

  const updateTotalSemesters = val => {
    val = parseInt(val)
    actions.updateAction({
      ...state,
      calculator: {
        ...state.calculator,
        totalSemesters: val,
        ...state.calculator.results
      }
    })
  }

  const addFilterResults = val => {
    // console.log({val})
    // actions.updateAction({
    //   ...state,
    //   calculator: {
    //     ...state.calculator,
    //     results: {
    //       ...state.calculator.results,
    //       [val._id]: {
    //         ...state.calculator.results[val._id],
    //         title: val.title,
    //         // items: val.lineItems
    //       }
    //     }
    //   }
    // })
  }

  const filteredResults = categories
    ?.map(val => {
      return {
        ...val,
        lineItems: val.lineItems
          .map(item => {
            return {
              ...item,
              total: totalGenerator(item?.itemValue[0], questions)
            }
          })
          .filter(val => showArray(val, questions) === true)
      }
    })
    .filter(val => val.lineItems.length > 0)
    .map(val => {
      const catTotals = []
      let catTotal = 0
      val.lineItems.map(item => {
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
        total: catTotal
      }
    })
  // console.log({ filteredResults })


const test = Object.entries(filteredResults)
.map((obj, key) =>

  ({
    [obj[1]._id]: obj[1]
  })
)


  // console.clear()
  // console.log({test})
    // console.log(JSON.stringify(test.flat(2), 0, 2))

  const grandTotals = []
  let grandTotal = 0
  filteredResults.map(item => {
    grandTotals.push(parseFloat(item.total))
    grandTotals.length > 0
      ? (grandTotal = grandTotals.reduce((a, b) => parseFloat(a) + parseFloat(b), 0))
      : (grandTotal = grandTotals[0])
  })

  // console.log({filteredResults})
  // console.log({grandTotal})
  return (
    <Box mb={12} className="printNoMargins">
      <Box ref={componentRef}>
        <Box mb={12} className="printNoMargins">
          <Heading
            size="sm"
            mb={4}
            color="gray.600"
            ref={mainRef}
            // tabIndex="-1"
            as="h1"
            className="printNoMargins"
          >
          Estimate costs for:
          </Heading>

         {/* <Heading mb={2} as="h2" size="md" className="printNoMargins">
            Estimated costs
            {totalSemesters === 1 && <> for One Semester</>}
            {totalSemesters === 2 && <> for Two Semesters</>}
          </Heading> */}



          <Flex alignItems="center" className="printVisibilityHide" mb={12}>
            <RadioGroup
              name="totalSemestersView"
              onChange={updateTotalSemesters}
              value={totalSemesters.toString()}
              defaultChecked={totalSemesters.toString()}
              as="fieldset"
            >
              <legend className="visuallyHidden">Choose number of semesters to view</legend>
              <Stack direction="row">
                <Radio value="1" id="one">
                  One Semester
                </Radio>
                <Radio value="2" id="two">
                  Two Semesters
                </Radio>
              </Stack>
            </RadioGroup>
          </Flex>


          <Flex
          justifyContent="space-between"
          alignItems="baseline"
          mb={4}
          className="printNoMargins"
        >
          <Heading size="lg" as="h3" mb="0">
          Your total estimate
          </Heading>
          <Text fontSize="2xl" mb="0" fontWeight="bold" color="gray.800" className="printPrice">
            <Counter target={grandTotal} duration={2} />
          </Text>
        </Flex>


        </Box>

        <Box mb={20} className="printNoMargins" borderTop="2px solid #A2A4A3" pt={10}>
          {filteredResults.map(category => (
            <Category category={category} key={category._id} questions={questions} />
          ))}
        </Box>
      </Box>

      <Box mb="8px">
          <Button leftIcon={<FaPencilAlt />} variant="link" fontSize="xs" colorScheme="blue">
            <a href={`/question/${Object.keys(questions)[0]}`}>Edit Questions</a>
          </Button>
      </Box>

      <Box mb="8px">
          <Button leftIcon={<FaCaretSquareLeft />} variant="link" fontSize="xs" colorScheme="blue">
            <a href="/">Start Over</a>
          </Button>
      </Box>

      <ReactToPrint
        trigger={() => {
          return <Button leftIcon={<FaPrint />} variant="link" fontSize="xs" colorScheme="blue">Print Results</Button>
        }}
        content={() => componentRef.current}
      />
    </Box>
  )
}

// FaPencilAlt, FaPrint, FaCaretSquareLeft