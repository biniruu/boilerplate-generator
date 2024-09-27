import generateEslintIgnoreConfig from '@generators/config/eslintIgnore';
import stateManager from '@store/state';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return .eslintignore', () => {
  setTextContent({ content: generateEslintIgnoreConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return an .eslintignore configuration for Storybook', () => {
  stateManager.setState({
    ...options,
    storybook: true,
  });
  setTextContent({ content: generateEslintIgnoreConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return an .eslintignore configuration for TypeScript', () => {
  stateManager.setState({
    ...options,
    typescript: true,
  });
  setTextContent({ content: generateEslintIgnoreConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return an .eslintignore configuration for Wordpress', () => {
  stateManager.setState({
    ...options,
    wordpress: true,
  });
  setTextContent({ content: generateEslintIgnoreConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return an .eslintignore configuration for all options', () => {
  stateManager.setState({
    ...options,
    typescript: true,
    storybook: true,
    wordpress: true,
  });
  setTextContent({ content: generateEslintIgnoreConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
