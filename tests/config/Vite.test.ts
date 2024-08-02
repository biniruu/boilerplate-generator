import generateViteConfig from '@generators/config/vite'

import { elemCode, setTextContent } from './setTextContent.test'

test('should return a configuration for Vite', () => {
  setTextContent({ content: generateViteConfig() })

  expect(elemCode?.textContent).toMatchSnapshot()
})
