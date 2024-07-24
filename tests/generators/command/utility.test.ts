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

  test('should generate a command for Day.js', () => {
    configOptions.dayjs = true

    const { utilityDependencies } = getUtilityCommands(configOptions)

    expect(utilityDependencies).toEqual(['dayjs'])
  })

  test('should generate a command for Dotenv with Nuxt.js', () => {
    configOptions.dotenv = true
    configOptions.nuxt = true

    const { utilityDevDependencies } = getUtilityCommands(configOptions)

    expect(utilityDevDependencies).toEqual(['dotenv-expand'])
  })

  test('should generate a command for Dotenv with React.js', () => {
    configOptions.dotenv = true
    configOptions.react = true

    const { utilityDevDependencies } = getUtilityCommands(configOptions)

    expect(utilityDevDependencies).toIncludeSameMembers(['dotenv', 'dotenv-expand', 'env-cmd'])
  })

  test('should generate a command for File Saver', () => {
    configOptions.fileSaver = true

    const { utilityDependencies } = getUtilityCommands(configOptions)

    expect(utilityDependencies).toEqual(['file-saver'])
  })

  test('should generate a command for File Saver with TypeScript', () => {
    configOptions.fileSaver = true
    configOptions.typescript = true

    const { utilityDependencies, utilityDevDependencies } = getUtilityCommands(configOptions)

    expect(utilityDependencies).toEqual(['file-saver'])
    expect(utilityDevDependencies).toEqual(['@types/file-saver'])
  })
})
