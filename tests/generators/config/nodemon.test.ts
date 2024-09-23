import generateNodemonConfig from '@generators/config/nodemon';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return a nodemon configuration', () => {
  setTextContent({ content: generateNodemonConfig(options) });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a nodemon configuration for TypeScript', () => {
  options.typescript = true;

  setTextContent({ content: generateNodemonConfig(options) });

  expect(elemCode?.textContent).toMatchSnapshot();
});
