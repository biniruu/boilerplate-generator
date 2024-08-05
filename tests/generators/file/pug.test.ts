import getPugFile from '@generators/file/pug'

import { elemCode, setTextContent } from '../../setTextContent.test'

test('should return a home.pug file', () => {
  setTextContent({ content: getPugFile() })

  expect(elemCode?.textContent).toMatchSnapshot()
})
