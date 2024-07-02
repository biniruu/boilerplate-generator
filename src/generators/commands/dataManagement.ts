import { SelectOptions } from '_types'

const getDataManagementCommands = (configOptions: SelectOptions) => {
  const hasAxios = configOptions.axios
  const hasGraphql = configOptions.graphql
  const hasKoa = configOptions.koa
  const hasMongoose = configOptions.mongoose
  const hasNext = configOptions.next
  const hasReact = configOptions.react
  const hasRedis = configOptions.redis
  const hasSocket = configOptions.socket
  const hasSwr = configOptions.swr
  const hasTanstackQeury = configOptions.tanstackQuery
  const hasTypescript = configOptions.typescript

  const dataManagementDependencies: string[] = []
  const dataManagementDevDependencies: string[] = []

  if (hasAxios) {
    dataManagementDependencies.push('axios')
  }
  if (hasGraphql) {
    dataManagementDependencies.push(
      '@apollo/client', // For client side
      'dataloader',
      'graphql',
      'graphql-scalars',
      'reflect-metadata',
      'type-graphql',
    )
    dataManagementDevDependencies.push('@graphql-codegen/cli')
  }
  if (hasKoa) {
    if (hasTypescript) {
      dataManagementDevDependencies.push('@types/koa', '@types/koa__router')
    }
    dataManagementDependencies.push('koa', '@koa-router')
  }
  if (hasMongoose) {
    dataManagementDependencies.push('mongoose')
  }
  if (hasRedis) {
    dataManagementDependencies.push('redis')
  }
  if (hasSocket) {
    dataManagementDependencies.push('socket.io', 'socket.io-client')
  }
  if (hasSwr) {
    dataManagementDependencies.push('swr')
  }
  if (hasTanstackQeury) {
    if (hasReact || hasNext) {
      dataManagementDependencies.push('@tanstack/query-core', '@tanstack/react-query')
      dataManagementDevDependencies.push('@tanstack/react-query-devtools')
    }
  }

  return {
    dataManagementDependencies,
    dataManagementDevDependencies,
  }
}

export default getDataManagementCommands
