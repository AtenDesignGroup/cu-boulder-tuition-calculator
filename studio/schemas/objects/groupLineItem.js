import {FcMoneyTransfer as Icon} from 'react-icons/fc'

const OptionalVal = val => {
  if (val === true) {
    return 'COA, '
  } else {
    return ''
  }
}

const LogicVal = val => {
  if (val && val.length > 0) {
    return 'Includes logic'
  } else {
    return 'Applies to all'
  }
}

const TitleFunc = (title, frontEndTitle) => {
  if (frontEndTitle === undefined || frontEndTitle === null || frontEndTitle === '') {
    return title
  } else {
    return frontEndTitle
  }
}

export default {
  name: 'groupLineItem',
  title: 'Group Line Item',
  type: 'object',
  icon: Icon,
  // options: {collapsible: true, collapsed: false},
  // options: {columns: 2},
  initialValue: () => ({
    optionLogicConditional: 'or'
  }),
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
      name: 'lineItems',
      title: 'Line Items',
      type: 'array',
      of: [ {type: 'lineItem'} ]
    },
    {
      title: 'Logic Conditional',
      name: 'optionLogicConditional',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: [
          {title: 'AND - All show logic conditions need to be true', value: 'and'},
          {title: 'OR - Only ONE of the show logic conditions need to be true', value: 'or'}
        ]
      }
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare (selection) {
      const {title} = selection
      return {
        title: `Group Line Item:  ${title}`
      }
    }
  }
  // preview: {
  //   select: {
  //     title: 'title',
  //     frontendTitle: 'frontendTitle',
  //     optional: 'optional',
  //     value: 'itemValue[0].value',
  //     frequency: 'frequency',
  //     logic: 'optionLogics'
  //   },
  //   prepare (selection) {
  //     const {title, frontEndTitle, value, optional, frequency, logic} = selection
  //     return {
  //       title: title,
  //       subtitle: `${OptionalVal(optional)} $${value || 0} - ${LogicVal(
  //         logic
  //       )} - Charged ${frequency}`
  //     }
  //   }
  // }
}
