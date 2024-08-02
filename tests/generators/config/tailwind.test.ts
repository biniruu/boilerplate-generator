import generateTailwindConfig from '@generators/config/tailwind'

import { elemCode, options, setTextContent } from '../../setTextContent.test'

test('should return a configuration for Tailwind CSS', () => {
  setTextContent({ content: generateTailwindConfig(options) })

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should return a configuration for Tailwind CSS with TypeScript', () => {
  options.typescript = true

  setTextContent({ content: generateTailwindConfig(options) })

  expect(elemCode?.textContent).toMatchSnapshot()
})
