import {FcCurrencyExchange as Icon} from 'react-icons/fc'

export default {
  name: 'simpleValue',
  title: 'Simple Value',
  type: 'object',
  icon: Icon,
  // options: {collapsible: true, collapsed: false},
  fields: [
    {
      name: 'value',
      type: 'number',
      title: 'Value',
      description: 'Dollar value to be added to the total',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      value: 'value'
    },
    prepare (selection) {
      const {value} = selection
      return {
        title: `$${value}`,
      }
    }
  }
}
