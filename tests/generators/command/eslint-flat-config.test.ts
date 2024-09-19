import getEslintFlatConfigCommands from '@generators/command/eslint-flat-config'
import { configOptions } from 'tests/configOptions.test'

test('should return an empty array when all options are false', () => {
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands(configOptions)

  expect(eslintFlatConfigDevDependencies).toBeEmpty()
})

const dependenciesWithoutEslint = ['@eslint/compat', 'eslint-plugin-import']
const dependencies = [...dependenciesWithoutEslint, 'eslint']

test('should return dependencies for ESLint with Gatsby.js', () => {
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands({
    ...configOptions,
    eslintFlatConfig: true,
    gatsby: true,
  })

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers(['@eslint/compat'])
})

test('should return dependencies for ESLint with Wordpress', () => {
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands({
    ...configOptions,
    eslintFlatConfig: true,
    wordpress: true,
  })

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers(['@eslint/compat', 'eslint'])
})

test('should return dependencies for ESLint with React.js', () => {
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands({
    ...configOptions,
    eslintFlatConfig: true,
    react: true,
  })

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers([
    ...dependencies,
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-testing-library',
    'eslint-plugin-react',
    'eslint-plugin-react-refresh',
  ])
})

test('should return dependencies for ESLint with React.js and TypeScript', () => {
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands({
    ...configOptions,
    eslintFlatConfig: true,
    react: true,
    typescript: true,
  })

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers([
    ...dependencies,
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-testing-library',
    'eslint-plugin-react',
    'eslint-plugin-react-refresh',
    'eslint-import-resolver-typescript',
  ])
})

test('should return dependencies for ESLint with Next.js', () => {
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands({
    ...configOptions,
    eslintFlatConfig: true,
    next: true,
  })

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers([
    ...dependenciesWithoutEslint,
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-testing-library',
    'eslint-plugin-react',
    'eslint-plugin-react-refresh',
  ])
})

test('should return dependencies for ESLint with Next.js and TypeScript', () => {
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands({
    ...configOptions,
    eslintFlatConfig: true,
    next: true,
    typescript: true,
  })

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers([
    ...dependenciesWithoutEslint,
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-testing-library',
    'eslint-plugin-react',
    'eslint-plugin-react-refresh',
  ])
})

test('should return dependencies for ESLint with Nuxt.js', () => {
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands({
    ...configOptions,
    eslintFlatConfig: true,
    nuxt: true,
  })

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers([
    ...dependencies,
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-testing-library',
    '@nuxtjs/eslint-config-typescript',
    'eslint-plugin-nuxt',
    'vue-eslint-parser',
  ])
})

test('should return dependencies for ESLint with GraphQL', () => {
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands({
    ...configOptions,
    eslintFlatConfig: true,
    graphql: true,
  })

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers([...dependencies, '@graphql-eslint/eslint-plugin'])
})

test('should return dependencies for ESLint with Jest', () => {
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands({
    ...configOptions,
    eslintFlatConfig: true,
    jest: true,
  })

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers([
    ...dependencies,
    'eslint-plugin-jest',
    'eslint-plugin-jest-dom',
  ])
})

test('should return dependencies for ESLint with Pug', () => {
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands({
    ...configOptions,
    eslintFlatConfig: true,
    pug: true,
  })

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers([...dependencies, 'eslint-plugin-pug'])
})

test('should return dependencies for ESLint with Storybook', () => {
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands({
    ...configOptions,
    eslintFlatConfig: true,
    storybook: true,
  })

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers([...dependencies, 'eslint-plugin-storybook'])
})

test('should return dependencies for ESLint with TanstackQuery', () => {
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands({
    ...configOptions,
    eslintFlatConfig: true,
    tanstackQuery: true,
  })

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers([...dependencies, '@tanstack/eslint-plugin-query'])
})

test('should return dependencies for ESLint with Tailwind CSS', () => {
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands({
    ...configOptions,
    eslintFlatConfig: true,
    tailwind: true,
  })

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers([...dependencies, 'eslint-plugin-tailwindcss'])
})

test('should return dependencies for ESLint with Webpack', () => {
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands({
    ...configOptions,
    eslintFlatConfig: true,
    webpack: true,
  })

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers([...dependencies, 'eslint-webpack-plugin'])
})
