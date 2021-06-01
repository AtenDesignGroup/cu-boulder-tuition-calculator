import { useRef, useEffect } from 'react'
import { useStateMachine } from 'little-state-machine'
import Link from 'next/link'
import updateAction from '@/hooks/updateAction'
import { LineItems } from '@/components/results/line-items'
import { Text as BodyText } from '@/components/serializers/text'
import { showArray, totalGenerator } from '@/utils/results'
import { Heading, Box, Flex, Stack, Radio, RadioGroup } from '@chakra-ui/react'

export function Results({ categories }) {
  const { actions, state } = useStateMachine({ updateAction })
  const { questions, results, totalSemesters } = state.calculator
  const mainRef = useRef()

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
  .filter(val => {
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
    //addFilterResults(test)
    return { ...val }
  }).map(val =>
    {
      return {
        ...val,
        total: val?.lineItems?.reduce((a, b) => a.total + b.total, 0),
      }
    }
  )



  console.log({filteredResults})

  return (
    <Box>
      <Box mb={12}>
        <Heading size="sm" mb={4} color="gray.600" textTransform="uppercase" ref={mainRef} tabIndex="-1" as="h1">
          My Results
        </Heading>
        <Heading mb={2} as="h2">
          Estimated costs
          {totalSemesters === 1 && <> for One Semester</>}
          {totalSemesters === 2 && <> for Two Semesters</>}
        </Heading>
        <Flex alignItems="center">
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

      <Box mb={40}>



        {filteredResults.map(category => (
          <Box key={category._id} mb={8} pb={8} borderBottom="1px solid #eee">
            <Heading mb={3} size="xl" color="gray.600">
              {category.title}
            </Heading>
            <Box mb="4">
              <BodyText blocks={category.description} />
            </Box>
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
          </Box>
        ))}




      </Box>

      <Link href={`/question/${Object.keys(questions)[0]}`}>
        <a>Go back and edit your submission</a>
      </Link>

    </Box>
  )
}
