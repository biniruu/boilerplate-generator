import getEslintCommands from '@generators/command/eslint';
import stateManager from '@store/state';
import { options } from 'tests/options.test';

test('should return an empty array when all options are false', () => {
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toBeEmpty();
});

const dependencies = ['eslint', 'eslint-plugin-jsx-a11y', 'eslint-plugin-import'];
const dependenciesForJavascript = ['@babel/core', '@babel/eslint-parser', ...dependencies];
test('should return dependencies for ESLint', () => {
  stateManager.setState({
    ...options,
    eslint: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers(dependenciesForJavascript);
});

const dependenciesForTypescript = [
  '@typescript-eslint/eslint-plugin',
  '@typescript-eslint/parser',
  'eslint-import-resolver-typescript',
  ...dependencies,
];
test('should return dependencies for ESLint with TypeScript', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    typescript: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers(dependenciesForTypescript);
});

test('should return dependencies for ESLint with Gatsby.js with TypeScript', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    gatsby: true,
    typescript: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers([
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    'eslint',
    'eslint-import-resolver-typescript',
    'eslint-plugin-import',
  ]);
});

const dependenciesForNext = ['eslint-plugin-react-refresh', 'eslint-plugin-testing-library'];
const dependenciesForNextWithTypescript = ['@typescript-eslint/eslint-plugin', ...dependenciesForNext];
test('should return dependencies for ESLint with Next.js and should exclude TypeScript', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    next: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers(dependenciesForNext);
});

test('should return dependencies for ESLint with Next.js and TypeScript', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    next: true,
    typescript: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers(dependenciesForNextWithTypescript);
});

const dependenciesForReact = [
  'eslint-plugin-import',
  'eslint-plugin-jsx-a11y',
  'eslint-plugin-react',
  'eslint-plugin-testing-library',
  'jest-resolve',
];
const dependenciesForReactWithTypescript = [
  '@typescript-eslint/eslint-plugin',
  'eslint-import-resolver-typescript',
  ...dependenciesForReact,
];
test('should return dependencies for ESLint with React.js and should exclude TypeScript', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    react: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers(dependenciesForReact);
});

test('should return dependencies for ESLint with React.js and TypeScript', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    react: true,
    typescript: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers(dependenciesForReactWithTypescript);
});

const dependenciesForNuxt = [
  '@nuxtjs/eslint-config-typescript',
  'eslint',
  'eslint-plugin-import',
  'eslint-plugin-jest',
  'eslint-plugin-jsx-a11y',
  'eslint-plugin-nuxt',
  'eslint-plugin-testing-library',
  'vue-eslint-parser',
];
const dependenciesForNuxtWithTypescript = [
  '@typescript-eslint/eslint-plugin',
  'eslint-import-resolver-typescript',
  ...dependenciesForNuxt,
];
test('should return dependencies for ESLint with Nuxt.js and should exclude TypeScript', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    nuxt: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers(dependenciesForNuxt);
});

test('should return dependencies for ESLint with Nuxt.js and TypeScript', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    nuxt: true,
    typescript: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers(dependenciesForNuxtWithTypescript);
});

test('should return dependencies for ESLint with WordPress', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    wordpress: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toEqual(['eslint']);
});

test('should return dependencies for ESLint with GraphQL.js', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    graphql: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers(['@graphql-eslint/eslint-plugin', ...dependenciesForJavascript]);
});

test('should return dependencies for ESLint with GraphQL.js and TypeScript', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    graphql: true,
    typescript: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers(['@graphql-eslint/eslint-plugin', ...dependenciesForTypescript]);
});

test('should return dependencies for ESLint with Next.js, GraphQL.js and TypeScript', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    next: true,
    graphql: true,
    typescript: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers([
    '@graphql-eslint/eslint-plugin',
    '@typescript-eslint/eslint-plugin',
    ...dependenciesForNext,
  ]);
});

test('should return dependencies for ESLint with Jest', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    jest: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers([
    'eslint-plugin-jest',
    'eslint-plugin-jest-dom',
    ...dependenciesForJavascript,
  ]);
});

test('should return dependencies for ESLint with Jest and TypeScript', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    jest: true,
    typescript: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers([
    'eslint-plugin-jest',
    'eslint-plugin-jest-dom',
    ...dependenciesForTypescript,
  ]);
});

test('should return dependencies for ESLint with React.js, Jest and TypeScript', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    jest: true,
    react: true,
    typescript: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers([
    'eslint-plugin-jest',
    'eslint-plugin-jest-dom',
    '@typescript-eslint/eslint-plugin',
    'eslint-import-resolver-typescript',
    ...dependenciesForReact,
  ]);
});

test('should return dependencies for ESLint with Pug', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    pug: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers(['eslint-plugin-pug', ...dependenciesForJavascript]);
});

test('should return dependencies for ESLint with Pug and TypeScript', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    pug: true,
    typescript: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers(['eslint-plugin-pug', ...dependenciesForTypescript]);
});

test('should return dependencies for ESLint with Storybook', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    storybook: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers(['eslint-plugin-storybook', ...dependenciesForJavascript]);
});

test('should return dependencies for ESLint with Storybook and TypeScript', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    storybook: true,
    typescript: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers(['eslint-plugin-storybook', ...dependenciesForTypescript]);
});

test('should return dependencies for ESLint with React.js and TanstackQuery', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    react: true,
    tanstackQuery: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers(['@tanstack/eslint-plugin-query', ...dependenciesForReact]);
});

test('should return dependencies for ESLint with React.js, TanstackQuery and TypeScript', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    react: true,
    tanstackQuery: true,
    typescript: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers([
    '@tanstack/eslint-plugin-query',
    ...dependenciesForReactWithTypescript,
  ]);
});

test('should return dependencies for ESLint with Next.js and TanstackQuery', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    next: true,
    tanstackQuery: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers(['@tanstack/eslint-plugin-query', ...dependenciesForNext]);
});

test('should return dependencies for ESLint with Next.js, TanstackQuery and TypeScript', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    next: true,
    tanstackQuery: true,
    typescript: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers([
    '@tanstack/eslint-plugin-query',
    ...dependenciesForNextWithTypescript,
  ]);
});

test('should return dependencies for ESLint with Tailwind CSS', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    tailwind: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers(['eslint-plugin-tailwindcss', ...dependenciesForJavascript]);
});

test('should return dependencies for ESLint with Tailwind CSS and TypeScript', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    tailwind: true,
    typescript: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers(['eslint-plugin-tailwindcss', ...dependenciesForTypescript]);
});

test('should return dependencies for ESLint with Next.js and Tailwind CSS', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    next: true,
    tailwind: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers(['eslint-plugin-tailwindcss', ...dependenciesForNext]);
});

test('should return dependencies for ESLint with Next.js, Tailwind CSS and TypeScript', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    next: true,
    tailwind: true,
    typescript: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers([
    'eslint-plugin-tailwindcss',
    ...dependenciesForNextWithTypescript,
  ]);
});

test('should return dependencies for ESLint with Webpack', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    webpack: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers(['eslint-webpack-plugin', ...dependenciesForJavascript]);
});

test('should return dependencies for ESLint with Webpack and TypeScript', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    webpack: true,
    typescript: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers(['eslint-webpack-plugin', ...dependenciesForTypescript]);
});

test('should return dependencies for ESLint with Nuxt.js and Webpack', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    nuxt: true,
    webpack: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers(['eslint-webpack-plugin', ...dependenciesForNuxt]);
});

test('should return dependencies for ESLint with Nuxt.js, Webpack and TypeScript', () => {
  stateManager.setState({
    ...options,
    eslint: true,
    nuxt: true,
    webpack: true,
    typescript: true,
  });
  const { eslintDevDependencies } = getEslintCommands();

  expect(eslintDevDependencies).toIncludeSameMembers(['eslint-webpack-plugin', ...dependenciesForNuxtWithTypescript]);
});
