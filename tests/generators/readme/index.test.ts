import generateReadme from '@generators/readme';
import stateManager from '@store/state';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return a README.md file', () => {
  setTextContent({ content: generateReadme() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a README.md file for Next.js project', () => {
  stateManager.setState({
    ...options,
    next: true,
  });
  setTextContent({ content: generateReadme() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a README.md file for Next.js project with TypeScript', () => {
  stateManager.setState({
    ...options,
    next: true,
    typescript: true,
  });
  setTextContent({ content: generateReadme() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a README.md file for React.js project', () => {
  stateManager.setState({
    ...options,
    react: true,
  });
  setTextContent({ content: generateReadme() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a README.md file for Nuxt.js project', () => {
  stateManager.setState({
    ...options,
    nuxt: true,
  });
  setTextContent({ content: generateReadme() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a README.md file for Webpack project', () => {
  stateManager.setState({
    ...options,
    webpack: true,
  });
  setTextContent({ content: generateReadme() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a README.md file for Nuxt.js project with Webpack', () => {
  stateManager.setState({
    ...options,
    nuxt: true,
    webpack: true,
  });
  setTextContent({ content: generateReadme() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a README.md file for Gatsby.js project', () => {
  stateManager.setState({
    ...options,
    gatsby: true,
  });
  setTextContent({ content: generateReadme() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
