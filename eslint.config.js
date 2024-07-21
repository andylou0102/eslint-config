import antfu from '@antfu/eslint-config'

export default antfu(
  {
    rules: {
      // vue
      'vue/component-tags-order': [
        'error',
        {
          order: [
            'template',
            'script:not([setup])',
            'script[setup]',
            'style:not([scoped])',
            'style[scoped]',
          ]
        }
      ],
      // js / ts
      '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@typescript-eslint/space-before-function-paren': ['error', 'always'],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
      'prefer-promise-reject-errors': 'off',
      'max-len': 'off',
      'no-underscore-dangle': 'off',
      'no-shadow': 'off',
      'no-param-reassign': ['error', { props: false }],
    }
  }
)

