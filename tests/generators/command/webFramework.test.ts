import getWebFrameworkCommands from '@generators/command/webFramework';
import { stateOptions } from '@store/state';
import { options } from 'tests/options.test';

test('should return empty arrays when all options are false', () => {
  const { webFrameworkDependencies, webFrameworkDevDependencies } = getWebFrameworkCommands();

  expect(webFrameworkDependencies).toBeEmpty();
  expect(webFrameworkDevDependencies).toBeEmpty();
});

test('should return dependencies for Express.js', () => {
  stateOptions.setState({
    ...options,
    express: true,
  });
  const { webFrameworkDependencies } = getWebFrameworkCommands();

  expect(webFrameworkDependencies).toIncludeSameMembers(['body-parser', 'cors', 'express']);
});

test('should return dependencies for Express.js with TypeScript', () => {
  stateOptions.setState({
    ...options,
    express: true,
    typescript: true,
  });
  const { webFrameworkDependencies, webFrameworkDevDependencies } = getWebFrameworkCommands();

  expect(webFrameworkDependencies).toIncludeSameMembers(['body-parser', 'cors', 'express']);
  expect(webFrameworkDevDependencies).toIncludeSameMembers(['@types/body-parser', '@types/cors', '@types/express']);
});

test('should return dependencies for Next.js', () => {
  stateOptions.setState({
    ...options,
    next: true,
  });
  const { webFrameworkDependencies } = getWebFrameworkCommands();

  expect(webFrameworkDependencies).toEqual(['react-refresh']);
});

test('should return dependencies for React.js', () => {
  stateOptions.setState({
    ...options,
    react: true,
  });
  const { webFrameworkDependencies } = getWebFrameworkCommands();

  expect(webFrameworkDependencies).toIncludeSameMembers(['react-refresh', 'react-router-dom']);
});

test('should return dependencies for Nuxt.js', () => {
  stateOptions.setState({
    ...options,
    nuxt: true,
  });
  const { webFrameworkDevDependencies } = getWebFrameworkCommands();

  expect(webFrameworkDevDependencies).toEqual(['volar-service-vetur']);
});

test('should return dependencies for Nuxt.js with TypeScript', () => {
  stateOptions.setState({
    ...options,
    nuxt: true,
    typescript: true,
  });
  const { webFrameworkDevDependencies } = getWebFrameworkCommands();

  expect(webFrameworkDevDependencies).toIncludeSameMembers(['volar-service-vetur', 'vue-tsc']);
});

test('should return dependencies for three.js', () => {
  stateOptions.setState({
    ...options,
    three: true,
  });
  const { webFrameworkDependencies } = getWebFrameworkCommands();

  expect(webFrameworkDependencies).toEqual(['three']);
});

test('should return dependencies for three.js with TypeScript', () => {
  stateOptions.setState({
    ...options,
    three: true,
    typescript: true,
  });
  const { webFrameworkDependencies, webFrameworkDevDependencies } = getWebFrameworkCommands();

  expect(webFrameworkDependencies).toEqual(['three']);
  expect(webFrameworkDevDependencies).toEqual(['@types/three']);
});
