import getLayoutFile from '@file/layout'

import { elemCode, options, setTextContent } from '../../setTextContent.test'

test('should return a Layout.tsx file', () => {
  setTextContent({ content: getLayoutFile(options) })

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should return a Layout.tsx file including SWR', () => {
  options.swr = true

  setTextContent({ content: getLayoutFile(options) })

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should return a Layout.tsx file including Tanstack Query', () => {
  options.tanstackQuery = true

  setTextContent({ content: getLayoutFile(options) })

  expect(elemCode?.textContent).toMatchSnapshot()
})
