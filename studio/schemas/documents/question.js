import {FcQuestions} from 'react-icons/fc'

export default {
  name: 'question',
  type: 'document',
  title: 'Question',
  icon: FcQuestions,
  liveEdit: false,
  initialValue: () => ({
    optionLogicConditional: 'or'
  }),
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'shortTitle',
      type: 'string',
      title: 'Short Title',
      validation: Rule => Rule.required(),
      description: 'This currently is displayed in the Results screen next to the edit links for each question.'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'This is used to setup the page URL and should not be changed after it is initial setup or it might break links.',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      type: 'bodyPortableText',
      title: 'Description',
      rows: 3
    },
    {
      name: 'optionLogics',
      title: 'Show Logic',
      type: 'array',
      description: 'If used, the whole question would show if true. If you do not add any logic, the question will always show. NOTE! This always uses AND logic, so every logic condition needs to be true.',
      of: [
        {type: 'optionLogic'},
        {type: 'optionNumericLogic'}
      ]
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
    },
    {
      name: 'optionSets',
      title: 'Option Set(s)',
      type: 'array',
      of: [{
        type: 'optionSet'
      }]
    }
  ]
}
