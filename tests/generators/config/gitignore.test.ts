import generateGitIgnore from '@generators/config/gitignore';
import stateManager from '@store/state';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return a link to download a .gitignore file that includes configurations for Next.js and Storybook', () => {
  stateManager.setState({
    ...options,
    next: true,
    storybook: true,
  });
  setTextContent({ content: generateGitIgnore() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
