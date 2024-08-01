import generateEslintConfig from '@generators/config/eslint'

import { elemCode, options, setTextContent } from './setTextContent.test'

test('should generate an ESLint configuration for VanillaScript', () => {
  setTextContent({ generateConfig: generateEslintConfig })

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should generate an ESLint configuration for TypeScript', () => {
  options.typescript = true

  setTextContent({ generateConfig: generateEslintConfig })

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should generate an ESLint configuration for React.js with TypeScript', () => {
  options.react = true
  options.typescript = true

  setTextContent({ generateConfig: generateEslintConfig })

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should generate an ESLint configuration for React.js without TypeScript', () => {
  options.react = true

  setTextContent({ generateConfig: generateEslintConfig })

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should generate an ESLint configuration for Next.js with TypeScript', () => {
  options.next = true
  options.typescript = true

  setTextContent({ generateConfig: generateEslintConfig })

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should generate an ESLint configuration for Next.js without TypeScript', () => {
  options.next = true

  setTextContent({ generateConfig: generateEslintConfig })

  expect(elemCode?.textContent).toMatchSnapshot()
})
