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

  test('should generate a command for Koa', () => {
    configOptions.koa = true

    const { dataManagementDependencies } = getDataManagementCommands(configOptions)

    expect(dataManagementDependencies).toIncludeSameMembers(['koa', '@koa/router'])
  })

  test('should generate a command for Koa with TypeScript', () => {
    configOptions.koa = true
    configOptions.typescript = true

    const { dataManagementDependencies, dataManagementDevDependencies } = getDataManagementCommands(configOptions)

    expect(dataManagementDependencies).toIncludeSameMembers(['koa', '@koa/router'])
    expect(dataManagementDevDependencies).toIncludeSameMembers(['@types/koa', '@types/koa__router'])
  })

  test('should generate a command for Mongoose', () => {
    configOptions.mongoose = true

    const { dataManagementDependencies } = getDataManagementCommands(configOptions)

    expect(dataManagementDependencies).toEqual(['mongoose'])
  })
})
