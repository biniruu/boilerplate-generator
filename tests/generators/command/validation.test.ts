import getValidationCommands from '@generators/command/validation'
import { configOptions } from 'tests/configOptions.test'

test('should return an empty array when all options are false', () => {
  const { validationDependencies } = getValidationCommands(configOptions)

  expect(validationDependencies).toBeEmpty()
})

test('should return dependencies for Joi', () => {
  configOptions.joi = true

  const { validationDependencies } = getValidationCommands(configOptions)

  expect(validationDependencies).toEqual(['joi'])
})

test('should return dependencies for React Hook Form', () => {
  configOptions.reactHookForm = true

  const { validationDependencies } = getValidationCommands(configOptions)

  expect(validationDependencies).toEqual(['react-hook-form'])
})
