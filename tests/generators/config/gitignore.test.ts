import generateGitIgnore from '@generators/config/gitignore';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return a link to download a .gitignore file that includes configurations for Next.js and Storybook', () => {
  options.next = true;
  options.storybook = true;

  setTextContent({ content: generateGitIgnore(options) });

  expect(elemCode?.textContent).toMatchSnapshot();
});
