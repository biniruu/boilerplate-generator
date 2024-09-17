import getCertainConditions from '@utils/certainConditions'
import type { SelectOptions } from '_types'

const getEslintFlatConfigCommands = (configOptions: SelectOptions) => {
  const {
    hasEslint,
    hasGatsby,
    hasGraphql,
    hasJest,
    hasJsLibs,
    hasNext,
    hasNuxt,
    hasPug,
    hasReact,
    hasStorybook,
    hasTailwind,
    hasTanstackQuery,
    hasThree,
    hasTypescript,
    hasWebpack,
    hasWordpress,
  } = getCertainConditions(configOptions)

  const eslintFlatConfigDevDependencies: string[] = []

  /**
   * @eslint/compat
   * {@link https://github.com/eslint/rewrite/tree/main/packages/compat#eslint-compatibility-utilities}
   *
   * @graphql-eslint/eslint-plugin (GraphQL-ESLint)
   * {@link https://the-guild.dev/graphql/eslint/docs}
   *
   * @nuxtjs/eslint-config-typescript
   * {@link https://eslint.nuxt.com}
   *
   * @tanstack/eslint-plugin-query (Tanstack Query)
   * {@link https://tanstack.com/query/latest}
   *
   * eslint (ESLint)
   * {@link https://eslint.org}
   *
   * eslint-import-resolver-typescript
   * {@link https://github.com/import-js/eslint-import-resolver-typescript#readme}
   *
   * eslint-plugin-import
   * {@link https://github.com/import-js/eslint-plugin-import#eslint-plugin-import}
   *
   * eslint-plugin-react-refresh
   * {@link https://github.com/ArnaudBarre/eslint-plugin-react-refresh#readme}
   *
   * eslint-plugin-testing-library
   * {@link https://github.com/testing-library/eslint-plugin-testing-library#eslint-plugin-testing-library}
   *
   * eslint-plugin-jest
   * {@link https://github.com/jest-community/eslint-plugin-jest#readme}
   *
   * eslint-plugin-jsx-a11y
   * {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme}
   *
   * eslint-plugin-nuxt
   * {@link https://github.com/nuxt/eslint-plugin-nuxt#readme}
   *
   * vue-eslint-parser
   * {@link https://github.com/vuejs/vue-eslint-parser#readme}
   *
   * eslint-plugin-react
   * {@link https://github.com/jsx-eslint/eslint-plugin-react#eslint-plugin-react-}
   *
   * eslint-plugin-jest-dom
   * {@link https://github.com/testing-library/eslint-plugin-jest-dom#readme}
   *
   * eslint-plugin-pug
   * {@link https://github.com/valpackett/eslint-plugin-pug#readme}
   *
   * eslint-plugin-storybook
   * {@link https://github.com/storybookjs/eslint-plugin-storybook#readme}
   *
   * eslint-plugin-tailwindcss
   * {@link https://github.com/francoismassart/eslint-plugin-tailwindcss#eslint-plugin-tailwindcss}
   *
   * eslint-webpack-plugin
   * {@link https://github.com/webpack-contrib/eslint-webpack-plugin#eslint-webpack-plugin}
   */
  if (!hasEslint) {
    return { eslintFlatConfigDevDependencies }
  }

  eslintFlatConfigDevDependencies.push('@eslint/compat')

  if (!hasGatsby || !hasNext) {
    eslintFlatConfigDevDependencies.push('eslint')
    !hasWordpress && eslintFlatConfigDevDependencies.push('eslint-plugin-import')
  }
  if (hasJsLibs) {
    eslintFlatConfigDevDependencies.push('eslint-plugin-jsx-a11y', 'eslint-plugin-testing-library')
  }
  if (hasNuxt) {
    eslintFlatConfigDevDependencies.push(
      '@nuxtjs/eslint-config-typescript',
      'eslint-plugin-jest',
      'eslint-plugin-nuxt',
      'vue-eslint-parser',
    )
  }
  // For React.js that build with Vite
  if (hasReact || hasNext) {
    eslintFlatConfigDevDependencies.push('eslint-plugin-react', 'eslint-plugin-react-refresh')
  }
  if (!hasNext && !hasGatsby && !hasWordpress && (hasThree || hasTypescript)) {
    eslintFlatConfigDevDependencies.push('eslint-import-resolver-typescript')
  }

  // These packages need fundamental eslint packages
  if (hasGraphql) {
    eslintFlatConfigDevDependencies.push('@graphql-eslint/eslint-plugin')
  }
  if (hasJest) {
    // If you don't want to install 'eslint-plugin-jest', you have to install those packages below manually
    // @typescript-eslint/types @typescript-eslint/typescript-estree @typescript-eslint/utils
    eslintFlatConfigDevDependencies.push('eslint-plugin-jest', 'eslint-plugin-jest-dom')
  }
  if (hasPug) {
    eslintFlatConfigDevDependencies.push('eslint-plugin-pug')
  }
  if (hasStorybook) {
    eslintFlatConfigDevDependencies.push('eslint-plugin-storybook')
  }
  if (hasTanstackQuery) {
    eslintFlatConfigDevDependencies.push('@tanstack/eslint-plugin-query')
  }
  if (hasTailwind) {
    eslintFlatConfigDevDependencies.push('eslint-plugin-tailwindcss')
  }
  if (hasWebpack) {
    eslintFlatConfigDevDependencies.push('eslint-webpack-plugin')
  }

  return {
    eslintFlatConfigDevDependencies,
  }
}

export default getEslintFlatConfigCommands
