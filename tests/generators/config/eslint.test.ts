import generateEslintConfig from '@generators/config/eslint';
import stateManager from '@store/state';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

test('should generate an ESLint configuration for VanillaScript', () => {
  setTextContent({ generateConfig: generateEslintConfig });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should generate an ESLint configuration for TypeScript', () => {
  stateManager.setState({
    ...options,
    typescript: true,
  });

  setTextContent({ generateConfig: generateEslintConfig });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should generate an ESLint configuration for React.js with TypeScript', () => {
  stateManager.setState({
    ...options,
    react: true,
    typescript: true,
  });

  setTextContent({ generateConfig: generateEslintConfig });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should generate an ESLint configuration for React.js without TypeScript', () => {
  stateManager.setState({
    ...options,
    react: true,
  });

  setTextContent({ generateConfig: generateEslintConfig });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should generate an ESLint configuration for Next.js with TypeScript', () => {
  stateManager.setState({
    ...options,
    next: true,
    typescript: true,
  });

  setTextContent({ generateConfig: generateEslintConfig });

  expect(elemCode?.textContent).toMatchSnapshot();
});

test('should generate an ESLint configuration for Next.js without TypeScript', () => {
  stateManager.setState({
    ...options,
    next: true,
  });

  setTextContent({ generateConfig: generateEslintConfig });

  expect(elemCode?.textContent).toMatchSnapshot();
});
