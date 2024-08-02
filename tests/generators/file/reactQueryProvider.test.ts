import getReactQueryProviderFile from '@file/reactQueryProvider'

import { elemCode, options, setTextContent } from '../../setTextContent.test'

test('should return a reactQueryProvider.tsx file', () => {
  setTextContent({ content: getReactQueryProviderFile(options) })

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should return a reactQueryProvider.tsx file including Next.js', () => {
  options.next = true

  setTextContent({ content: getReactQueryProviderFile(options) })

  expect(elemCode?.textContent).toMatchSnapshot()
})
