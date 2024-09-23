import generateNpmConfig from '@generators/config/npm';

import { elemCode, setTextContent } from '../../setTextContent.test';

test('should return a configuration for npm', () => {
  setTextContent({ content: generateNpmConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
