import generateReadme from '@generators/readme';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return a README.md file', () => {
  setTextContent({ content: generateReadme(options) });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a README.md file for Next.js project', () => {
  options.next = true;

  setTextContent({ content: generateReadme(options) });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a README.md file for Next.js project with TypeScript', () => {
  options.next = true;
  options.typescript = true;

  setTextContent({ content: generateReadme(options) });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a README.md file for React.js project', () => {
  options.react = true;

  setTextContent({ content: generateReadme(options) });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a README.md file for Nuxt.js project', () => {
  options.nuxt = true;

  setTextContent({ content: generateReadme(options) });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a README.md file for Webpack project', () => {
  options.webpack = true;

  setTextContent({ content: generateReadme(options) });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a README.md file for Nuxt.js project with Webpack', () => {
  options.nuxt = true;
  options.webpack = true;

  setTextContent({ content: generateReadme(options) });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a README.md file for Gatsby.js project', () => {
  options.gatsby = true;

  setTextContent({ content: generateReadme(options) });

  expect(elemCode?.textContent).toMatchSnapshot();
});
