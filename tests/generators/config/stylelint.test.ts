import generateStylelintConfig from '@generators/config/stylelint';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return a stylelint configuration', () => {
  setTextContent({ generateConfig: generateStylelintConfig });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a stylelint configuration with PostCSS', () => {
  options.postcss = true;

  setTextContent({ generateConfig: generateStylelintConfig });

  expect(elemCode?.textContent).toMatchSnapshot();
});
