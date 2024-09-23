import generatePugConfig from '@generators/config/pug';

import { elemCode, setTextContent } from '../../setTextContent.test';

test('should return a configuration for Pug', () => {
  setTextContent({ content: generatePugConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
