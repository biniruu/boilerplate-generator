import type { SelectOptions } from '_types'

interface Settings {
  'import/resolver': { node: { extensions: string[] } }
  jest?: { version: string }
  react?: { version: string }
}

// settings: {
//   /**
//    * Eslint-plugin-import resolvers
//    * {@link https://github.com/import-js/eslint-plugin-import#resolvers}
//    * {@link https://github.com/import-js/eslint-plugin-import#importextensions}
//    *
//    * resolver.node.extensions : require more granular extension definitions. jsx를 import할 때 import/no-unresolved 에러가 발생하지 않도록 함
//    */
//   'import/resolver': {
//     node: {
//       extensions: ['*.js', '*.jsx', '*.ts', '*.tsx'],
//     },
//   },
//   /**
//    * Jest version setting
//    * {@link https://github.com/jest-community/eslint-plugin-jest#jest-version-setting}
//    *
//    * fetch the installed version of Jest
//    */
//   jest: {
//     version: require('jest/package.json').version,
//   },
//   /**
//    * Eslint-plugin-react configuration
//    * {@link https://github.com/jsx-eslint/eslint-plugin-react#configuration-legacy-eslintrc-}
//    *
//    * 'detect' automatically picks the version you have installed.
//    */
//   react: {
//     version: 'detect',
//   },
// }
const mergeSettings = (configOptions: SelectOptions) => {
  const defaultSettings = {
    'import/resolver': {
      node: {
        extensions: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      },
    },
  }
  const result: Settings = { ...defaultSettings }

  if (configOptions.jest) {
    result.jest = {
      version: 'replace jestVersion',
    }
  }
  if (configOptions.react) {
    result.react = {
      version: 'detect',
    }
  }

  return result
}

export default mergeSettings
