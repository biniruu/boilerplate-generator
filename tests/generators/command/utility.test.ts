import getUtilityCommands from '@generators/command/utility';
import stateManager from '@store/state';
import { options } from 'tests/configOptions.test';

test('should return empty arrays when all options are false', () => {
  const { utilityDependencies, utilityDevDependencies } = getUtilityCommands();

  expect(utilityDependencies).toBeEmpty();
  expect(utilityDevDependencies).toBeEmpty();
});

test('should return dependencies for Copy to Clipboard', () => {
  stateManager.setState({
    ...options,
    copyToClipboard: true,
  });
  const { utilityDependencies } = getUtilityCommands();

  expect(utilityDependencies).toEqual(['copy-to-clipboard']);
});

test('should return dependencies for Day.js', () => {
  stateManager.setState({
    ...options,
    dayjs: true,
  });
  const { utilityDependencies } = getUtilityCommands();

  expect(utilityDependencies).toEqual(['dayjs']);
});

test('should return dependencies for Dotenv with Nuxt.js', () => {
  stateManager.setState({
    ...options,
    dotenv: true,
    nuxt: true,
  });
  const { utilityDevDependencies } = getUtilityCommands();

  expect(utilityDevDependencies).toEqual(['dotenv-expand']);
});

test('should return dependencies for Dotenv with React.js', () => {
  stateManager.setState({
    ...options,
    dotenv: true,
    react: true,
  });
  const { utilityDevDependencies } = getUtilityCommands();

  expect(utilityDevDependencies).toIncludeSameMembers(['dotenv', 'dotenv-expand', 'env-cmd']);
});

test('should return dependencies for File Saver', () => {
  stateManager.setState({
    ...options,
    fileSaver: true,
  });
  const { utilityDependencies } = getUtilityCommands();

  expect(utilityDependencies).toEqual(['file-saver']);
});

test('should return dependencies for File Saver with TypeScript', () => {
  stateManager.setState({
    ...options,
    fileSaver: true,
    typescript: true,
  });
  const { utilityDependencies, utilityDevDependencies } = getUtilityCommands();

  expect(utilityDependencies).toEqual(['file-saver']);
  expect(utilityDevDependencies).toEqual(['@types/file-saver']);
});

test('should return dependencies for Husky', () => {
  stateManager.setState({
    ...options,
    husky: true,
  });
  const { utilityDevDependencies } = getUtilityCommands();

  expect(utilityDevDependencies).toEqual(['husky']);
});

test('should return dependencies for Immer', () => {
  stateManager.setState({
    ...options,
    immer: true,
  });
  const { utilityDependencies } = getUtilityCommands();

  expect(utilityDependencies).toEqual(['immer']);
});

test('should return dependencies for Immer With React.js', () => {
  stateManager.setState({
    ...options,
    immer: true,
    react: true,
  });
  const { utilityDependencies } = getUtilityCommands();

  expect(utilityDependencies).toIncludeSameMembers(['immer', 'use-immer']);
});

test('should return dependencies for JavaScript Stringify', () => {
  stateManager.setState({
    ...options,
    javascriptStringify: true,
  });
  const { utilityDependencies } = getUtilityCommands();

  expect(utilityDependencies).toEqual(['javascript-stringify']);
});

test('should return dependencies for jsdiff', () => {
  stateManager.setState({
    ...options,
    jsdiff: true,
  });
  const { utilityDependencies } = getUtilityCommands();

  expect(utilityDependencies).toEqual(['jsdiff']);
});

test('should return dependencies for Lodash', () => {
  stateManager.setState({
    ...options,
    lodash: true,
  });
  const { utilityDependencies, utilityDevDependencies } = getUtilityCommands();

  expect(utilityDependencies).toIncludeSameMembers(['lodash', 'lodash-es']);
  expect(utilityDevDependencies).toEqual(['@types/lodash-es']);
});

test('should return dependencies for Lodash with React.js', () => {
  stateManager.setState({
    ...options,
    lodash: true,
    react: true,
  });
  const { utilityDependencies, utilityDevDependencies } = getUtilityCommands();

  expect(utilityDependencies).toEqual(['lodash-es']);
  expect(utilityDevDependencies).toEqual(['@types/lodash-es']);
});

test('should return dependencies for markdownlint', () => {
  stateManager.setState({
    ...options,
    markdownlint: true,
  });
  const { utilityDevDependencies } = getUtilityCommands();

  expect(utilityDevDependencies).toEqual(['markdownlint']);
});

test('should return dependencies for nodemon', () => {
  stateManager.setState({
    ...options,
    nodemon: true,
  });
  const { utilityDependencies } = getUtilityCommands();

  expect(utilityDependencies).toEqual(['nodemon']);
});

test('should return dependencies for Prism', () => {
  stateManager.setState({
    ...options,
    prism: true,
  });
  const { utilityDependencies } = getUtilityCommands();

  expect(utilityDependencies).toEqual(['prismjs']);
});

test('should return dependencies for React Infinite Scroller', () => {
  stateManager.setState({
    ...options,
    reactInfiniteScroller: true,
  });
  const { utilityDependencies } = getUtilityCommands();

  expect(utilityDependencies).toEqual(['react-infinite-scroller']);
});

test('should return dependencies for React Joyride', () => {
  stateManager.setState({
    ...options,
    reactJoyride: true,
  });
  const { utilityDependencies } = getUtilityCommands();

  expect(utilityDependencies).toEqual(['react-joyride']);
});

test('should return dependencies for React Joyride with TypeScript', () => {
  stateManager.setState({
    ...options,
    reactJoyride: true,
    typescript: true,
  });
  const { utilityDependencies, utilityDevDependencies } = getUtilityCommands();

  expect(utilityDependencies).toEqual(['react-joyride']);
  expect(utilityDevDependencies).toEqual(['@types/react-joyride']);
});

test('should return dependencies for React Syntax Highlighter', () => {
  stateManager.setState({
    ...options,
    reactSyntaxHighlighter: true,
  });
  const { utilityDependencies } = getUtilityCommands();

  expect(utilityDependencies).toEqual(['react-syntax-highlighter']);
});

test('should return dependencies for React Syntax Highlighter with TypeScript', () => {
  stateManager.setState({
    ...options,
    reactSyntaxHighlighter: true,
    typescript: true,
  });
  const { utilityDependencies, utilityDevDependencies } = getUtilityCommands();

  expect(utilityDependencies).toEqual(['react-syntax-highlighter']);
  expect(utilityDevDependencies).toEqual(['@types/react-syntax-highlighter']);
});
