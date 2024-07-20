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

  const devDependenciesWithoutGatsby = [
    'cssnano',
    'postcss-flexbugs-fixes',
    'postcss-hexrgba',
    'postcss-html',
    'postcss-loader',
    'postcss-normalize',
    'postcss-preset-env',
    'postcss-syntax',
  ]

  test('should generate commands for PostCSS without Gatsby.js and JavaScript Libraries', () => {
    configOptions.postcss = true

    const { cssFrameworkDevDependencies } = getCssFrameworkCommands(configOptions)

    expect(cssFrameworkDevDependencies).toIncludeSameMembers(['postcss', ...devDependenciesWithoutGatsby])
  })
})
