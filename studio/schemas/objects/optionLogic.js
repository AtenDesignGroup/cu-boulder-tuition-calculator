// import React from 'react'
// const Icon = () => <span style={{fontSize: '1.5rem'}}>{'🤔'}</span>

import {FcWorkflow} from 'react-icons/fc'

export default {
  name: 'optionLogic',
  title: 'Option Text Logic',
  type: 'object',
  icon: FcWorkflow,
  fields: [
    {
      title: 'Question',
      name: 'logicSourceQuestion',
      type: 'reference',
      description: 'If this question equals the following value(s) then show.',
      to: [{type: 'question'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'logicSourceValue',
      type: 'string',
      title: 'Show Value',
      description: 'When this question equals this value (make sure you use the Machine Value), show these options. You can only enter one value.',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      source: 'logicSourceQuestion.title',
      value: 'logicSourceValue'
    },
    prepare (selection) {
      const {source, value} = selection
      // console.log({source})
      return {
        title: `Show when '${source}'`,
        subtitle: `equals '${value}'`
      }
    }
  }
}
