import getJestConfig from '@generators/config/jest/jest'
import getJestSetup from '@generators/config/jest/jestSetup'

import { elemCode, options, setTextContent } from '../../setTextContent.test'

describe('For jest.config.ts', () => {
  it('should return the configuration that has no selected options', () => {
    setTextContent({ generateConfig: getJestConfig })

    expect(elemCode?.textContent).toMatchSnapshot()
  })

  it('should return the configuration with TypeScript', () => {
    options.typescript = true

    setTextContent({ generateConfig: getJestConfig })

    expect(elemCode?.textContent).toMatchSnapshot()
  })

  it('should return the configuration with Lodash', () => {
    options.lodash = true

    setTextContent({ generateConfig: getJestConfig })

    expect(elemCode?.textContent).toMatchSnapshot()
  })

  it('should return the configuration with Next.js', () => {
    options.next = true

    setTextContent({ generateConfig: getJestConfig })

    expect(elemCode?.textContent).toMatchSnapshot()
  })

  it('should return the configuration with Next.js and TypeScript', () => {
    options.next = true
    options.typescript = true

    setTextContent({ generateConfig: getJestConfig })

    expect(elemCode?.textContent).toMatchSnapshot()
  })

  it('should return the configuration with Vue.js', () => {
    options.next = true

    setTextContent({ generateConfig: getJestConfig })

    expect(elemCode?.textContent).toMatchSnapshot()
  })

  it('should return the configuration with Jest HTML Reporters', () => {
    options.jestHtmlReporters = true

    setTextContent({ generateConfig: getJestConfig })

    expect(elemCode?.textContent).toMatchSnapshot()
  })
})

test('should return the jest.setup.ts', () => {
  setTextContent({ content: getJestSetup() })

  expect(elemCode?.textContent).toMatchSnapshot()
})
