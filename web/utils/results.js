export function showGroup(data, questions) {
  const {
    optionLogicConditional
  } = data
  let showQuestion = []
  let returnVal = false
  data?.optionLogics?.map(logic => {
    // String Logic
    if (logic._type === 'optionLogic') {
      if (
        questions[logic.logicSourceQuestion._ref]?.answer === logic.logicSourceValue
      ) {
        showQuestion.push('show')
      } else {
        showQuestion.push('hide')
      }
      // Numeric Operational Logic
    } else if (logic._type === 'optionNumericLogic') {
      let questionVal = Number(
        questions[logic?.logicSourceQuestion?._ref]?.answer,
      )
      let logicVal = logic?.operatorValue
      let mathOperation = logic?.mathOperation
      showQuestion.push(operatorMagic(questionVal, mathOperation, logicVal))
    } else {
      showQuestion.push('hide')
    }
    return showQuestion
  })[0]

  if(!optionLogicConditional) {
    returnVal = false
  } else if (showQuestion.length < 1) {
    returnVal = true
  } else if (optionLogicConditional === null || !optionLogicConditional) {
    returnVal = true
  } else if (optionLogicConditional === 'and') {
    showQuestion.includes('hide') ? (returnVal = false) : (returnVal = true)
  } else if (optionLogicConditional === 'or') {
    showQuestion.includes('show') ? (returnVal = true) : (returnVal = false)
  }
  return returnVal
}

export function showLineItems(data) {
  // console.log({data})
  const {
    optionLogicConditional,
    groupLogic
  } = data

  let returnVal = false

  if(!optionLogicConditional) {
    returnVal = false
  } else if (!groupLogic || groupLogic?.length < 1) {
    returnVal = false
  } else if (optionLogicConditional === null || !optionLogicConditional) {
    returnVal = false
  } else if (optionLogicConditional === 'and') {
    groupLogic.includes(false) ? (returnVal = false) : (returnVal = true)
  } else if (optionLogicConditional === 'or') {
    groupLogic.includes(true) ? (returnVal = true) : (returnVal = false)
  }
  return returnVal
}



export function showArray(data, questions) {
  const {
    optionLogicConditional
  } = data

  let showQuestion = []
  let returnVal = false
  data?.optionLogics?.map(logic => {
    // String Logic
    if (logic._type === 'optionLogic') {
      if (
        questions[logic.logicSourceQuestion._ref]?.answer ===
        logic.logicSourceValue
      ) {
        showQuestion.push('show')
      } else {
        showQuestion.push('hide')
      }
      // Numeric Operational Logic
    } else if (logic._type === 'optionNumericLogic') {
      let questionVal = Number(
        questions[logic?.logicSourceQuestion?._ref]?.answer
      )
      let logicVal = logic?.operatorValue
      let mathOperation = logic?.mathOperation
      showQuestion.push(operatorMagic(questionVal, mathOperation, logicVal))
    } else {
      showQuestion.push('hide')
    }
    return showQuestion
  })[0]

  if(!optionLogicConditional) {
    returnVal = false
  } else if (showQuestion.length < 1) {
    returnVal = true
  } else if (optionLogicConditional === null || !optionLogicConditional) {
    returnVal = true
  } else if (optionLogicConditional === 'and') {
    showQuestion.includes('hide') ? (returnVal = false) : (returnVal = true)
  } else if (optionLogicConditional === 'or') {
    showQuestion.includes('show') ? (returnVal = true) : (returnVal = false)
  }
  // returnVal === true && updateStateResults(catID, data.title, data.frequency)
  // console.log(returnVal)
  return returnVal
}

export function totalGenerator(itemValue, questions) {
  let total = 0
  const valueType = itemValue?._type || null
  const value = itemValue?.value || 0
  let math = null
  let valueQuestionID = null

  // CALCULATED VALUE
  if (valueType === 'calculatedValue') {
    math = itemValue?.mathOperation
    valueQuestionID = itemValue?.logicSourceQuestion?._ref
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

export function toFixedNumber(num, digits, base){
  var pow = Math.pow(base||10, digits);
  return Math.round(num*pow) / pow;
}

export function capitalize(s){
  return (s && s[0].toUpperCase() + s.slice(1)) || "";
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

export function CalculateResults() {
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
  const { questions, semesters, results, totalSemesters } = state.calculator

  const showArray = () => {
    let showQuestion = []
    let returnVal = false
    data?.optionLogics?.map(logic => {
      // String Logic
      if (logic._type === 'optionLogic') {
        if (
          questions[logic.logicSourceQuestion._ref]?.answer ===
          logic.logicSourceValue
        ) {
          showQuestion.push('show')
        } else {
          showQuestion.push('hide')
        }
        // Numeric Operational Logic
      } else if (logic._type === 'optionNumericLogic') {
        let questionVal = Number(
          questions[logic?.logicSourceQuestion?._ref]?.answer
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
    const valueType = itemValue?._type || null
    const value = itemValue?.value || 0
    let math = null
    let valueQuestionID = null

    // CALCULATED VALUE
    if (valueType === 'calculatedValue') {
      math = itemValue?.mathOperation
      valueQuestionID = itemValue?.logicSourceQuestion?._ref
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
  })
  return (
    <div>
      CalculateResults
    </div>
  )
}

