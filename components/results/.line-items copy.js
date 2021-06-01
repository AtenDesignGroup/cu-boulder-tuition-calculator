import { useState, useEffect } from 'react'

import { useStateMachine } from 'little-state-machine'
import updateAction from '@/hooks/updateAction'
import {
  Heading,
  Box,
  Text,
  Flex,
  Badge,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverCloseButton
} from '@chakra-ui/react'
import { Text as BodyText } from '@/components/serializers/text'
import { Counter } from '@/components/counter'
// import { MdInfo as InfoIcon } from 'react-icons/md'

export function LineItems({ data, catID, catTitle }) {
  // console.log({ data })
  const { actions, state } = useStateMachine({ updateAction })
  const {
    _key,
    description,
    itemValue,
    frontEndTitle,
    frequency,
    optionLogics,
    optional,
    optionLogicConditional
  } = data
  const { questions, semesters, results, totalSemesters, totalCreditHours } = state.calculator

  const showArray = () => {
    let showQuestion = []
    let returnVal = false
    data?.optionLogics?.map(logic => {
      // String Logic
      if (logic._type === 'optionLogic') {
        if (
          state?.calculator?.questions[logic.logicSourceQuestion._ref]?.answer ===
          logic.logicSourceValue
        ) {
          showQuestion.push('show')
        } else {
          showQuestion.push('hide')
        }
        // Numeric Operational Logic
      } else if (logic._type === 'optionNumericLogic') {
        let questionVal = Number(
          state?.calculator?.questions[logic?.logicSourceQuestion?._ref]?.answer
        )
        let logicVal = logic?.operatorValue
        let mathOperation = logic?.mathOperation
        showQuestion.push(operatorMagic(questionVal, mathOperation, logicVal))
      } else {
        showQuestion.push('hide')
      }
      return showQuestion
    })[0]

    if (showQuestion.length < 1) {
      returnVal = true
    } else if (optionLogicConditional === null || !optionLogicConditional) {
      returnVal = true
    } else if (optionLogicConditional === 'and') {
      showQuestion.includes('hide') ? (returnVal = false) : (returnVal = true)
    } else if (optionLogicConditional === 'or') {
      showQuestion.includes('show') ? (returnVal = true) : (returnVal = false)
    }
    // returnVal === true && updateStateResults(catID, data.title, data.frequency)
    return returnVal
  }

  const operatorMagic = (questionVal, mathOperation, logicVal) => {
    // console.log(`questionVal: ${questionVal}, mathOperation: ${mathOperation}, logicVal: ${logicVal}`)
    if (mathOperation === 'equals') {
      return questionVal === logicVal ? 'show' : 'hide'
    } else if (mathOperation === 'doesNotEqual') {
      return questionVal !== logicVal ? 'show' : 'hide'
    } else if (mathOperation === 'lessThan') {
      return questionVal < logicVal ? 'show' : 'hide'
    } else if (mathOperation === 'lessThanOrEquals') {
      return questionVal <= logicVal ? 'show' : 'hide'
    } else if (mathOperation === 'greaterThan') {
      return questionVal > logicVal ? 'show' : 'hide'
    } else if (mathOperation === 'greaterThanOrEquals') {
      return questionVal >= logicVal ? 'show' : 'hide'
    } else {
      return 'hide'
    }
  }

  const TotalGenerator = () => {
    let total = 0
    const valueType = itemValue[0]?._type || null
    const value = itemValue[0]?.value || 0
    let math = null
    let valueQuestionID = null

    // CALCULATED VALUE
    if (valueType === 'calculatedValue') {
      math = itemValue[0]?.mathOperation
      valueQuestionID = itemValue[0]?.logicSourceQuestion?._ref
      const myQuestionAnswer = parseInt(questions[valueQuestionID]?.answer || 0)
      // console.log({myQuestionAnswer})
      if (math === 'multiplication') {
        total = value * myQuestionAnswer
      } else if (math === 'addition') {
        total = value + myQuestionAnswer
      } else if (math === 'division') {
        total = value / myQuestionAnswer
      } else if (math === 'subtraction') {
        total = value - myQuestionAnswer
      }
    }

    // SIMPLE VALUE
    if (valueType === 'simpleValue') {
      // console.log('simpleValue')
      total = total + value
    }

    // console.log({ valueType, valueQuestionID, math, value, total })

    return total
  }

  useEffect(() => {
    // console.log('useEffect')
    // console.log({questions})
    // console.log(state.calculator.questions)
    // console.log({results})
    // console.log(state.calculator.results)
    // console.log({catID})
    // console.log(data.frontEndTitle)
    // console.log(data.frequency)
    // console.log(TotalGenerator())
    // console.log(state.calculator.results[catID])
    // console.log({_key})
    if (showArray() === true) {

      actions.updateAction({
        ...state,
        calculator: {
          ...state.calculator,
          results: {
            ...state.calculator.results,
            [catID]: {
              ...state.calculator.results[catID],
              title: catTitle,
              [_key]: {
                title: data.frontEndTitle,
                frequency: data.frequency,
                value: TotalGenerator()
              }
            }
          }
        }
      })
    }
  }, [])

  if (showArray()) {
    return (
      <Box mb="6">
        <Flex alignItems="flex-end" mb="2" justifyContent="space-between">
          <Flex alignItems="center" flexDir="column" alignItems="flex-start">
            <Flex flexDir="column">
              <Heading size="xl">{frontEndTitle}</Heading>

              {/*     {description && (
              <Popover placement="top-start">
                <PopoverTrigger>
                  <IconButton
                    variant="ghost"
                    aria-label="More info"
                    fontSize="20px"
                    icon={<InfoIcon />}
                  />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverCloseButton />
                  <PopoverBody py="5" px="5">
                    <BodyText blocks={description} />
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            )}*/}
            </Flex>

            {optional && (
              <Box
                background="#eee"
                textTransform="uppercase"
                fontSize="0.6em"
                px="1"
                py=".75"
                fontWeight="bold"
              >
                Optional Fee
              </Box>
            )}
          </Flex>

          <Flex flexDir="column" alignItems="flex-end">
            <Text fontSize="2xl" mb='0'>
              <Counter target={TotalGenerator()} duration={2} />
            </Text>
            <Badge colorScheme="green" fontSize="0.6em" variant="solid">
              {frequency.replace(/([A-Z])/g, ' $1').trim()}
            </Badge>
          </Flex>
        </Flex>
        {description && <BodyText blocks={description} />}
      </Box>
    )
  } else {
    return null
  }
}
