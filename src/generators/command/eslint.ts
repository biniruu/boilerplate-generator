import getCertainConditions from '@utils/certainConditions'
import type { SelectOptions } from '_types'

const getEslintCommands = (configOptions: SelectOptions) => {
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

  const eslintDevDependencies: string[] = []

  /**
   * @babel/eslint-parser
   * {@link https://www.npmjs.com/package/@babel/eslint-parser}
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
   * @typescript-eslint/eslint-plugin
   * {@link https://typescript-eslint.io/packages/eslint-plugin/}
   *
   * @typescript-eslint/parser
   * {@link https://typescript-eslint.io/packages/parser/}
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
   *
   * jest-resolve
   * {@link https://github.com/jestjs/jest#readme}
   */
  if (!hasEslint) {
    return { eslintDevDependencies }
  }

  if (!hasGatsby && !hasJsLibs && !hasThree && !hasWordpress) {
    // For VanillaJS
    eslintDevDependencies.push('eslint', 'eslint-plugin-jsx-a11y', 'eslint-plugin-import')
    !hasTypescript && eslintDevDependencies.push('@babel/core', '@babel/eslint-parser')
  }
  // Gatsby.js is ony for using TypeScript
  if (hasGatsby && hasTypescript) {
    eslintDevDependencies.push(
      '@typescript-eslint/eslint-plugin',
      '@typescript-eslint/parser',
      'eslint',
      'eslint-import-resolver-typescript',
      'eslint-plugin-import',
    )
  }
  if (hasNext) {
    eslintDevDependencies.push('eslint-plugin-react-refresh', 'eslint-plugin-testing-library')
    hasTypescript && eslintDevDependencies.push('@typescript-eslint/eslint-plugin')
  }
  if (hasNuxt) {
    eslintDevDependencies.push(
      '@nuxtjs/eslint-config-typescript',
      'eslint',
      'eslint-plugin-import',
      'eslint-plugin-jest',
      'eslint-plugin-jsx-a11y',
      'eslint-plugin-nuxt',
      'eslint-plugin-testing-library',
      'vue-eslint-parser',
    )
    hasTypescript && eslintDevDependencies.push('@typescript-eslint/eslint-plugin', 'eslint-import-resolver-typescript')
  }
  // For React.js that build with Vite
  if (hasReact) {
    eslintDevDependencies.push(
      'eslint-plugin-import',
      'eslint-plugin-jsx-a11y',
      'eslint-plugin-react',
      'eslint-plugin-testing-library',
      'jest-resolve',
    )
    hasTypescript && eslintDevDependencies.push('@typescript-eslint/eslint-plugin', 'eslint-import-resolver-typescript')
  }
  if (!hasJsLibs && !hasGatsby && !hasWordpress && (hasThree || hasTypescript)) {
    eslintDevDependencies.push(
      '@typescript-eslint/eslint-plugin',
      '@typescript-eslint/parser',
      'eslint-import-resolver-typescript',
    )
  }
  if (hasWordpress) {
    eslintDevDependencies.push('eslint')
  }

  // These packages need fundamental eslint packages
  if (hasGraphql) {
    eslintDevDependencies.push('@graphql-eslint/eslint-plugin')
  }
  if (hasJest) {
    // If you don't want to install 'eslint-plugin-jest', you have to install those packages below manually
    // @typescript-eslint/types @typescript-eslint/typescript-estree @typescript-eslint/utils
    eslintDevDependencies.push('eslint-plugin-jest', 'eslint-plugin-jest-dom')
  }
  if (hasPug) {
    eslintDevDependencies.push('eslint-plugin-pug')
  }
  if (hasStorybook) {
    eslintDevDependencies.push('eslint-plugin-storybook')
  }
  // TanstackQuery is only for React.js or Next.js
  if (hasTanstackQuery && (hasReact || hasNext)) {
    eslintDevDependencies.push('@tanstack/eslint-plugin-query')
  }
  if (hasTailwind) {
    eslintDevDependencies.push('eslint-plugin-tailwindcss')
  }
  if (hasWebpack) {
    eslintDevDependencies.push('eslint-webpack-plugin')
  }

  return { eslintDevDependencies }
}

export default getEslintCommands
