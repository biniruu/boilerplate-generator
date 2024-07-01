import { SelectOptions } from '_types'

const getEslintCommands = (configOptions: SelectOptions) => {
  const hasGatsby = configOptions.gatsby
  const hasGraphql = configOptions.graphql
  const hasJest = configOptions.jest
  const hasNext = configOptions.next
  const hasNuxt = configOptions.nuxt
  const hasPug = configOptions.pug
  const hasReact = configOptions.react
  const hasStorybook = configOptions.storybook
  const hasTailwind = configOptions.tailwind
  const hasTanstackQeury = configOptions.tanstackQuery
  const hasThree = configOptions.three
  const hasTypescript = configOptions.typescript
  const hasWebpack = configOptions.webpack
  const hasWordpress = configOptions.wordpress
  const hasCore = hasGatsby || hasNext || hasNuxt || hasReact || hasThree || hasTypescript || hasWordpress

  const eslintDevDependencies: string[] = []

  if (hasCore) {
    if (hasGatsby) {
      // For TypeScript only
      eslintDevDependencies.push(
        '@typescript-eslint/eslint-plugin',
        '@typescript-eslint/parser',
        'eslint',
        'eslint-import-resolver-typescript',
        'eslint-plugin-import',
      )
    }
    if (hasNext) {
      if (hasTypescript) {
        eslintDevDependencies.push('@typescript-eslint/eslint-plugin')
      }
      eslintDevDependencies.push('eslint-plugin-react-refresh', 'eslint-plugin-testing-library')
    }
    if (hasNuxt) {
      if (hasTypescript) {
        eslintDevDependencies.push('@typescript-eslint/eslint-plugin', 'eslint-import-resolver-typescript')
      }
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
    }
    // For React.js that build with Vite
    if (hasReact) {
      if (hasTypescript) {
        eslintDevDependencies.push('@typescript-eslint/eslint-plugin', 'eslint-import-resolver-typescript')
      }
      eslintDevDependencies.push(
        'eslint-plugin-import',
        'eslint-plugin-jsx-a11y',
        'eslint-plugin-react',
        'eslint-plugin-testing-library',
        'jest-resolve',
      )
    }
    if (hasThree) {
      eslintDevDependencies.push(
        '@typescript-eslint/eslint-plugin',
        '@typescript-eslint/parser',
        'eslint',
        'eslint-import-resolver-typescript',
        'eslint-plugin-import',
      )
    }
    if (hasTypescript) {
      eslintDevDependencies.push(
        '@typescript-eslint/eslint-plugin',
        '@typescript-eslint/parser',
        'eslint',
        'eslint-import-resolver-typescript',
        'eslint-plugin-import',
      )
    }
    if (hasWordpress) {
      eslintDevDependencies.push('eslint')
    }
  } else {
    // For VanillaJS
    eslintDevDependencies.push('@babel/eslint-parser', 'eslint', 'eslint-plugin-jsx-a11y', 'eslint-plugin-import')
  }

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
  if (hasTanstackQeury) {
    eslintDevDependencies.push('@tanstack/eslint-plugin-query')
  }
  if (hasTailwind) {
    eslintDevDependencies.push('eslint-plugin-tailwindcss')
  }
  if (hasWebpack) {
    eslintDevDependencies.push('eslint-webpack-plugin')
  }

  return {
    eslintDevDependencies,
  }
}

export default getEslintCommands
