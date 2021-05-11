// import React from 'react'
// const Icon = () => <span style={{fontSize: '1.5rem'}}>{'🤔'}</span>

import {FcWorkflow} from 'react-icons/fc'

export default {
  name: 'optionLogic',
  title: 'Option Text Logic',
  type: 'object',
  icon: FcWorkflow,
  // options: {collapsible: true, collapsed: false},
  fields: [
    {
      title: 'Question',
      name: 'logicSourceQuestion',
      type: 'reference',
      description: 'If this question equals the following value(s) then show.',
      to: [{type: 'question'}],
      validation: Rule => Rule.required()
    },
    // TODO:
    // Add the logic operator (===, !==, <, >, <=, >=)
    //
    {
      name: 'logicSourceValue',
      type: 'string',
      title: 'Show Value',
      // TODO: Need to update this
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
        // TODO: Need to update this
        title: `Show when '${source}'`,
        subtitle: `=== '${value}'`
      }
    }
  }
}
