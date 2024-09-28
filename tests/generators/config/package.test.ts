import generatePackageConfig from '@generators/config/package';
import { stateOptions } from '@store/state';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return a configuration for package.json', () => {
  setTextContent({ content: generatePackageConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with Gatsby.js', () => {
  stateOptions.setState({
    ...options,
    gatsby: true,
  });
  setTextContent({ content: generatePackageConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with Express.js', () => {
  stateOptions.setState({
    ...options,
    express: true,
  });
  setTextContent({ content: generatePackageConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with Jest', () => {
  stateOptions.setState({
    ...options,
    jest: true,
  });
  setTextContent({ content: generatePackageConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with Next.js', () => {
  stateOptions.setState({
    ...options,
    next: true,
  });
  setTextContent({ content: generatePackageConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with React.js', () => {
  stateOptions.setState({
    ...options,
    react: true,
  });
  setTextContent({ content: generatePackageConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with Storybook', () => {
  stateOptions.setState({
    ...options,
    storybook: true,
  });
  setTextContent({ content: generatePackageConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with TypeScript', () => {
  stateOptions.setState({
    ...options,
    typescript: true,
  });
  setTextContent({ content: generatePackageConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with Webpack', () => {
  stateOptions.setState({
    ...options,
    webpack: true,
  });
  setTextContent({ content: generatePackageConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with Next.js, TypeScript and Storybook', () => {
  stateOptions.setState({
    ...options,
    next: true,
    typescript: true,
    storybook: true,
  });
  setTextContent({ content: generatePackageConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
