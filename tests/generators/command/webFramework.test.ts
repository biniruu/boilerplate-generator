import getWebFrameworkCommands from '@generators/command/webFramework'
import { configOptions } from 'tests/configOptions.test'

describe('Web Framework commands', () => {
  test('should return an empty value when all options are false', () => {
    const { webFrameworkDependencies, webFrameworkDevDependencies } = getWebFrameworkCommands(configOptions)

    expect(webFrameworkDependencies).toBeEmpty()
    expect(webFrameworkDevDependencies).toBeEmpty()
  })
})
