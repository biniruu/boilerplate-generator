import generateVolarConfig from '@generators/config/volar';

import { elemCode, setTextContent } from '../../setTextContent.test';

test('should return a configuration for Volar', () => {
  setTextContent({ content: generateVolarConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
