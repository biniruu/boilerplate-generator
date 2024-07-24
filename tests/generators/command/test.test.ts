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
    'jsdom',
    'msw',
    'ts-jest',
  ]
  test('should generate a command for Jest', () => {
    configOptions.jest = true

    const { testDevDependencies } = getTestCommands(configOptions)

    expect(testDevDependencies).toIncludeSameMembers(dependencies)
  })
})
