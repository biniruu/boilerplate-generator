import generatePrettierIgnoreConfig from '@generators/config/prettierignore'

import { elemCode, setTextContent } from '../../setTextContent.test'

test('should return a .prettierignore file', () => {
  setTextContent({ content: generatePrettierIgnoreConfig() })

  expect(elemCode?.textContent).toMatchSnapshot()
})
