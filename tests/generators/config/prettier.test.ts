import generatePrettierConfig from '@generators/config/prettier';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return a configuration for Prettier', () => {
  setTextContent({ content: generatePrettierConfig(options) });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for Prettier with Tailwind CSS', () => {
  options.tailwind = true;

  setTextContent({ content: generatePrettierConfig(options) });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for Prettier with Vue.js', () => {
  options.vue = true;

  setTextContent({ content: generatePrettierConfig(options) });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for Prettier with Tailwind CSS and Vue.js', () => {
  options.tailwind = true;
  options.vue = true;

  setTextContent({ content: generatePrettierConfig(options) });

  expect(elemCode?.textContent).toMatchSnapshot();
});
