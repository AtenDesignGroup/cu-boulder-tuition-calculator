// import React from 'react'
// const Icon = () => <span style={{fontSize: '1.5rem'}}>{'✅'}</span>

import {FcMoneyTransfer as Icon} from 'react-icons/fc'

const OptionalVal = (val) => {
 if(val === true) {
   return 'Optional, '
 } else {
   return ''
 }
}

const LogicVal = (val) => {
  if(val && val.length > 0) {
    return 'Includes logic'
  } else {
    return 'Applies to all'
  }
 }

 const TitleFunc = (title, adminTitle) => {
  if(adminTitle) {
    return adminTitle || ''
  } else {
    return title || ''
  }
 }


export default {
  name: 'lineItem',
  title: 'Line Item',
  type: 'object',
  icon: Icon,
  // options: {collapsible: true, collapsed: false},
  options: { columns: 2},
  fields: [
    {
      name: 'frontEndTitle',
      type: 'string',
      title: 'Title',
      description: 'This will be displayed to the visitor under the Results section.',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      type: 'string',
      title: 'Administrative Title',
      description: 'This is only shown here and is used to help describe this setup of options.',
      validation: Rule => Rule.required()
    },
    {
      title: `Is this an Optional cost?`,
      name: 'optional',
      type: 'boolean'
    },
    {
      name: 'description',
      type: 'bodyPortableText',
      title: 'Description',
      rows: 3
    },
    {
      title: 'Value (NEW 🎉)',
      name: 'itemValue',
      type: 'array',
      description: 'Choose either a simple value or a calculated value.',
      of: [{type: 'simpleValue'}, {type: 'calculatedValue'}],
      validation: Rule => Rule.required().min(1).max(1)
    },
    // TODO: REMOVE
    {
      name: 'value',
      type: 'number',
      title: 'Value (OLD and will be removed)',
      description: 'Dollar value added'
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
      options: {collapsible: true, collapsed: false, columns: 3},
      of: [{
        type: 'optionLogic'
      },
      {
        type: 'optionNumericLogic'
      }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      frontendTitle: 'frontendTitle',
      optional: 'optional',
      value: 'value',
      frequency: 'frequency',
      logic: 'optionLogics'
    },
    prepare (selection) {

      const {title, adminTitle, value, optional, frequency, logic} = selection
      return {
        title: `${TitleFunc(title, adminTitle)}`,
        subtitle: `${OptionalVal(optional)} $${value || 0} - ${LogicVal(logic)} - Charged ${frequency}`
      }
    }
  }
}
