import generateMarkdownlintConfig from '@generators/config/markdownlint';

import { elemCode, setTextContent } from '../../setTextContent.test';

test('should return a markdownlint file', () => {
  setTextContent({ generateConfig: generateMarkdownlintConfig });

  expect(elemCode?.textContent).toMatchSnapshot();
});
