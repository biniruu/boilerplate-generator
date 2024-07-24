import getUtilityCommands from '@generators/command/utility'
import { configOptions } from 'tests/configOptions.test'

describe('Utility commands', () => {
  test('should return an empty value when all options are false', () => {
    const { utilityDependencies, utilityDevDependencies } = getUtilityCommands(configOptions)

    expect(utilityDependencies).toBeEmpty()
    expect(utilityDevDependencies).toBeEmpty()
  })

  test('should generate a command for Copy to Clipboard', () => {
    configOptions.copyToClipboard = true

    const { utilityDependencies } = getUtilityCommands(configOptions)

    expect(utilityDependencies).toEqual(['copy-to-clipboard'])
  })
})
