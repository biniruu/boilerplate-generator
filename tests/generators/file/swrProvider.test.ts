import getSwrProviderFile from '@generators/file/swrProvider';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return a swrProvider.tsx file', () => {
  setTextContent({ content: getSwrProviderFile(options) });

  expect(elemCode?.textContent).toMatchSnapshot();
});
