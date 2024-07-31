import getStateManagementCommands from '@generators/command/stateManagement'
import { configOptions } from 'tests/configOptions.test'

test('should return an empty array when all options are false', () => {
  const { stateManagementDependencies } = getStateManagementCommands(configOptions)

  expect(stateManagementDependencies).toBeEmpty()
})

test('should return dependencies for Recoil', () => {
  configOptions.recoil = true

  const { stateManagementDependencies } = getStateManagementCommands(configOptions)

  expect(stateManagementDependencies).toEqual(['recoil'])
})
