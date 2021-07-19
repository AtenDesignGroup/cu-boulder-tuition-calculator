// import React from 'react'
// const Icon = () => <span style={{fontSize: '1.5rem'}}>{'🧮'}</span>

import {FcCalculator} from 'react-icons/fc'

export default {
  name: 'calculator',
  type: 'document',
  title: 'calculator',
  icon: FcCalculator,
  // __experimental_actions: ['update', 'publish'],
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
      rows: 3,
      title: 'Description'
    },
    {
      name: 'buttonTitle',
      type: 'string',
      title: 'Start Button Text',
      validation: Rule => Rule.required()
    },
    {
      name: 'questions',
      title: 'Questions',
      description: 'Adding Questions here will display them on Tuition Calculator.',
      type: 'array',
      validation: Rule => Rule.required().min(1),
      of: [
        {
          type: 'reference',
          to: [{
            type: 'question'
          }]
        }]
    },
    {
      name: 'categories',
      title: 'Result Categories',
      description: 'Adding Categories here will display them in the Results section on the Tuition Calculator.',
      type: 'array',
      validation: Rule => Rule.required().min(1),
      of: [
        {
          type: 'reference',
          to: [{
            type: 'category'
          }]
        }]
    },
    {
      name: 'disclaimer',
      type: 'bodyPortableText',
      rows: 3,
      title: 'Disclaimer'
    }
  ]
}
