import getDataManagementCommands from '@generators/command/dataManagement'

import { configOptions } from './configOptions.test'

describe('Data Management Libraries', () => {
  test('should return empty values when all options are false', () => {
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

  test('should generate a command for Node-Redis', () => {
    configOptions.redis = true

    const { dataManagementDependencies } = getDataManagementCommands(configOptions)

    expect(dataManagementDependencies).toEqual(['redis'])
  })

  test('should generate a command for socket.io with socket.io-client', () => {
    configOptions.socket = true

    const { dataManagementDependencies } = getDataManagementCommands(configOptions)

    expect(dataManagementDependencies).toIncludeSameMembers(['socket.io', 'socket.io-client'])
  })

  test('should generate a command for SWR', () => {
    configOptions.swr = true

    const { dataManagementDependencies } = getDataManagementCommands(configOptions)

    expect(dataManagementDependencies).toEqual(['swr'])
  })

  test('should generate a command for Tanstack Query with React.js', () => {
    configOptions.tanstackQuery = true
    configOptions.react = true

    const { dataManagementDependencies, dataManagementDevDependencies } = getDataManagementCommands(configOptions)

    expect(dataManagementDependencies).toIncludeSameMembers(['@tanstack/query-core', '@tanstack/react-query'])
    expect(dataManagementDevDependencies).toEqual(['@tanstack/react-query-devtools'])
  })

  test('should generate a command for Tanstack Query with Next.js', () => {
    configOptions.tanstackQuery = true
    configOptions.next = true

    const { dataManagementDependencies, dataManagementDevDependencies } = getDataManagementCommands(configOptions)

    expect(dataManagementDependencies).toIncludeSameMembers(['@tanstack/query-core', '@tanstack/react-query'])
    expect(dataManagementDevDependencies).toEqual(['@tanstack/react-query-devtools'])
  })
})
