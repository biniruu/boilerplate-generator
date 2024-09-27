import getEslintFlatConfigCommands from '@generators/command/eslint-flat-config';
import stateManager from '@store/state';
import { options } from 'tests/configOptions.test';

test('should return an empty array when all options are false', () => {
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands();

  expect(eslintFlatConfigDevDependencies).toBeEmpty();
});

const dependenciesWithoutEslint = ['@eslint/compat', 'eslint-plugin-import'];
const dependencies = [...dependenciesWithoutEslint, 'eslint'];

test('should return dependencies for ESLint with Gatsby.js', () => {
  stateManager.setState({
    ...options,
    eslintFlatConfig: true,
    gatsby: true,
  });
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands();

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers(['@eslint/compat']);
});

test('should return dependencies for ESLint with Wordpress', () => {
  stateManager.setState({
    ...options,
    eslintFlatConfig: true,
    wordpress: true,
  });
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands();

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers(['@eslint/compat', 'eslint']);
});

test('should return dependencies for ESLint with React.js', () => {
  stateManager.setState({
    ...options,
    eslintFlatConfig: true,
    react: true,
  });
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands();

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers([
    ...dependencies,
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-testing-library',
    'eslint-plugin-react',
    'eslint-plugin-react-refresh',
  ]);
});

test('should return dependencies for ESLint with React.js and TypeScript', () => {
  stateManager.setState({
    ...options,
    eslintFlatConfig: true,
    react: true,
    typescript: true,
  });
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands();

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers([
    ...dependencies,
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-testing-library',
    'eslint-plugin-react',
    'eslint-plugin-react-refresh',
    'eslint-import-resolver-typescript',
  ]);
});

test('should return dependencies for ESLint with Next.js', () => {
  stateManager.setState({
    ...options,
    eslintFlatConfig: true,
    next: true,
  });
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands();

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers([
    ...dependenciesWithoutEslint,
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-testing-library',
    'eslint-plugin-react',
    'eslint-plugin-react-refresh',
  ]);
});

test('should return dependencies for ESLint with Next.js and TypeScript', () => {
  stateManager.setState({
    ...options,
    eslintFlatConfig: true,
    next: true,
    typescript: true,
  });
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands();

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers([
    ...dependenciesWithoutEslint,
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-testing-library',
    'eslint-plugin-react',
    'eslint-plugin-react-refresh',
  ]);
});

test('should return dependencies for ESLint with Nuxt.js', () => {
  stateManager.setState({
    ...options,
    eslintFlatConfig: true,
    nuxt: true,
  });
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands();

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers([
    ...dependencies,
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-testing-library',
    '@nuxtjs/eslint-config-typescript',
    'eslint-plugin-nuxt',
    'vue-eslint-parser',
  ]);
});

test('should return dependencies for ESLint with GraphQL', () => {
  stateManager.setState({
    ...options,
    eslintFlatConfig: true,
    graphql: true,
  });
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands();

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers([...dependencies, '@graphql-eslint/eslint-plugin']);
});

test('should return dependencies for ESLint with Jest', () => {
  stateManager.setState({
    ...options,
    eslintFlatConfig: true,
    jest: true,
  });
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands();

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers([
    ...dependencies,
    'eslint-plugin-jest',
    'eslint-plugin-jest-dom',
  ]);
});

test('should return dependencies for ESLint with Pug', () => {
  stateManager.setState({
    ...options,
    eslintFlatConfig: true,
    pug: true,
  });
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands();

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers([...dependencies, 'eslint-plugin-pug']);
});

test('should return dependencies for ESLint with Storybook', () => {
  stateManager.setState({
    ...options,
    eslintFlatConfig: true,
    storybook: true,
  });
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands();

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers([...dependencies, 'eslint-plugin-storybook']);
});

test('should return dependencies for ESLint with TanstackQuery', () => {
  stateManager.setState({
    ...options,
    eslintFlatConfig: true,
    tanstackQuery: true,
  });
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands();

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers([...dependencies, '@tanstack/eslint-plugin-query']);
});

test('should return dependencies for ESLint with Tailwind CSS', () => {
  stateManager.setState({
    ...options,
    eslintFlatConfig: true,
    tailwind: true,
  });
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands();

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers([...dependencies, 'eslint-plugin-tailwindcss']);
});

test('should return dependencies for ESLint with Webpack', () => {
  stateManager.setState({
    ...options,
    eslintFlatConfig: true,
    webpack: true,
  });
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands();

  expect(eslintFlatConfigDevDependencies).toIncludeSameMembers([...dependencies, 'eslint-webpack-plugin']);
});
