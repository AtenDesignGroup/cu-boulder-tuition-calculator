import {FcCalculator as Icon} from 'react-icons/fc'

function Operation(val) {
  if(val === 'addition'){
    return '➕'
  } if(val === 'division'){
    return '➗'
  } if(val === 'multiplication'){
    return '✖️'
  } if(val === 'subtraction'){
    return '➖'
  }  else {
    return ''
  }
}

export default {
  name: 'calculatedValue',
  title: 'Calculated Value',
  type: 'object',
  icon: Icon,
  // options: {collapsible: true, collapsed: false},
  fieldsets: [
    {name: 'cvFieldset', options: {columns: 2}}
  ],
  fields: [
    {
      name: 'value',
      type: 'number',
      title: 'Value',
      description: 'Dollar value to be calculated',
      validation: Rule => Rule.required(),
      fieldset: 'cvFieldset'
    },
    {
      title: 'Math Operation',
      name: 'mathOperation',
      type: 'string',
      description: 'Select the math operation',
      validation: Rule => Rule.required(),
      options: {
        list: [
          {title: 'Addition ➕', value: 'addition'},
          {title: 'Division ➗', value: 'division'},
          {title: 'Multiplication ✖️', value: 'multiplication'},
          {title: 'Subtraction ➖', value: 'subtraction'},
        ]
      },
      fieldset: 'cvFieldset'
    },
    {
      title: 'Question',
      name: 'logicSourceQuestion',
      type: 'reference',
      description: 'Select the question you will use its selected value (needs to be a number)',
      to: [{type: 'question'}],
      validation: Rule => Rule.required(),
      // fieldset: 'cvFieldset'
    }
  ],
  preview: {
    select: {
      source: 'logicSourceQuestion.title',
      mathOperation: 'mathOperation',
      value: 'value'
    },
    prepare (selection) {
      const {source, mathOperation, value} = selection
      return {
        title: `'${source}'`,
        subtitle: `${Operation(mathOperation)} $${value}`
      }
    }
  }
}
