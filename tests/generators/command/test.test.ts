import getTestCommands from '@generators/command/test';
import stateManager from '@store/state';
import { options } from 'tests/configOptions.test';

test('should return an empty value when all options are false', () => {
  const { testDevDependencies } = getTestCommands();

  expect(testDevDependencies).toBeEmpty();
});

const dependencies = [
  '@testing-library/dom',
  '@testing-library/jest-dom',
  '@testing-library/user-event',
  '@types/jest',
  'jest',
  'jest-environment-jsdom',
  'jest-extended',
  'jest-html-reporters',
  'jest-watch-typeahead',
  'msw',
  'ts-jest',
];
test('should return dependencies for Jest', () => {
  stateManager.setState({
    ...options,
    jest: true,
  });
  const { testDevDependencies } = getTestCommands();

  expect(testDevDependencies).toIncludeSameMembers(dependencies);
});

test('should return dependencies for Jest with CSS Modules', () => {
  stateManager.setState({
    ...options,
    jest: true,
    postcss: true,
    tailwind: true,
  });
  const { testDevDependencies } = getTestCommands();

  expect(testDevDependencies).toIncludeSameMembers(['identity-obj-proxy', ...dependencies]);
});

test('should return dependencies for Jest with CSS Modules and TypeScript', () => {
  stateManager.setState({
    ...options,
    jest: true,
    postcss: true,
    tailwind: true,
    typescript: true,
  });
  const { testDevDependencies } = getTestCommands();

  expect(testDevDependencies).toIncludeSameMembers([
    'identity-obj-proxy',
    '@types/identity-obj-proxy',
    ...dependencies,
  ]);
});

const dependenciesForReact = [
  '@testing-library/react',
  '@testing-library/react-hooks',
  '@types/react-test-renderer',
  'react-test-renderer',
  ...dependencies,
];
test('should return dependencies for Jest with React.js', () => {
  stateManager.setState({
    ...options,
    jest: true,
    react: true,
  });
  const { testDevDependencies } = getTestCommands();

  expect(testDevDependencies).toIncludeSameMembers(dependenciesForReact);
});

test('should return dependencies for Jest with Next.js', () => {
  stateManager.setState({
    ...options,
    jest: true,
    next: true,
  });
  const { testDevDependencies } = getTestCommands();

  expect(testDevDependencies).toIncludeSameMembers(dependenciesForReact);
});

test('should return dependencies for Jest with React.js and Storybook', () => {
  stateManager.setState({
    ...options,
    jest: true,
    react: true,
    storybook: true,
  });
  const { testDevDependencies } = getTestCommands();

  expect(testDevDependencies).toIncludeSameMembers(['@storybook/react', ...dependenciesForReact]);
});
