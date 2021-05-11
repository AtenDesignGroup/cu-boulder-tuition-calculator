// import React from 'react'
// const Icon = () => <span style={{fontSize: '1.5rem'}}>{'🤔'}</span>

import {FcWorkflow} from 'react-icons/fc'

function Operation(val) {
  if(val === 'equals'){
    return '==='
  } if(val === 'doesNotEqual'){
    return '!=='
  } if(val === 'lessThan'){
    return '<'
  } if(val === 'lessThanOrEquals'){
    return '<='
  } if(val === 'greaterThan'){
    return '>'
  } if(val === 'greaterThanOrEquals'){
    return '>='
  }  else {
    return ''
  }
}

export default {
  name: 'optionNumericLogic',
  title: 'Option Numeric Logic',
  type: 'object',
  icon: FcWorkflow,
  options: {collapsible: true, collapsed: false, columns: 3},
  fields: [
    {
      title: 'Question',
      name: 'logicSourceQuestion',
      type: 'reference',
      description: 'Select the question (the value needs to be a number) to be evalued with opterator and operator value.',
      to: [{type: 'question'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Math Operation',
      name: 'mathOperation',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: [
          {title: 'Equals ===', value: 'equals'},
          {title: 'Does Not Equal !==', value: 'doesNotEqual'},
          {title: 'Less Than <', value: 'lessThan'},
          {title: 'Less Than or Equals <=', value: 'lessThanOrEquals'},
          {title: 'Greater Than >', value: 'greaterThan'},
          {title: 'Greater Than or Equals >=', value: 'greaterThanOrEquals'},
        ]
      }
    },
    {
      name: 'operatorValue',
      type: 'number',
      title: 'Operator Value',
      description: 'The value to placed to the right side of the operator.',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      source: 'logicSourceQuestion.title',
      mathOperation: 'mathOperation',
      operatorValue: 'operatorValue'
    },
    prepare (selection) {
      const {source, mathOperation, operatorValue} = selection
      return {
        title: `Show when '${source}'`,
        subtitle: `${Operation(mathOperation)} ${operatorValue}`
      }
    }
  }
}
