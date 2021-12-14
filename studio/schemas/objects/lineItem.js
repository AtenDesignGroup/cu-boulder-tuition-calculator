import {FcMoneyTransfer as Icon} from 'react-icons/fc'

const OptionalVal = val => {
  if (val === true) {
    return 'Optional, '
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
  name: 'lineItem',
  title: 'Line Item',
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
      title: `Included in COA`,
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
      title: 'Value',
      name: 'itemValue',
      type: 'array',
      description: 'Choose either a simple value or a calculated value.',
      of: [{type: 'simpleValue'}, {type: 'calculatedValue'}],
      validation: Rule =>
        Rule.required()
          .min(1)
          .max(1)
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
          {title: 'Per Year', value: 'perYear'}
        ]
      }
    },
    {
      name: 'optionLogics',
      title: 'Logic',
      type: 'array',
      description:
        'If used, the item would apply if all true. If you do not add any logic, the item will always apply to everyone. NOTE! This always uses AND logic, so every logic condition needs to be true.',
      of: [{type: 'optionLogic'}, {type: 'optionNumericLogic'}]
    },
    {
      title: 'Logic Conditional',
      name: 'optionLogicConditional',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: [
          {title: 'AND - All show logic conditons need to be true', value: 'and'},
          {title: 'OR - Only ONE of the show logic conditons need to be true', value: 'or'}
        ]
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      frontendTitle: 'frontendTitle',
      optional: 'optional',
      value: 'itemValue[0].value',
      frequency: 'frequency',
      logic: 'optionLogics'
    },
    prepare (selection) {
      const {title, frontEndTitle, value, optional, frequency, logic} = selection
      return {
        title: title,
        subtitle: `${OptionalVal(optional)} $${value || 0} - ${LogicVal(
          logic
        )} - Charged ${frequency}`
      }
    }
  }
}
