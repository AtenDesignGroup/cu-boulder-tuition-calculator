const path = require('path')

module.exports = {
  extends: ['standard', 'standard-react'],
  parser: 'babel-eslint',
  "parserOptions": {
    "ecmaVersion": 2020
  },
  rules: {
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off',

  },
  settings: {
    react: {
      pragma: 'React',
      version: '17.0.1'
    }
  }
}