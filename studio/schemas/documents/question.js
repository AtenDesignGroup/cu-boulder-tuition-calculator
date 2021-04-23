import React from 'react'
// const Icon = () => <span style={{fontSize: '1.5rem'}}>{'?'}</span>
import {FcQuestions} from 'react-icons/fc'

export default {
  name: 'question',
  type: 'document',
  title: 'Question',
  icon: FcQuestions,
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
    // Question Logic (show question if true)
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
    },
    {
      name: 'categories',
      title: 'Value Category',
      type: 'reference',
      to: [{
        type: 'category'
      }]
    },
    {
      name: 'valueLabel',
      type: 'string',
      title: 'Value Label',
      description: 'Used to label the final result value(s)'
    },
    {
      name: 'valueDescription',
      type: 'text',
      rows: 3,
      title: 'Value Description',
      description: 'Used to describe the final result value(s)'
    }
  ]
}
