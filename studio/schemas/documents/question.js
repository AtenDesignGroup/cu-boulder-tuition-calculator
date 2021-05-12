import React from 'react'
// const Icon = () => <span style={{fontSize: '1.5rem'}}>{'?'}</span>
import {FcQuestions} from 'react-icons/fc'

export default {
  name: 'question',
  type: 'document',
  title: 'Question',
  icon: FcQuestions,
  liveEdit: false,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
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
      description: 'If used, the whole question would show if true. If you do not add any logic, the question will always show.',
      of: [{
        type: 'optionLogic'
      }]
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
