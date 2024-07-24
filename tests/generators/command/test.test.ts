import getTestCommands from '@generators/command/test'
import { configOptions } from 'tests/configOptions.test'

describe('Test commands', () => {
  test('should return an empty value when all options are false', () => {
    const { testDevDependencies } = getTestCommands(configOptions)

    expect(testDevDependencies).toBeEmpty()
  })
})
