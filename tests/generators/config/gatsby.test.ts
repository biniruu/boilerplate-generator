import generateGatsbyConfig from '@generators/config/gatsby';

import { elemCode, setTextContent } from '../../setTextContent.test';

test('should return a gatsby configuration', () => {
  setTextContent({ content: generateGatsbyConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
