import generateGitIgnore from '@generators/config/gitignore';
import { stateOptions } from '@store/state';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return a link to download a .gitignore file that includes configurations for Next.js and Storybook', () => {
  stateOptions.setState({
    ...options,
    next: true,
    storybook: true,
  });
  setTextContent({ content: generateGitIgnore() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
