import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    typescript: true,
  },
  // vue
  {
    files: ['**/*.vue'],
    rules: {
      'vue/block-order': [
        'error',
        {
          order: [
            'template',
            'script:not([setup])',
            'script[setup]',
            'style:not([scoped])',
            'style[scoped]',
          ],
        },
      ],
      'vue/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    },
  },
  {
    rules: {
      // js / ts
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
      'prefer-promise-reject-errors': 'off',
      'no-underscore-dangle': 'off',
      'no-shadow': 'off',
      'no-param-reassign': ['error', { props: false }],
    },
  },
)
