// eslint.config.mjs
import js from '@eslint/js'
import globals from 'globals'
import next from 'eslint-config-next'

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
  },
  js,
  ...next(),
]
