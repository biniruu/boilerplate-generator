import getCertainConditions from '@utils/certainConditions'
import type { SelectOptions } from '_types'

const mergeSettings = (configOptions: SelectOptions) => {
  const { hasJest, hasReact } = getCertainConditions(configOptions)

  const result = {
    /**
     * Eslint-plugin-import resolvers
     * {@link https://github.com/import-js/eslint-plugin-import#resolvers}
     * {@link https://github.com/import-js/eslint-plugin-import#importextensions}
     *
     * resolver.node.extensions : require more granular extension definitions. jsx를 import할 때 import/no-unresolved 에러가 발생하지 않도록 함
     */
    'import/resolver': {
      node: {
        extensions: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      },
    },
    ...((hasJest || hasReact) && {
      settings: {
        ...(hasJest && {
          /**
           * Jest version setting
           * {@link https://github.com/jest-community/eslint-plugin-jest#jest-version-setting}
           *
           * fetch the installed version of Jest
           */
          jest: {
            version: 'replace jestVersion',
          },
        }),
        ...(hasReact && {
          /**
           * Eslint-plugin-react configuration
           * {@link https://github.com/jsx-eslint/eslint-plugin-react#configuration-legacy-eslintrc-}
           *
           * detect the installed version of React
           */
          react: {
            version: 'detect',
          },
        }),
      },
    }),
  }

  return result
}

export default mergeSettings
