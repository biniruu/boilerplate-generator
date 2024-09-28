import getDataManagementCommands from '@generators/command/dataManagement';
import { stateOptions } from '@store/state';
import { options } from 'tests/options.test';

test('should return empty arrays when all options are false', () => {
  const { dataManagementDependencies, dataManagementDevDependencies } = getDataManagementCommands();

  expect(dataManagementDependencies).toBeEmpty();
  expect(dataManagementDevDependencies).toBeEmpty();
});

test('should return dependencies for AXIOS', () => {
  stateOptions.setState({
    ...options,
    axios: true,
  });
  const { dataManagementDependencies } = getDataManagementCommands();

  expect(dataManagementDependencies).toEqual(['axios']);
});

test('should return dependencies for GraphQL.js', () => {
  stateOptions.setState({
    ...options,
    graphql: true,
  });
  const { dataManagementDependencies, dataManagementDevDependencies } = getDataManagementCommands();

  expect(dataManagementDependencies).toIncludeSameMembers([
    '@apollo/client',
    'dataloader',
    'graphql',
    'graphql-scalars',
    'reflect-metadata',
    'type-graphql',
  ]);
  expect(dataManagementDevDependencies).toEqual(['@graphql-codegen/cli']);
});

test('should return dependencies for Koa', () => {
  stateOptions.setState({
    ...options,
    koa: true,
  });
  const { dataManagementDependencies } = getDataManagementCommands();

  expect(dataManagementDependencies).toIncludeSameMembers(['koa', '@koa/router']);
});

test('should return dependencies for Koa with TypeScript', () => {
  stateOptions.setState({
    ...options,
    koa: true,
    typescript: true,
  });
  const { dataManagementDependencies, dataManagementDevDependencies } = getDataManagementCommands();

  expect(dataManagementDependencies).toIncludeSameMembers(['koa', '@koa/router']);
  expect(dataManagementDevDependencies).toIncludeSameMembers(['@types/koa', '@types/koa__router']);
});

test('should return dependencies for Node-Redis', () => {
  stateOptions.setState({
    ...options,
    redis: true,
  });
  const { dataManagementDependencies } = getDataManagementCommands();

  expect(dataManagementDependencies).toEqual(['redis']);
});

test('should return dependencies for socket.io with socket.io-client', () => {
  stateOptions.setState({
    ...options,
    socket: true,
  });
  const { dataManagementDependencies } = getDataManagementCommands();

  expect(dataManagementDependencies).toIncludeSameMembers(['socket.io', 'socket.io-client']);
});

test('should return dependencies for SWR', () => {
  stateOptions.setState({
    ...options,
    swr: true,
  });
  const { dataManagementDependencies } = getDataManagementCommands();

  expect(dataManagementDependencies).toEqual(['swr']);
});

test('should return dependencies for Tanstack Query with React.js', () => {
  stateOptions.setState({
    ...options,
    tanstackQuery: true,
    react: true,
  });
  const { dataManagementDependencies, dataManagementDevDependencies } = getDataManagementCommands();

  expect(dataManagementDependencies).toIncludeSameMembers(['@tanstack/query-core', '@tanstack/react-query']);
  expect(dataManagementDevDependencies).toEqual(['@tanstack/react-query-devtools']);
});

test('should return dependencies for Tanstack Query with Next.js', () => {
  stateOptions.setState({
    ...options,
    tanstackQuery: true,
    next: true,
  });
  const { dataManagementDependencies, dataManagementDevDependencies } = getDataManagementCommands();

  expect(dataManagementDependencies).toIncludeSameMembers(['@tanstack/query-core', '@tanstack/react-query']);
  expect(dataManagementDevDependencies).toEqual(['@tanstack/react-query-devtools']);
});
