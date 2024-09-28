import generateStylelintIgnoreConfig from '@generators/config/stylelintignore';
import { stateOptions } from '@store/state';
import { setHasJsLibs } from 'tests/options.test';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return a .stylelintignore file', () => {
  setTextContent({ content: generateStylelintIgnoreConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a .stylelintignore file with Jest', () => {
  stateOptions.setState({
    ...options,
    jest: true,
  });
  setTextContent({ content: generateStylelintIgnoreConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a .stylelintignore file with Jest and TypeScript', () => {
  stateOptions.setState({
    ...options,
    jest: true,
    typescript: true,
  });
  setTextContent({ content: generateStylelintIgnoreConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a .stylelintignore file with JavaScript Libraries', () => {
  setHasJsLibs(options);
  setTextContent({ content: generateStylelintIgnoreConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a .stylelintignore file with JavaScript Libraries and TypeScript', () => {
  stateOptions.setState({
    ...options,
    typescript: true,
  });
  setHasJsLibs(options);
  setTextContent({ content: generateStylelintIgnoreConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a .stylelintignore file with TypeScript', () => {
  stateOptions.setState({
    ...options,
    typescript: true,
  });
  setTextContent({ content: generateStylelintIgnoreConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a .stylelintignore file with Wordpress', () => {
  stateOptions.setState({
    ...options,
    wordpress: true,
  });
  setTextContent({ content: generateStylelintIgnoreConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
