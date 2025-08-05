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
    rules: {
      // Custom rule to prevent hardcoded colors
      'no-restricted-syntax': [
        'error',
        {
          selector: 'Literal[value=/^#[0-9a-fA-F]{3,6}$/]',
          message: 'Use design tokens instead of hardcoded hex colors. Use theme colors like bg-primary, text-foreground, etc.'
        },
        {
          selector: 'TemplateLiteral[quasis.0.value.raw=/bg-\\[#[0-9a-fA-F]{3,6}\\]/]',
          message: 'Use design tokens instead of hardcoded hex colors in Tailwind classes. Use theme colors like bg-primary, text-foreground, etc.'
        },
        {
          selector: 'TemplateLiteral[quasis.0.value.raw=/text-\\[#[0-9a-fA-F]{3,6}\\]/]',
          message: 'Use design tokens instead of hardcoded hex colors in Tailwind classes. Use theme colors like bg-primary, text-foreground, etc.'
        }
      ]
    }
  },
  js,
  ...next(),
]
