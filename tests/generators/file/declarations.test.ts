import getDeclarationsFile from '@generators/file/declarations'

import { elemCode, setTextContent } from '../../setTextContent.test'

test('should return a declarations.d.ts file', () => {
  setTextContent({ content: getDeclarationsFile() })

  expect(elemCode?.textContent).toMatchSnapshot()
})
