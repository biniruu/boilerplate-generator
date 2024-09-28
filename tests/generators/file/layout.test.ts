import getLayoutFile from '@generators/file/layout';
import { stateOptions } from '@store/state';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return a Layout.tsx file', () => {
  setTextContent({ content: getLayoutFile() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a Layout.tsx file including SWR', () => {
  stateOptions.setState({
    ...options,
    swr: true,
  });
  setTextContent({ content: getLayoutFile() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a Layout.tsx file including Tanstack Query', () => {
  stateOptions.setState({
    ...options,
    tanstackQuery: true,
  });
  setTextContent({ content: getLayoutFile() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
