import getLayoutFile from '@generators/file/layout';
import stateManager from '@store/state';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return a Layout.tsx file', () => {
  setTextContent({ content: getLayoutFile() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a Layout.tsx file including SWR', () => {
  stateManager.setState({
    ...options,
    swr: true,
  });
  setTextContent({ content: getLayoutFile() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a Layout.tsx file including Tanstack Query', () => {
  stateManager.setState({
    ...options,
    tanstackQuery: true,
  });
  setTextContent({ content: getLayoutFile() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
