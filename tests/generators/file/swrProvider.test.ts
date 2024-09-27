import getSwrProviderFile from '@generators/file/swrProvider';

import { elemCode, setTextContent } from '../../setTextContent.test';

test('should return a swrProvider.tsx file', () => {
  setTextContent({ content: getSwrProviderFile() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
