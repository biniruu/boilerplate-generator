import getTypeGuardFile from '@file/typeGuard'

import { elemCode, setTextContent } from '../../setTextContent.test'

test('should return a typeGuards.ts file', () => {
  setTextContent({ content: getTypeGuardFile() })

  expect(elemCode?.textContent).toMatchSnapshot()
})
