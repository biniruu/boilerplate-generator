import generateStylelintIgnoreConfig from '@generators/config/stylelintignore'
import { setHasJsLibs } from 'tests/configOptions.test'

import { elemCode, options, setTextContent } from './setTextContent.test'

test('should return a .stylelintignore file', () => {
  setTextContent({ content: generateStylelintIgnoreConfig(options) })

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should return a .stylelintignore file with Jest', () => {
  options.jest = true

  setTextContent({ content: generateStylelintIgnoreConfig(options) })

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should return a .stylelintignore file with Jest and TypeScript', () => {
  options.jest = true
  options.typescript = true

  setTextContent({ content: generateStylelintIgnoreConfig(options) })

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should return a .stylelintignore file with JavaScript Libraries', () => {
  options.jest = true
  setHasJsLibs(options)

  setTextContent({ content: generateStylelintIgnoreConfig(options) })

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should return a .stylelintignore file with JavaScript Libraries and TypeScript', () => {
  options.jest = true
  options.typescript = true
  setHasJsLibs(options)

  setTextContent({ content: generateStylelintIgnoreConfig(options) })

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should return a .stylelintignore file with TypeScript', () => {
  options.typescript = true

  setTextContent({ content: generateStylelintIgnoreConfig(options) })

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should return a .stylelintignore file with Wordpress', () => {
  options.wordpress = true

  setTextContent({ content: generateStylelintIgnoreConfig(options) })

  expect(elemCode?.textContent).toMatchSnapshot()
})
