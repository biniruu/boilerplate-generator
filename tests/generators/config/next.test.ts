import generateNextConfig from '@generators/config/next';
import { stateOptions } from '@store/state';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should return a Next.js configuration', () => {
  setTextContent({ content: generateNextConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a Next.js configuration with Styled Components', () => {
  stateOptions.setState({
    ...options,
    styledComponents: true,
  });
  setTextContent({ content: generateNextConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a Next.js with TypeScript configuration', () => {
  stateOptions.setState({
    ...options,
    typescript: true,
  });
  setTextContent({ content: generateNextConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should return a Next.js configuration with Styled Components and TypeScript', () => {
  stateOptions.setState({
    ...options,
    styledComponents: true,
    typescript: true,
  });
  setTextContent({ content: generateNextConfig() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
