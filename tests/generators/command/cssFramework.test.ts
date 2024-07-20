import getCssFrameworkCommands from '@generators/command/cssFramework'

import { configOptions } from './configOptions.test'

describe('CSS Framework', () => {
  test('should return empty values when all options are false', () => {
    const { cssFrameworkDependencies, cssFrameworkDevDependencies } = getCssFrameworkCommands(configOptions)

    expect(cssFrameworkDependencies).toBeEmpty()
    expect(cssFrameworkDevDependencies).toBeEmpty()
  })

  test('should generate commands for PostCSS with Gatsby.js', () => {
    configOptions.postcss = true
    configOptions.gatsby = true

    const { cssFrameworkDevDependencies } = getCssFrameworkCommands(configOptions)

    expect(cssFrameworkDevDependencies).toEqual(['postcss-html'])
  })
})
