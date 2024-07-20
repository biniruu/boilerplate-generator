import getEslintCommands from '@generators/command/eslint'

import { configOptions } from './configOptions.test'

describe('ESLint', () => {
  test('should return empty values when all options are false', () => {
    const { eslintDevDependencies } = getEslintCommands(configOptions)

    expect(eslintDevDependencies).toBeEmpty()
  })

  const dependencies = ['eslint', 'eslint-plugin-jsx-a11y', 'eslint-plugin-import']
  const dependenciesForJavascript = ['@babel/eslint-parser', ...dependencies]

  test('should generate a command for ESLint', () => {
    configOptions.eslint = true

    const { eslintDevDependencies } = getEslintCommands(configOptions)

    expect(eslintDevDependencies).toIncludeSameMembers(dependenciesForJavascript)
  })

  const dependenciesForTypescript = [
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    'eslint-import-resolver-typescript',
    ...dependencies,
  ]

  test('should generate a command for ESLint with TypeScript', () => {
    configOptions.eslint = true
    configOptions.typescript = true

    const { eslintDevDependencies } = getEslintCommands(configOptions)

    expect(eslintDevDependencies).toIncludeSameMembers(dependenciesForTypescript)
  })

  test('should generate a command for ESLint with Gatsby.js with TypeScript', () => {
    configOptions.eslint = true
    configOptions.gatsby = true
    configOptions.typescript = true

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

  test('should generate a command for ESLint with WordPress', () => {
    configOptions.eslint = true
    configOptions.wordpress = true

    const { eslintDevDependencies } = getEslintCommands(configOptions)

    expect(eslintDevDependencies).toEqual(['eslint'])
  })

  test('should generate a command for ESLint with GraphQL.js', () => {
    configOptions.eslint = true
    configOptions.graphql = true

    const { eslintDevDependencies } = getEslintCommands(configOptions)

    expect(eslintDevDependencies).toIncludeSameMembers(['@graphql-eslint/eslint-plugin', ...dependenciesForJavascript])
  })

  test('should generate a command for ESLint with GraphQL.js and TypeScript', () => {
    configOptions.eslint = true
    configOptions.graphql = true
    configOptions.typescript = true

    const { eslintDevDependencies } = getEslintCommands(configOptions)

    expect(eslintDevDependencies).toIncludeSameMembers(['@graphql-eslint/eslint-plugin', ...dependenciesForTypescript])
  })

  test('should generate a command for ESLint with Jest', () => {
    configOptions.eslint = true
    configOptions.jest = true

    const { eslintDevDependencies } = getEslintCommands(configOptions)

    expect(eslintDevDependencies).toIncludeSameMembers([
      'eslint-plugin-jest',
      'eslint-plugin-jest-dom',
      ...dependenciesForJavascript,
    ])
  })

  test('should generate a command for ESLint with Jest and TypeScript', () => {
    configOptions.eslint = true
    configOptions.jest = true
    configOptions.typescript = true

    const { eslintDevDependencies } = getEslintCommands(configOptions)

    expect(eslintDevDependencies).toIncludeSameMembers([
      'eslint-plugin-jest',
      'eslint-plugin-jest-dom',
      ...dependenciesForTypescript,
    ])
  })

  test('should generate a command for ESLint with Pug', () => {
    configOptions.eslint = true
    configOptions.pug = true

    const { eslintDevDependencies } = getEslintCommands(configOptions)

    expect(eslintDevDependencies).toIncludeSameMembers(['eslint-plugin-pug', ...dependenciesForJavascript])
  })

  test('should generate a command for ESLint with Pug and TypeScript', () => {
    configOptions.eslint = true
    configOptions.pug = true
    configOptions.typescript = true

    const { eslintDevDependencies } = getEslintCommands(configOptions)

    expect(eslintDevDependencies).toIncludeSameMembers(['eslint-plugin-pug', ...dependenciesForTypescript])
  })

  test('should generate a command for ESLint with Storybook', () => {
    configOptions.eslint = true
    configOptions.storybook = true

    const { eslintDevDependencies } = getEslintCommands(configOptions)

    expect(eslintDevDependencies).toIncludeSameMembers(['eslint-plugin-storybook', ...dependenciesForJavascript])
  })

  test('should generate a command for ESLint with Storybook and TypeScript', () => {
    configOptions.eslint = true
    configOptions.storybook = true
    configOptions.typescript = true

    const { eslintDevDependencies } = getEslintCommands(configOptions)

    expect(eslintDevDependencies).toIncludeSameMembers(['eslint-plugin-storybook', ...dependenciesForTypescript])
  })

  test('should generate a command for ESLint with TanstackQuery', () => {
    configOptions.eslint = true
    configOptions.tanstackQuery = true

    const { eslintDevDependencies } = getEslintCommands(configOptions)

    expect(eslintDevDependencies).toIncludeSameMembers(['@tanstack/eslint-plugin-query', ...dependenciesForJavascript])
  })
})
