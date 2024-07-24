import getCompilerCommands from '@generators/command/compiler'
import { configOptions } from 'tests/configOptions.test'

describe('Compiler', () => {
  test('should return empty arrays when all options are false', () => {
    const { compilerDevDependencies } = getCompilerCommands(configOptions)

    expect(compilerDevDependencies).toBeEmpty()
  })

  const devDependenciesWithoutWordpress = [
    '@babel/node',
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-transform-runtime',
    '@babel/preset-env',
  ]

  test('should generate a command for Babel', () => {
    configOptions.babel = true

    const { compilerDevDependencies } = getCompilerCommands(configOptions)

    expect(compilerDevDependencies).toIncludeSameMembers(['@babel/core', ...devDependenciesWithoutWordpress])
  })

  test('should generate a command for Babel with Wordpress', () => {
    configOptions.babel = true
    configOptions.wordpress = true

    const { compilerDevDependencies } = getCompilerCommands(configOptions)

    expect(compilerDevDependencies).toIncludeSameMembers(['@babel/core'])
  })
})
