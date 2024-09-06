import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'react/prop-types': ['off'],
      'react/react-in-jsx-scope': 'off',
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
]
