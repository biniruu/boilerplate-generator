import generateNodemonConfig from '@generators/config/nodemon';
import { stateOptions } from '@store/state';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return a nodemon configuration', () => {
  setTextContent({ content: generateNodemonConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a nodemon configuration for TypeScript', () => {
  stateOptions.setState({
    ...options,
    typescript: true,
  });
  setTextContent({ content: generateNodemonConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
