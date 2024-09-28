import generatePrettierConfig from '@generators/config/prettier';
import { stateOptions } from '@store/state';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return a configuration for Prettier', () => {
  setTextContent({ content: generatePrettierConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for Prettier with Tailwind CSS', () => {
  stateOptions.setState({
    ...options,
    tailwind: true,
  });
  setTextContent({ content: generatePrettierConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for Prettier with Vue.js', () => {
  stateOptions.setState({
    ...options,
    vue: true,
  });
  setTextContent({ content: generatePrettierConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for Prettier with Tailwind CSS and Vue.js', () => {
  stateOptions.setState({
    ...options,
    tailwind: true,
    vue: true,
  });
  setTextContent({ content: generatePrettierConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
