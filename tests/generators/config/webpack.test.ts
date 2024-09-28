import generateWebpackConfig from '@generators/config/webpack';
import { stateOptions } from '@store/state';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return a Webpack configuration', () => {
  setTextContent({ content: generateWebpackConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a Webpack configuration with TypeScript', () => {
  stateOptions.setState({
    ...options,
    typescript: true,
  });

  setTextContent({ content: generateWebpackConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
