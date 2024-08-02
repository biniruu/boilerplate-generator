import generateEslintIgnoreConfig from '@generators/config/eslintIgnore'

import { elemCode, options, setTextContent } from '../setTextContent.test'

test('should return .eslintignore', () => {
  setTextContent({ content: generateEslintIgnoreConfig(options) })

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should return an .eslintignore configuration for Storybook', () => {
  options.storybook = true

  setTextContent({ content: generateEslintIgnoreConfig(options) })

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should return an .eslintignore configuration for TypeScript', () => {
  options.typescript = true

  setTextContent({ content: generateEslintIgnoreConfig(options) })

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should return an .eslintignore configuration for Wordpress', () => {
  options.wordpress = true

  setTextContent({ content: generateEslintIgnoreConfig(options) })

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should return an .eslintignore configuration for all options', () => {
  options.typescript = true
  options.storybook = true
  options.wordpress = true

  setTextContent({ content: generateEslintIgnoreConfig(options) })

  expect(elemCode?.textContent).toMatchSnapshot()
})
