import getEslintCommands from '@generators/command/eslint'

import { configOptions } from './configOptions.test'

describe('ESLint', () => {
  test('should return empty values when all options are false', () => {
    const { eslintDevDependencies } = getEslintCommands(configOptions)

    expect(eslintDevDependencies).toBeEmpty()
  })

  test('should generate a command for ESLint', () => {
    configOptions.eslint = true

    const { eslintDevDependencies } = getEslintCommands(configOptions)

    expect(eslintDevDependencies).toIncludeSameMembers([
      '@babel/eslint-parser',
      'eslint',
      'eslint-plugin-jsx-a11y',
      'eslint-plugin-import',
    ])
  })

  test('should generate a command for ESLint with Gatsby.js', () => {
    configOptions.eslint = true
    configOptions.gatsby = true

    const { eslintDevDependencies } = getEslintCommands(configOptions)

    expect(eslintDevDependencies).toIncludeSameMembers([
      '@typescript-eslint/eslint-plugin',
      '@typescript-eslint/parser',
      'eslint',
      'eslint-import-resolver-typescript',
      'eslint-plugin-import',
    ])
  })

  const dependenciesForNext = ['eslint-plugin-react-refresh', 'eslint-plugin-testing-library']

  test('should generate a command for ESLint with Next.js and should exclude TypeScript', () => {
    configOptions.eslint = true
    configOptions.next = true

    const { eslintDevDependencies } = getEslintCommands(configOptions)

    expect(eslintDevDependencies).toIncludeSameMembers(dependenciesForNext)
  })

  test('should generate a command for ESLint with Next.js and TypeScript', () => {
    configOptions.eslint = true
    configOptions.next = true
    configOptions.typescript = true

    const { eslintDevDependencies } = getEslintCommands(configOptions)

    expect(eslintDevDependencies).toIncludeSameMembers(['@typescript-eslint/eslint-plugin', ...dependenciesForNext])
  })

  const dependenciesForNuxt = [
    '@nuxtjs/eslint-config-typescript',
    'eslint',
    'eslint-plugin-import',
    'eslint-plugin-jest',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-nuxt',
    'eslint-plugin-testing-library',
    'vue-eslint-parser',
  ]

  test('should generate a command for ESLint with Nuxt.js and should exclude TypeScript', () => {
    configOptions.eslint = true
    configOptions.nuxt = true

    const { eslintDevDependencies } = getEslintCommands(configOptions)

    expect(eslintDevDependencies).toIncludeSameMembers(dependenciesForNuxt)
  })

  test('should generate a command for ESLint with Nuxt.js and TypeScript', () => {
    configOptions.eslint = true
    configOptions.nuxt = true
    configOptions.typescript = true

    const { eslintDevDependencies } = getEslintCommands(configOptions)

    expect(eslintDevDependencies).toIncludeSameMembers([
      '@typescript-eslint/eslint-plugin',
      'eslint-import-resolver-typescript',
      ...dependenciesForNuxt,
    ])
  })

  test('should generate a command for WordPress', () => {
    configOptions.eslint = true
    configOptions.wordpress = true

    const { eslintDevDependencies } = getEslintCommands(configOptions)

    expect(eslintDevDependencies).toEqual(['eslint'])
  })

  test('should generate a command for GraphQL.js', () => {
    configOptions.eslint = true
    configOptions.graphql = true

    const { eslintDevDependencies } = getEslintCommands(configOptions)

    expect(eslintDevDependencies).toEqual(['@graphql-eslint/eslint-plugin'])
  })
})
