import getTsBuild from '@generators/config/ts/tsBuild';
import getTsConfig from '@generators/config/ts/tsConfig';
import getTsDefault from '@generators/config/ts/tsDefault';
import getTsNode from '@generators/config/ts/tsNode';
import getTsTest from '@generators/config/ts/tsTest';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return tsconfig.build.json', () => {
  setTextContent({ generateConfig: getTsBuild });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return tsconfig.test.json', () => {
  setTextContent({ generateConfig: getTsTest });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return tsconfig.default.json', () => {
  setTextContent({ generateConfig: getTsDefault });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return tsconfig.json', () => {
  setTextContent({ generateConfig: getTsDefault });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return tsconfig.json when React.js is selected', () => {
  options.react = true;

  setTextContent({ generateConfig: getTsConfig });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return tsconfig.node.json', () => {
  setTextContent({ content: getTsNode() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
