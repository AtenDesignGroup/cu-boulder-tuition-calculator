// import {MdPerson as Icon} from 'react-icons/fa'
import React from 'react'
const Icon = () => <span style={{fontSize: '1.5rem'}}>{'?'}</span>

export default {
  name: 'comment',
  type: 'document',
  title: 'Comment',
  icon: Icon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email'
    },
    {
      name: 'comment',
      type: 'text',
      title: 'Comment'
    }
  ]
}
