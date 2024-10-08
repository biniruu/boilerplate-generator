import generateTailwindConfig from '@generators/config/tailwind';
import { stateOptions } from '@store/state';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return a configuration for Tailwind CSS', () => {
  setTextContent({ content: generateTailwindConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a configuration for Tailwind CSS with TypeScript', () => {
  stateOptions.setState({
    ...options,
    typescript: true,
  });

  setTextContent({ content: generateTailwindConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
