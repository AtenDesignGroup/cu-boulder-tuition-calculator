// import React from 'react'
// const Icon = () => <span style={{fontSize: '1.5rem'}}>{'✅'}</span>

import {FcList as Icon} from 'react-icons/fc'

export default {
  name: 'option',
  title: 'Option',
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
      name: 'value',
      title: 'Machine Value',
      type: 'slug',
      description: 'This is used for the Question Option logic.',
      options: {
        source: (_, options) => options.parent.title,
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      value: 'value.current'
    },
    prepare (selection) {
      const {title, value} = selection
      return {
        title: `${title}`,
        subtitle: `Machine value: ${value}`
      }
    }
  }
}
