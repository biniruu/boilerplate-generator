import getCertainConditions from '@utils/certainConditions';
import type { SelectOptions } from '_types';

const getDataManagementCommands = (configOptions: SelectOptions) => {
  const {
    hasAxios,
    hasGraphql,
    hasKoa,
    hasMongoose,
    hasNext,
    hasReact,
    hasRedis,
    hasSocket,
    hasSwr,
    hasTanstackQuery,
    hasTypescript,
  } = getCertainConditions(configOptions);

  const dataManagementDependencies: string[] = [];
  const dataManagementDevDependencies: string[] = [];

  /**
   * axios (AXIOS)
   * {@link https://axios-http.com}
   */
  if (hasAxios) {
    dataManagementDependencies.push('axios');
  }
  /**
   * @apollo/client (Apollo Client)
   * {@link https://www.apollographql.com/docs/react/}
   *
   * dataloader (DataLoader)
   * {@link https://github.com/graphql/dataloader#dataloader}
   *
   * graphql (GraphQL.js)
   * {@link https://graphql.org}
   *
   * graphql-scalars (GraphQL Scalars)
   * {@link https://the-guild.dev/graphql/scalars}
   *
   * reflect-metadata (Metadata Reflection API)
   * {@link https://rbuckton.github.io/reflect-metadata/}
   *
   * type-graphql (TypeGraphQL)
   * {@link https://typegraphql.com}
   *
   * @graphql-codegen/cli (GraphQL Code Generator)
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
    );
    dataManagementDevDependencies.push('@graphql-codegen/cli');
  }
  /**
   * koa (Koa)
   * {@link https://github.com/koajs/koa#readme}
   *
   * @koa/router
   * {@link https://github.com/koajs/router#koarouter}
   */
  if (hasKoa) {
    dataManagementDependencies.push('koa', '@koa/router');
    hasTypescript && dataManagementDevDependencies.push('@types/koa', '@types/koa__router');
  }
  /**
   * mongoose (Mongoose)
   * {@link https://mongoosejs.com}
   */
  if (hasMongoose) {
    dataManagementDependencies.push('mongoose');
  }
  /**
   * redis (Node-Redis)
   * {@link https://redis.io}
   */
  if (hasRedis) {
    dataManagementDependencies.push('redis');
  }
  /**
   * socket.io
   * {@link https://socket.io}
   *
   * socket.io-client
   * {@link https://socket.io/docs/v4/client-initialization/}
   */
  if (hasSocket) {
    dataManagementDependencies.push('socket.io', 'socket.io-client');
  }
  /**
   * swr (SWR)
   * {@link https://swr.vercel.app}
   */
  if (hasSwr) {
    dataManagementDependencies.push('swr');
  }
  /**
   * Tanstack Query
   *
   * @tanstack/query-core
   * @tanstack/react-query
   * @tanstack/react-query-devtools
   * {@link https://tanstack.com/query/latest}
   */
  if (hasTanstackQuery) {
    dataManagementDependencies.push('@tanstack/query-core');
    dataManagementDevDependencies.push('@tanstack/react-query-devtools');
    (hasReact || hasNext) && dataManagementDependencies.push('@tanstack/react-query');
  }

  return {
    dataManagementDependencies,
    dataManagementDevDependencies,
  };
};

export default getDataManagementCommands;
