import generatePostcssConfig from '@generators/config/postcss'

import { elemCode, options, setTextContent } from '../setTextContent.test'

test('should return a configuration for PostCSS', () => {
  setTextContent({ content: generatePostcssConfig(options) })

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should return a configuration for PostCSS with Tailwind CSS', () => {
  options.tailwind = true

  setTextContent({ content: generatePostcssConfig(options) })

  expect(elemCode?.textContent).toMatchSnapshot()
})
