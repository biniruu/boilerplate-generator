import getReactQueryProviderFile from '@generators/file/reactQueryProvider';
import { stateOptions } from '@store/state';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return a reactQueryProvider.tsx file', () => {
  setTextContent({ content: getReactQueryProviderFile() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a reactQueryProvider.tsx file including Next.js', () => {
  stateOptions.setState({
    ...options,
    next: true,
  });
  setTextContent({ content: getReactQueryProviderFile() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
