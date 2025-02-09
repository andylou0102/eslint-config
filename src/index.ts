import { antfu, type OptionsConfig } from '@antfu/eslint-config'

type FactoryFn = typeof antfu

const andyLuo: FactoryFn = (options?, ...config) => {
  const mergedOptions: OptionsConfig = {
    ...options,
    javascript: typeof options?.javascript === 'boolean' ? options.javascript : {
      overrides: {
        'prefer-promise-reject-errors': 'off',
        'no-underscore-dangle': 'off',
        'no-shadow': 'off',
        'no-param-reassign': ['error', { props: false }],
        ...options?.javascript?.overrides
      }
    },
    typescript: typeof options?.typescript === 'boolean' ? options.typescript : {
      overrides: {
        'no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
        ...options?.typescript?.overrides
      }
    },
    vue: typeof options?.vue === 'boolean' ? options.vue : {
      overrides: {
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
        ...options?.vue?.overrides
      }
    },
  }
  return antfu(mergedOptions, ...config)
}

export default andyLuo