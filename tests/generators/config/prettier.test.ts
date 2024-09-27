import generatePrettierConfig from '@generators/config/prettier';
import stateManager from '@store/state';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return a configuration for Prettier', () => {
  setTextContent({ content: generatePrettierConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for Prettier with Tailwind CSS', () => {
  stateManager.setState({
    ...options,
    tailwind: true,
  });
  setTextContent({ content: generatePrettierConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for Prettier with Vue.js', () => {
  stateManager.setState({
    ...options,
    vue: true,
  });
  setTextContent({ content: generatePrettierConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for Prettier with Tailwind CSS and Vue.js', () => {
  stateManager.setState({
    ...options,
    tailwind: true,
    vue: true,
  });
  setTextContent({ content: generatePrettierConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
