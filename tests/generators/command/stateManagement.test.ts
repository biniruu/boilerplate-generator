import getStateManagementCommands from '@generators/command/stateManagement'
import { configOptions } from 'tests/configOptions.test'

describe('State management Commands', () => {
  test('should return an empty value when all options are false', () => {
    const { stateManagementDependencies } = getStateManagementCommands(configOptions)

    expect(stateManagementDependencies).toBeEmpty()
  })

  test('should generate a command for Recoil', () => {
    configOptions.recoil = true

    const { stateManagementDependencies } = getStateManagementCommands(configOptions)

    expect(stateManagementDependencies).toEqual(['recoil'])
  })
})
