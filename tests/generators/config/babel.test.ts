import generateBabelConfig from '@generators/config/babel';

import { elemCode, setTextContent } from '../../setTextContent.test';

test('should return a babel configuration', () => {
  setTextContent({ generateConfig: generateBabelConfig });

  expect(elemCode?.textContent).toMatchSnapshot();
});
