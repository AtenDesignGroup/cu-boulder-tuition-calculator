// import React from 'react'
// const Icon = () => <span style={{fontSize: '1.5rem'}}>{'🧮'}</span>

import {FcCalculator} from 'react-icons/fc'

export default {
  name: 'calculator',
  type: 'document',
  title: 'calculator',
  icon: FcCalculator,
  __experimental_actions: ['update', 'publish'],
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
      name: 'questions',
      title: 'Questions',
      type: 'array',
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
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{
            type: 'category'
          }]
        }]
    }
  ]
}
