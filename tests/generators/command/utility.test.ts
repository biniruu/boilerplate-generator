import getUtilityCommands from '@generators/command/utility';
import { configOptions } from 'tests/configOptions.test';

test('should return empty arrays when all options are false', () => {
  const { utilityDependencies, utilityDevDependencies } = getUtilityCommands(configOptions);

  expect(utilityDependencies).toBeEmpty();
  expect(utilityDevDependencies).toBeEmpty();
});

test('should return dependencies for Copy to Clipboard', () => {
  configOptions.copyToClipboard = true;

  const { utilityDependencies } = getUtilityCommands(configOptions);

  expect(utilityDependencies).toEqual(['copy-to-clipboard']);
});

test('should return dependencies for Day.js', () => {
  configOptions.dayjs = true;

  const { utilityDependencies } = getUtilityCommands(configOptions);

  expect(utilityDependencies).toEqual(['dayjs']);
});

test('should return dependencies for Dotenv with Nuxt.js', () => {
  configOptions.dotenv = true;
  configOptions.nuxt = true;

  const { utilityDevDependencies } = getUtilityCommands(configOptions);

  expect(utilityDevDependencies).toEqual(['dotenv-expand']);
});

test('should return dependencies for Dotenv with React.js', () => {
  configOptions.dotenv = true;
  configOptions.react = true;

  const { utilityDevDependencies } = getUtilityCommands(configOptions);

  expect(utilityDevDependencies).toIncludeSameMembers(['dotenv', 'dotenv-expand', 'env-cmd']);
});

test('should return dependencies for File Saver', () => {
  configOptions.fileSaver = true;

  const { utilityDependencies } = getUtilityCommands(configOptions);

  expect(utilityDependencies).toEqual(['file-saver']);
});

test('should return dependencies for File Saver with TypeScript', () => {
  configOptions.fileSaver = true;
  configOptions.typescript = true;

  const { utilityDependencies, utilityDevDependencies } = getUtilityCommands(configOptions);

  expect(utilityDependencies).toEqual(['file-saver']);
  expect(utilityDevDependencies).toEqual(['@types/file-saver']);
});

test('should return dependencies for Husky', () => {
  configOptions.husky = true;

  const { utilityDevDependencies } = getUtilityCommands(configOptions);

  expect(utilityDevDependencies).toEqual(['husky']);
});

test('should return dependencies for Immer', () => {
  configOptions.immer = true;

  const { utilityDependencies } = getUtilityCommands(configOptions);

  expect(utilityDependencies).toEqual(['immer']);
});

test('should return dependencies for Immer With React.js', () => {
  configOptions.immer = true;
  configOptions.react = true;

  const { utilityDependencies } = getUtilityCommands(configOptions);

  expect(utilityDependencies).toIncludeSameMembers(['immer', 'use-immer']);
});

test('should return dependencies for JavaScript Stringify', () => {
  configOptions.javascriptStringify = true;

  const { utilityDependencies } = getUtilityCommands(configOptions);

  expect(utilityDependencies).toEqual(['javascript-stringify']);
});

test('should return dependencies for jsdiff', () => {
  configOptions.jsdiff = true;

  const { utilityDependencies } = getUtilityCommands(configOptions);

  expect(utilityDependencies).toEqual(['jsdiff']);
});

test('should return dependencies for Lodash', () => {
  configOptions.lodash = true;

  const { utilityDependencies, utilityDevDependencies } = getUtilityCommands(configOptions);

  expect(utilityDependencies).toIncludeSameMembers(['lodash', 'lodash-es']);
  expect(utilityDevDependencies).toEqual(['@types/lodash-es']);
});

test('should return dependencies for Lodash with React.js', () => {
  configOptions.lodash = true;
  configOptions.react = true;

  const { utilityDependencies, utilityDevDependencies } = getUtilityCommands(configOptions);

  expect(utilityDependencies).toEqual(['lodash-es']);
  expect(utilityDevDependencies).toEqual(['@types/lodash-es']);
});

test('should return dependencies for markdownlint', () => {
  configOptions.markdownlint = true;

  const { utilityDevDependencies } = getUtilityCommands(configOptions);

  expect(utilityDevDependencies).toEqual(['markdownlint']);
});

test('should return dependencies for nodemon', () => {
  configOptions.nodemon = true;

  const { utilityDependencies } = getUtilityCommands(configOptions);

  expect(utilityDependencies).toEqual(['nodemon']);
});

test('should return dependencies for Prism', () => {
  configOptions.prism = true;

  const { utilityDependencies } = getUtilityCommands(configOptions);

  expect(utilityDependencies).toEqual(['prismjs']);
});

test('should return dependencies for React Infinite Scroller', () => {
  configOptions.reactInfiniteScroller = true;

  const { utilityDependencies } = getUtilityCommands(configOptions);

  expect(utilityDependencies).toEqual(['react-infinite-scroller']);
});

test('should return dependencies for React Joyride', () => {
  configOptions.reactJoyride = true;

  const { utilityDependencies } = getUtilityCommands(configOptions);

  expect(utilityDependencies).toEqual(['react-joyride']);
});

test('should return dependencies for React Joyride with TypeScript', () => {
  configOptions.reactJoyride = true;
  configOptions.typescript = true;

  const { utilityDependencies, utilityDevDependencies } = getUtilityCommands(configOptions);

  expect(utilityDependencies).toEqual(['react-joyride']);
  expect(utilityDevDependencies).toEqual(['@types/react-joyride']);
});

test('should return dependencies for React Syntax Highlighter', () => {
  configOptions.reactSyntaxHighlighter = true;

  const { utilityDependencies } = getUtilityCommands(configOptions);

  expect(utilityDependencies).toEqual(['react-syntax-highlighter']);
});

test('should return dependencies for React Syntax Highlighter with TypeScript', () => {
  configOptions.reactSyntaxHighlighter = true;
  configOptions.typescript = true;

  const { utilityDependencies, utilityDevDependencies } = getUtilityCommands(configOptions);

  expect(utilityDependencies).toEqual(['react-syntax-highlighter']);
  expect(utilityDevDependencies).toEqual(['@types/react-syntax-highlighter']);
});
