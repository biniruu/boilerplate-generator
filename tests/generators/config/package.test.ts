import generatePackageConfig from '@generators/config/package';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return a configuration for package.json', () => {
  setTextContent({ content: generatePackageConfig(options) });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with Gatsby.js', () => {
  options.gatsby = true;

  setTextContent({ content: generatePackageConfig(options) });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with Express.js', () => {
  options.express = true;

  setTextContent({ content: generatePackageConfig(options) });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with Jest', () => {
  options.jest = true;

  setTextContent({ content: generatePackageConfig(options) });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with Next.js', () => {
  options.next = true;

  setTextContent({ content: generatePackageConfig(options) });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with React.js', () => {
  options.react = true;

  setTextContent({ content: generatePackageConfig(options) });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with Storybook', () => {
  options.storybook = true;

  setTextContent({ content: generatePackageConfig(options) });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with TypeScript', () => {
  options.typescript = true;

  setTextContent({ content: generatePackageConfig(options) });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with Webpack', () => {
  options.webpack = true;

  setTextContent({ content: generatePackageConfig(options) });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with Next.js, TypeScript and Storybook', () => {
  options.next = true;
  options.typescript = true;
  options.storybook = true;

  setTextContent({ content: generatePackageConfig(options) });

  expect(elemCode?.textContent).toMatchSnapshot();
});
