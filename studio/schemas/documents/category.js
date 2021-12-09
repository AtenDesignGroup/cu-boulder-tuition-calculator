import React from 'react'
import {FcFolder} from 'react-icons/fc'

export default {
  name: 'category',
  type: 'document',
  title: 'Result Category',
  icon: FcFolder,
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
      name: 'lineItems',
      title: 'Line Items',
      type: 'array',
      of: [ {type: 'lineItem'} ]
      // options: {
      //   canDuplicate: 'title'
      // }
    }
  ]
}
