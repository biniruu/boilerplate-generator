import generateReadme from '@generators/readme';
import { stateOptions } from '@store/state';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return a README.md file', () => {
  setTextContent({ content: generateReadme() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a README.md file for Next.js project', () => {
  stateOptions.setState({
    ...options,
    next: true,
  });
  setTextContent({ content: generateReadme() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a README.md file for Next.js project with TypeScript', () => {
  stateOptions.setState({
    ...options,
    next: true,
    typescript: true,
  });
  setTextContent({ content: generateReadme() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a README.md file for React.js project', () => {
  stateOptions.setState({
    ...options,
    react: true,
  });
  setTextContent({ content: generateReadme() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a README.md file for Nuxt.js project', () => {
  stateOptions.setState({
    ...options,
    nuxt: true,
  });
  setTextContent({ content: generateReadme() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a README.md file for Webpack project', () => {
  stateOptions.setState({
    ...options,
    webpack: true,
  });
  setTextContent({ content: generateReadme() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a README.md file for Nuxt.js project with Webpack', () => {
  stateOptions.setState({
    ...options,
    nuxt: true,
    webpack: true,
  });
  setTextContent({ content: generateReadme() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a README.md file for Gatsby.js project', () => {
  stateOptions.setState({
    ...options,
    gatsby: true,
  });
  setTextContent({ content: generateReadme() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
