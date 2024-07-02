import type { SelectOptions } from '_types'

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

  /**
   * AXIOS
   * {@link https://axios-http.com}
   */
  if (hasAxios) {
    dataManagementDependencies.push('axios')
  }
  /**
   * Apollo Client
   * {@link https://www.apollographql.com/docs/react/}
   *
   * DataLoader
   * {@link https://github.com/graphql/dataloader?tab=readme-ov-file#dataloader}
   *
   * GraphQL.js
   * {@link https://graphql.org}
   *
   * GraphQL Scalars
   * {@link https://the-guild.dev/graphql/scalars}
   *
   * Metadata Reflection API
   * {@link https://rbuckton.github.io/reflect-metadata/}
   *
   * TypeGraphQL
   * {@link https://typegraphql.com}
   *
   * GraphQL Code Generator
   * {@link https://the-guild.dev/graphql/codegen}
   */
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
  /**
   * koa
   * {@link https://github.com/koajs/koa#readme}
   *
   * @koa/router
   * {@link https://github.com/koajs/router?tab=readme-ov-file#koarouter}
   */
  if (hasKoa) {
    if (hasTypescript) {
      dataManagementDevDependencies.push('@types/koa', '@types/koa__router')
    }
    dataManagementDependencies.push('koa', '@koa/router')
  }
  /**
   * Mongoose
   * {@link https://mongoosejs.com}
   */
  if (hasMongoose) {
    dataManagementDependencies.push('mongoose')
  }
  /**
   * redis (Node-Redis)
   * {@link https://redis.io}
   */
  if (hasRedis) {
    dataManagementDependencies.push('redis')
  }
  /**
   * socket.io
   * {@link https://socket.io}
   *
   * socket.io-client
   * {@link https://socket.io/docs/v4/client-initialization/}
   */
  if (hasSocket) {
    dataManagementDependencies.push('socket.io', 'socket.io-client')
  }
  /**
   * SWR
   * {@link https://swr.vercel.app}
   */
  if (hasSwr) {
    dataManagementDependencies.push('swr')
  }
  /**
   * Tanstack Query
   *
   * @tanstack/query-core
   * @tanstack/react-query
   * @tanstack/react-query-devtools
   * {@link https://tanstack.com/query/latest}
   */
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
