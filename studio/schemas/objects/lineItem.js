// import React from 'react'
// const Icon = () => <span style={{fontSize: '1.5rem'}}>{'✅'}</span>

import {FcMoneyTransfer as Icon} from 'react-icons/fc'

export default {
  name: 'lineItem',
  title: 'Line Item',
  type: 'object',
  icon: Icon,
  // options: {collapsible: true, collapsed: false},
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'This is shown in the option list',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      type: 'bodyPortableText',
      title: 'Description',
      rows: 3
    },
    {
      name: 'value',
      type: 'number',
      title: 'Value',
      description: 'Dollar value added',
      validation: Rule => Rule.required()
    },
    {
      title: 'Frequency',
      name: 'frequency',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: [
          {title: 'One-time', value: 'oneTime'},
          {title: 'Per Semester', value: 'perSemester'},
          {title: 'Per Credit Hour', value: 'perCreditHour'},
          {title: 'Per Year', value: 'perYear'}
        ]
      }
    },
    {
      name: 'optionLogics',
      title: 'Logic',
      type: 'array',
      of: [{
        type: 'optionLogic'
      }]
    }
  ]
  // preview: {
  //   select: {
  //     title: 'title',
  //     value: 'value.current',
  //     tuitionValue: 'tuitionValue',
  //     feesValue: 'feesValue'
  //   },
  //   prepare (selection) {
  //     const {title, value, tuitionValue, feesValue} = selection
  //     return {
  //       title: `${title}`,
  //       subtitle: `Machine value: ${value} :: Tuition $${tuitionValue || 0} Fees $${feesValue || 0}`
  //     }
  //   }
  // }
}
