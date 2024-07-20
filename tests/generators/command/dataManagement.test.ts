import getDataManagementCommands from '@generators/command/dataManagement'

import { configOptions } from './configOptions.test'

describe('Data Management Libraries', () => {
  test('should return values when all options are false', () => {
    const { dataManagementDependencies, dataManagementDevDependencies } = getDataManagementCommands(configOptions)

    expect(dataManagementDependencies).toBeEmpty()
    expect(dataManagementDevDependencies).toBeEmpty()
  })

  test('should generate a command for AXIOS', () => {
    configOptions.axios = true

    const { dataManagementDependencies } = getDataManagementCommands(configOptions)

    expect(dataManagementDependencies).toEqual(['axios'])
  })

  test('should generate a command for GraphQL.js', () => {
    configOptions.graphql = true

    const { dataManagementDependencies, dataManagementDevDependencies } = getDataManagementCommands(configOptions)

    expect(dataManagementDependencies).toIncludeSameMembers([
      '@apollo/client',
      'dataloader',
      'graphql',
      'graphql-scalars',
      'reflect-metadata',
      'type-graphql',
    ])
    expect(dataManagementDevDependencies).toEqual(['@graphql-codegen/cli'])
  })
})
