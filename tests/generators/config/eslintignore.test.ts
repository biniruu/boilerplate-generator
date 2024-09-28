import generateEslintIgnoreConfig from '@generators/config/eslintIgnore';
import { stateOptions } from '@store/state';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return .eslintignore', () => {
  setTextContent({ content: generateEslintIgnoreConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return an .eslintignore configuration for Storybook', () => {
  stateOptions.setState({
    ...options,
    storybook: true,
  });
  setTextContent({ content: generateEslintIgnoreConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return an .eslintignore configuration for TypeScript', () => {
  stateOptions.setState({
    ...options,
    typescript: true,
  });
  setTextContent({ content: generateEslintIgnoreConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return an .eslintignore configuration for Wordpress', () => {
  stateOptions.setState({
    ...options,
    wordpress: true,
  });
  setTextContent({ content: generateEslintIgnoreConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return an .eslintignore configuration for all options', () => {
  stateOptions.setState({
    ...options,
    typescript: true,
    storybook: true,
    wordpress: true,
  });
  setTextContent({ content: generateEslintIgnoreConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
