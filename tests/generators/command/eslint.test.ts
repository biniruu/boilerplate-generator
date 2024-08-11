import getEslintCommands from '@generators/command/eslint'
import { configOptions } from 'tests/configOptions.test'

test('should return an empty array when all options are false', () => {
  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toBeEmpty()
})

const dependencies = ['eslint', 'eslint-plugin-jsx-a11y', 'eslint-plugin-import']
const dependenciesForJavascript = ['@babel/core', '@babel/eslint-parser', ...dependencies]
test('should return dependencies for ESLint', () => {
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
test('should return dependencies for ESLint with TypeScript', () => {
  configOptions.eslint = true
  configOptions.typescript = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers(dependenciesForTypescript)
})

test('should return dependencies for ESLint with Gatsby.js with TypeScript', () => {
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
const dependenciesForNextWithTypescript = ['@typescript-eslint/eslint-plugin', ...dependenciesForNext]
test('should return dependencies for ESLint with Next.js and should exclude TypeScript', () => {
  configOptions.eslint = true
  configOptions.next = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers(dependenciesForNext)
})

test('should return dependencies for ESLint with Next.js and TypeScript', () => {
  configOptions.eslint = true
  configOptions.next = true
  configOptions.typescript = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers(dependenciesForNextWithTypescript)
})

const dependenciesForReact = [
  'eslint-plugin-import',
  'eslint-plugin-jsx-a11y',
  'eslint-plugin-react',
  'eslint-plugin-testing-library',
  'jest-resolve',
]
const dependenciesForReactWithTypescript = [
  '@typescript-eslint/eslint-plugin',
  'eslint-import-resolver-typescript',
  ...dependenciesForReact,
]
test('should return dependencies for ESLint with React.js and should exclude TypeScript', () => {
  configOptions.eslint = true
  configOptions.react = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers(dependenciesForReact)
})

test('should return dependencies for ESLint with React.js and TypeScript', () => {
  configOptions.eslint = true
  configOptions.react = true
  configOptions.typescript = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers(dependenciesForReactWithTypescript)
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
const dependenciesForNuxtWithTypescript = [
  '@typescript-eslint/eslint-plugin',
  'eslint-import-resolver-typescript',
  ...dependenciesForNuxt,
]
test('should return dependencies for ESLint with Nuxt.js and should exclude TypeScript', () => {
  configOptions.eslint = true
  configOptions.nuxt = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers(dependenciesForNuxt)
})

test('should return dependencies for ESLint with Nuxt.js and TypeScript', () => {
  configOptions.eslint = true
  configOptions.nuxt = true
  configOptions.typescript = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers(dependenciesForNuxtWithTypescript)
})

test('should return dependencies for ESLint with WordPress', () => {
  configOptions.eslint = true
  configOptions.wordpress = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toEqual(['eslint'])
})

test('should return dependencies for ESLint with GraphQL.js', () => {
  configOptions.eslint = true
  configOptions.graphql = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers(['@graphql-eslint/eslint-plugin', ...dependenciesForJavascript])
})

test('should return dependencies for ESLint with GraphQL.js and TypeScript', () => {
  configOptions.eslint = true
  configOptions.graphql = true
  configOptions.typescript = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers(['@graphql-eslint/eslint-plugin', ...dependenciesForTypescript])
})

test('should return dependencies for ESLint with Next.js, GraphQL.js and TypeScript', () => {
  configOptions.eslint = true
  configOptions.next = true
  configOptions.graphql = true
  configOptions.typescript = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers([
    '@graphql-eslint/eslint-plugin',
    '@typescript-eslint/eslint-plugin',
    ...dependenciesForNext,
  ])
})

test('should return dependencies for ESLint with Jest', () => {
  configOptions.eslint = true
  configOptions.jest = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers([
    'eslint-plugin-jest',
    'eslint-plugin-jest-dom',
    ...dependenciesForJavascript,
  ])
})

test('should return dependencies for ESLint with Jest and TypeScript', () => {
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

test('should return dependencies for ESLint with React.js, Jest and TypeScript', () => {
  configOptions.eslint = true
  configOptions.jest = true
  configOptions.react = true
  configOptions.typescript = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers([
    'eslint-plugin-jest',
    'eslint-plugin-jest-dom',
    '@typescript-eslint/eslint-plugin',
    'eslint-import-resolver-typescript',
    ...dependenciesForReact,
  ])
})

test('should return dependencies for ESLint with Pug', () => {
  configOptions.eslint = true
  configOptions.pug = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers(['eslint-plugin-pug', ...dependenciesForJavascript])
})

test('should return dependencies for ESLint with Pug and TypeScript', () => {
  configOptions.eslint = true
  configOptions.pug = true
  configOptions.typescript = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers(['eslint-plugin-pug', ...dependenciesForTypescript])
})

test('should return dependencies for ESLint with Storybook', () => {
  configOptions.eslint = true
  configOptions.storybook = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers(['eslint-plugin-storybook', ...dependenciesForJavascript])
})

test('should return dependencies for ESLint with Storybook and TypeScript', () => {
  configOptions.eslint = true
  configOptions.storybook = true
  configOptions.typescript = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers(['eslint-plugin-storybook', ...dependenciesForTypescript])
})

test('should return dependencies for ESLint with React.js and TanstackQuery', () => {
  configOptions.eslint = true
  configOptions.react = true
  configOptions.tanstackQuery = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers(['@tanstack/eslint-plugin-query', ...dependenciesForReact])
})

test('should return dependencies for ESLint with React.js, TanstackQuery and TypeScript', () => {
  configOptions.eslint = true
  configOptions.react = true
  configOptions.tanstackQuery = true
  configOptions.typescript = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers([
    '@tanstack/eslint-plugin-query',
    ...dependenciesForReactWithTypescript,
  ])
})

test('should return dependencies for ESLint with Next.js and TanstackQuery', () => {
  configOptions.eslint = true
  configOptions.next = true
  configOptions.tanstackQuery = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers(['@tanstack/eslint-plugin-query', ...dependenciesForNext])
})

test('should return dependencies for ESLint with Next.js, TanstackQuery and TypeScript', () => {
  configOptions.eslint = true
  configOptions.next = true
  configOptions.tanstackQuery = true
  configOptions.typescript = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers([
    '@tanstack/eslint-plugin-query',
    ...dependenciesForNextWithTypescript,
  ])
})

test('should return dependencies for ESLint with Tailwind CSS', () => {
  configOptions.eslint = true
  configOptions.tailwind = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers(['eslint-plugin-tailwindcss', ...dependenciesForJavascript])
})

test('should return dependencies for ESLint with Tailwind CSS and TypeScript', () => {
  configOptions.eslint = true
  configOptions.tailwind = true
  configOptions.typescript = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers(['eslint-plugin-tailwindcss', ...dependenciesForTypescript])
})

test('should return dependencies for ESLint with Next.js and Tailwind CSS', () => {
  configOptions.eslint = true
  configOptions.next = true
  configOptions.tailwind = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers(['eslint-plugin-tailwindcss', ...dependenciesForNext])
})

test('should return dependencies for ESLint with Next.js, Tailwind CSS and TypeScript', () => {
  configOptions.eslint = true
  configOptions.next = true
  configOptions.tailwind = true
  configOptions.typescript = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers([
    'eslint-plugin-tailwindcss',
    ...dependenciesForNextWithTypescript,
  ])
})

test('should return dependencies for ESLint with Webpack', () => {
  configOptions.eslint = true
  configOptions.webpack = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers(['eslint-webpack-plugin', ...dependenciesForJavascript])
})

test('should return dependencies for ESLint with Webpack and TypeScript', () => {
  configOptions.eslint = true
  configOptions.webpack = true
  configOptions.typescript = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers(['eslint-webpack-plugin', ...dependenciesForTypescript])
})

test('should return dependencies for ESLint with Nuxt.js and Webpack', () => {
  configOptions.eslint = true
  configOptions.nuxt = true
  configOptions.webpack = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers(['eslint-webpack-plugin', ...dependenciesForNuxt])
})

test('should return dependencies for ESLint with Nuxt.js, Webpack and TypeScript', () => {
  configOptions.eslint = true
  configOptions.nuxt = true
  configOptions.webpack = true
  configOptions.typescript = true

  const { eslintDevDependencies } = getEslintCommands(configOptions)

  expect(eslintDevDependencies).toIncludeSameMembers(['eslint-webpack-plugin', ...dependenciesForNuxtWithTypescript])
})
