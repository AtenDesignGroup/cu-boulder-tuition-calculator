import React from 'react'
// const Icon = () => <span style={{fontSize: '1.5rem'}}>{'?'}</span>
import {FcFolder} from 'react-icons/fc'

export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  icon: FcFolder,
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
      name: 'lineItems',
      title: 'Line Items',
      type: 'array',
      of: [{
        type: 'lineItem'
      }]
    }
  ]
}
