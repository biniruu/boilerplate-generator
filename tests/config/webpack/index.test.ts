import generateWebpackConfig from '@generators/config/webpack'

import { elemCode, options, setTextContent } from '../setTextContent.test'

test('should return a Webpack configuration', () => {
  setTextContent({ content: generateWebpackConfig(options) })

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should return a Webpack configuration with TypeScript', () => {
  options.typescript = true

  setTextContent({ content: generateWebpackConfig(options) })

  expect(elemCode?.textContent).toMatchSnapshot()
})
