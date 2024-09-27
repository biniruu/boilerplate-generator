import generatePackageConfig from '@generators/config/package';
import stateManager from '@store/state';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return a configuration for package.json', () => {
  setTextContent({ content: generatePackageConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with Gatsby.js', () => {
  stateManager.setState({
    ...options,
    gatsby: true,
  });
  setTextContent({ content: generatePackageConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with Express.js', () => {
  stateManager.setState({
    ...options,
    express: true,
  });
  setTextContent({ content: generatePackageConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with Jest', () => {
  stateManager.setState({
    ...options,
    jest: true,
  });
  setTextContent({ content: generatePackageConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with Next.js', () => {
  stateManager.setState({
    ...options,
    next: true,
  });
  setTextContent({ content: generatePackageConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with React.js', () => {
  stateManager.setState({
    ...options,
    react: true,
  });
  setTextContent({ content: generatePackageConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with Storybook', () => {
  stateManager.setState({
    ...options,
    storybook: true,
  });
  setTextContent({ content: generatePackageConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with TypeScript', () => {
  stateManager.setState({
    ...options,
    typescript: true,
  });
  setTextContent({ content: generatePackageConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with Webpack', () => {
  stateManager.setState({
    ...options,
    webpack: true,
  });
  setTextContent({ content: generatePackageConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for package.json with Next.js, TypeScript and Storybook', () => {
  stateManager.setState({
    ...options,
    next: true,
    typescript: true,
    storybook: true,
  });
  setTextContent({ content: generatePackageConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
