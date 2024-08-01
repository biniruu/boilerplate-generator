import getJestConfig from '@generators/config/jest/jest'

import { elemCode, options, setTextContent } from '../setTextContent.test'

describe('For jest.config.ts', () => {
  it('should return the configuration that has no selected options', () => {
    setTextContent(getJestConfig)

    expect(elemCode?.textContent).toMatchSnapshot()
  })

  it('should return the configuration with TypeScript', () => {
    options.typescript = true

    setTextContent(getJestConfig)

    expect(elemCode?.textContent).toMatchSnapshot()
  })

  it('should return the configuration with Lodash', () => {
    options.lodash = true

    setTextContent(getJestConfig)

    expect(elemCode?.textContent).toMatchSnapshot()
  })

  it('should return the configuration with Next.js', () => {
    options.next = true

    setTextContent(getJestConfig)

    expect(elemCode?.textContent).toMatchSnapshot()
  })

  it('should return the configuration with Next.js and TypeScript', () => {
    options.next = true
    options.typescript = true

    setTextContent(getJestConfig)

    expect(elemCode?.textContent).toMatchSnapshot()
  })

  it('should return the configuration with Vue.js', () => {
    options.next = true

    setTextContent(getJestConfig)

    expect(elemCode?.textContent).toMatchSnapshot()
  })

  it('should return the configuration with Jest HTML Reporters', () => {
    options.jestHtmlReporters = true

    setTextContent(getJestConfig)

    expect(elemCode?.textContent).toMatchSnapshot()
  })
})
