import generateStylelintIgnoreConfig from '@generators/config/stylelintignore';
import stateManager from '@store/state';
import { setHasJsLibs } from 'tests/configOptions.test';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return a .stylelintignore file', () => {
  setTextContent({ content: generateStylelintIgnoreConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a .stylelintignore file with Jest', () => {
  stateManager.setState({
    ...options,
    jest: true,
  });
  setTextContent({ content: generateStylelintIgnoreConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a .stylelintignore file with Jest and TypeScript', () => {
  stateManager.setState({
    ...options,
    jest: true,
    typescript: true,
  });
  setTextContent({ content: generateStylelintIgnoreConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a .stylelintignore file with JavaScript Libraries', () => {
  stateManager.setState({
    ...options,
    jest: true,
  });
  setHasJsLibs(options);
  setTextContent({ content: generateStylelintIgnoreConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a .stylelintignore file with JavaScript Libraries and TypeScript', () => {
  stateManager.setState({
    ...options,
    jest: true,
    typescript: true,
  });
  setHasJsLibs(options);
  setTextContent({ content: generateStylelintIgnoreConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a .stylelintignore file with TypeScript', () => {
  stateManager.setState({
    ...options,
    typescript: true,
  });
  setTextContent({ content: generateStylelintIgnoreConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a .stylelintignore file with Wordpress', () => {
  stateManager.setState({
    ...options,
    wordpress: true,
  });
  setTextContent({ content: generateStylelintIgnoreConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
