import getTestCommands from '@generators/command/test'
import { configOptions } from 'tests/configOptions.test'

describe('Test commands', () => {
  test('should return an empty value when all options are false', () => {
    const { testDevDependencies } = getTestCommands(configOptions)

    expect(testDevDependencies).toBeEmpty()
  })

  const dependencies = [
    '@testing-library/dom',
    '@testing-library/jest-dom',
    '@testing-library/user-event',
    '@types/jest',
    'jest',
    'jest-environment-jsdom',
    'jest-extended',
    'jest-html-reporters',
    'jest-watch-typeahead',
    'msw',
    'ts-jest',
  ]
  test('should generate a command for Jest', () => {
    configOptions.jest = true

    const { testDevDependencies } = getTestCommands(configOptions)

    expect(testDevDependencies).toIncludeSameMembers(dependencies)
  })

  test('should generate a command for Jest with CSS Modules', () => {
    configOptions.jest = true
    configOptions.postcss = true
    configOptions.tailwind = true

    const { testDevDependencies } = getTestCommands(configOptions)

    expect(testDevDependencies).toIncludeSameMembers(['identity-obj-proxy', ...dependencies])
  })

  test('should generate a command for Jest with CSS Modules and TypeScript', () => {
    configOptions.jest = true
    configOptions.postcss = true
    configOptions.tailwind = true
    configOptions.typescript = true

    const { testDevDependencies } = getTestCommands(configOptions)

    expect(testDevDependencies).toIncludeSameMembers([
      'identity-obj-proxy',
      '@types/identity-obj-proxy',
      ...dependencies,
    ])
  })

  const dependenciesForReact = [
    '@testing-library/react',
    '@testing-library/react-hooks',
    '@types/react-test-renderer',
    'react-test-renderer',
    ...dependencies,
  ]
  test('should generate a command for Jest with React.js', () => {
    configOptions.jest = true
    configOptions.react = true

    const { testDevDependencies } = getTestCommands(configOptions)

    expect(testDevDependencies).toIncludeSameMembers(dependenciesForReact)
  })

  test('should generate a command for Jest with Next.js', () => {
    configOptions.jest = true
    configOptions.next = true

    const { testDevDependencies } = getTestCommands(configOptions)

    expect(testDevDependencies).toIncludeSameMembers(dependenciesForReact)
  })

  test('should generate a command for Jest with React.js and Storybook', () => {
    configOptions.jest = true
    configOptions.react = true
    configOptions.storybook = true

    const { testDevDependencies } = getTestCommands(configOptions)

    expect(testDevDependencies).toIncludeSameMembers([
      '@storybook/react',
      '@storybook/testing-library',
      ...dependenciesForReact,
    ])
  })
})
