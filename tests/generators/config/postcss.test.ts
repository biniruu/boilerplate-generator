import generatePostcssConfig from '@generators/config/postcss';
import { stateOptions } from '@store/state';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return a configuration for PostCSS', () => {
  setTextContent({ content: generatePostcssConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for PostCSS with Tailwind CSS', () => {
  stateOptions.setState({
    ...options,
    tailwind: true,
  });

  setTextContent({ content: generatePostcssConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
