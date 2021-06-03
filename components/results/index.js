import { useRef, useEffect } from 'react'
import { useStateMachine } from 'little-state-machine'
import Link from 'next/link'
import updateAction from '@/hooks/updateAction'
import { LineItems } from '@/components/results/line-items'
import { Text as BodyText } from '@/components/serializers/text'
import ReactToPrint from "react-to-print"
import { showArray, totalGenerator, toFixedNumber } from '@/utils/results'
import { Heading, Box, Flex, Stack, Radio, RadioGroup, Text,
  IconButton,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure} from '@chakra-ui/react'
import { Counter } from '@/components/counter'
import { MdInfo as InfoIcon } from 'react-icons/md'


export function Results({ categories }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { actions, state } = useStateMachine({ updateAction })
  const { questions, results, totalSemesters } = state.calculator
  const mainRef = useRef()
  const componentRef = useRef()

  const linkToPrint = () => {
    return (
        <button>Click To PrintOF Body</button>
    )
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

  const addFilterResults = (val) => {
    console.log({val})
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

  const filteredResults = categories?.map(val => {
    return {
      ...val,
      lineItems: val.lineItems.map(item => {
        return {
          ...item,
          total: totalGenerator(item?.itemValue[0], questions)
        }
      }).filter(val => showArray(val, questions) === true)
    };
  }).filter(val => val.lineItems.length > 0)
  .map(val =>
    {
      const catTotals = [];
      let catTotal = 0;
      val.lineItems.map(item => {
        console.log(item.frequency)
        catTotals.push(item.frequency === 'perSemester' ? parseFloat(item.total) * totalSemesters : parseFloat(item.total));
        catTotals.length > 0 ? catTotal = catTotals.reduce((a,b) => parseFloat(a) + parseFloat(b), 0) :  catTotal = catTotals[0]
      })
      return {
        ...val,
        total: catTotal
      }
    }
  )

  const grandTotals = [];
  let grandTotal = 0;
  filteredResults.map(item => {
    grandTotals.push(parseFloat(item.total));
    grandTotals.length > 0 ? grandTotal = grandTotals.reduce((a,b) => parseFloat(a) + parseFloat(b), 0) :  grandTotal = grandTotals[0]
  })

  console.log({filteredResults})
  console.log({grandTotal})
  return (
    <Box mb={12} className="printNoMargins">

    <Box ref={componentRef}>
      <Box mb={12} className="printNoMargins">

        <Heading size="sm" mb={4} color="gray.600" textTransform="uppercase" ref={mainRef}
        // tabIndex="-1"
        as="h1" className="printNoMargins">
          My Results
        </Heading>

        <Heading mb={2} as="h2" size='md' className="printNoMargins">
          Estimated costs
          {totalSemesters === 1 && <> for One Semester</>}
          {totalSemesters === 2 && <> for Two Semesters</>}
        </Heading>

        <Flex justifyContent="space-between" alignItems='baseline' mt={4} mb={4} className="printNoMargins">
        <Heading textTransform='uppercase' size="2xl" as='h3'>Grand Total</Heading>
        <Text fontSize="3xl" mb='0' fontWeight='bold' color="gray.800" className="printPrice"><Counter target={grandTotal} duration={2} /></Text>
        </Flex>


        <Flex alignItems="center" className="printVisibilityHide">
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
                View one semester
              </Radio>
              <Radio value="2" id="two">
                View two semesters
              </Radio>
            </Stack>
          </RadioGroup>
        </Flex>
      </Box>

      <Box mb={20}  className="printNoMargins">

        {filteredResults.map(category => (
          <Box key={category._id} mb={6} pb={2} borderBottom="1px solid #eee" className="printNoMargins">

          <Flex alignItems="center" mb={3} className="printNoMargins">
            <Heading size="xl" color="gray.600">
              {category.title}
            </Heading>

            {category?.description && (<>
              <IconButton
              variant="ghost"
              aria-label={`${category.title} description`}
              fontSize="20px"
              onClick={onOpen}
              icon={<InfoIcon />}
              className="printVisibilityHide"
            />
              <Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>{category.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <BodyText blocks={category.description} />
                </ModalBody>
              </ModalContent>
            </Modal>
            </>
            )}
            </Flex>

            {/*<Box mb="4">
              <BodyText blocks={category.description} />
            </Box>*/}

            {category.lineItems && category.lineItems !== undefined &&
              category.lineItems.length > 0 &&
              category?.lineItems.map(lineItem => {

                return (<LineItems
                  key={lineItem._key}
                  data={lineItem}
                  catID={category._id}
                  catTitle={category.title}
                  itemTotal={totalGenerator(lineItem?.itemValue[0], questions)}
                />)
              })
              .filter(val => showArray(val.props.data, questions) === true)
            }
            <Flex justifyContent="space-between">
            <Heading textTransform='uppercase' size="sm" as='h3' color="gray.600">Sub Total</Heading>
            <Text fontSize="lg" mb='0' color="gray.600"><Counter target={category.total} duration={2} /></Text>
            </Flex>
          </Box>
        ))}

      </Box>

      </Box>

      <Box mb={6}>
      <Button variant="outline">
          <Link href={`/question/${Object.keys(questions)[0]}`}>
          <a>Go back</a>
          </Link>
        </Button>{ ' ' }
        and edit your submission</Box>

        <ReactToPrint
          trigger={() => {
            return <Button variant="outline">Print Results</Button>;
          }}
          content={() => componentRef.current}
        />

    </Box>
  )
}
