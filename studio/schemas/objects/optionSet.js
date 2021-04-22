import {FcViewDetails} from 'react-icons/fc'

export default {
  name: 'optionSet',
  title: 'Option Set',
  type: 'object',
  icon: FcViewDetails,
  options: {collapsible: true, collapsed: false},
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Administrative Title',
      description: 'This is only shown here and is used to help describe this setup of options.',
      validation: Rule => Rule.required()
    },
    {
      name: 'optionLogics',
      title: 'Logic',
      type: 'array',
      of: [{
        type: 'optionLogic'
      }]
    },
    {
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [{
        type: 'option'
      }]
    }
  ]
}
