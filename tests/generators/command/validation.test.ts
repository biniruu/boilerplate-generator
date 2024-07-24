import getValidationCommands from '@generators/command/validation'
import { configOptions } from 'tests/configOptions.test'

describe('Validation commands', () => {
  test('should return an empty value when all options are false', () => {
    const { validationDependencies } = getValidationCommands(configOptions)

    expect(validationDependencies).toBeEmpty()
  })
})
