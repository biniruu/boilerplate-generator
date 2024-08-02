import generateNextConfig from '@generators/config/next'

import { elemCode, options, setTextContent } from '../../setTextContent.test'

test('should return a Next.js configuration', () => {
  setTextContent({ content: generateNextConfig(options) })

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should return a Next.js with TypeScript configuration', () => {
  options.typescript = true

  setTextContent({ content: generateNextConfig(options) })

  expect(elemCode?.textContent).toMatchSnapshot()
})
