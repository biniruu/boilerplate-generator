import getSocketFile from '@generators/file/socket'

import { elemCode, setTextContent } from '../../setTextContent.test'

test('should return a socket.d.ts file', () => {
  setTextContent({ content: getSocketFile() })

  expect(elemCode?.textContent).toMatchSnapshot()
})
