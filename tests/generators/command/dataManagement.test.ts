import getDataManagementCommands from '@generators/command/dataManagement'

import { configOptions } from './configOptions.test'

describe('Data Management Libraries', () => {
  test('should return values when all options are false', () => {
    const { dataManagementDependencies, dataManagementDevDependencies } = getDataManagementCommands(configOptions)

    expect(dataManagementDependencies).toBeEmpty()
    expect(dataManagementDevDependencies).toBeEmpty()
  })
})
