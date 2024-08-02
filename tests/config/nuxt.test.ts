import generateNuxtConfig from '@generators/config/nuxt'

import { elemCode, setTextContent } from '../setTextContent.test'

test('should return a configuration for Nuxt.js', () => {
  setTextContent({ content: generateNuxtConfig() })

  expect(elemCode?.textContent).toMatchSnapshot()
})
