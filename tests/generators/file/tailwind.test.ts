import getTailwindFile from '@generators/file/tailwind'

import { elemCode, setTextContent } from '../../setTextContent.test'

test('should return a tailwind.config.ts', () => {
  setTextContent({ content: getTailwindFile() })

  expect(elemCode?.textContent).toMatchSnapshot()
})
