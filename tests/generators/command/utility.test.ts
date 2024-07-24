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

  test('should generate a command for Husky', () => {
    configOptions.husky = true

    const { utilityDevDependencies } = getUtilityCommands(configOptions)

    expect(utilityDevDependencies).toEqual(['husky'])
  })

  test('should generate a command for Immer', () => {
    configOptions.immer = true

    const { utilityDependencies } = getUtilityCommands(configOptions)

    expect(utilityDependencies).toEqual(['immer'])
  })

  test('should generate a command for Immer With React.js', () => {
    configOptions.immer = true
    configOptions.react = true

    const { utilityDependencies } = getUtilityCommands(configOptions)

    expect(utilityDependencies).toIncludeSameMembers(['immer', 'use-immer'])
  })

  test('should generate a command for JavaScript Stringify', () => {
    configOptions.javascriptStringify = true

    const { utilityDependencies } = getUtilityCommands(configOptions)

    expect(utilityDependencies).toEqual(['javascript-stringify'])
  })

  test('should generate a command for jsdiff', () => {
    configOptions.jsdiff = true

    const { utilityDependencies } = getUtilityCommands(configOptions)

    expect(utilityDependencies).toEqual(['jsdiff'])
  })

  test('should generate a command for Lodash', () => {
    configOptions.lodash = true

    const { utilityDependencies, utilityDevDependencies } = getUtilityCommands(configOptions)

    expect(utilityDependencies).toIncludeSameMembers(['lodash', 'lodash-es'])
    expect(utilityDevDependencies).toEqual(['@types/lodash-es'])
  })

  test('should generate a command for Lodash with React.js', () => {
    configOptions.lodash = true
    configOptions.react = true

    const { utilityDependencies, utilityDevDependencies } = getUtilityCommands(configOptions)

    expect(utilityDependencies).toEqual(['lodash-es'])
    expect(utilityDevDependencies).toEqual(['@types/lodash-es'])
  })

  test('should generate a command for markdownlint', () => {
    configOptions.markdownlint = true

    const { utilityDevDependencies } = getUtilityCommands(configOptions)

    expect(utilityDevDependencies).toEqual(['markdownlint'])
  })

  test('should generate a command for nodemon', () => {
    configOptions.nodemon = true

    const { utilityDependencies } = getUtilityCommands(configOptions)

    expect(utilityDependencies).toEqual(['nodemon'])
  })

  test('should generate a command for Prism', () => {
    configOptions.prism = true

    const { utilityDependencies } = getUtilityCommands(configOptions)

    expect(utilityDependencies).toEqual(['prismjs'])
  })
})
