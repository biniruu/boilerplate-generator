import getCompilerCommands from '@generators/command/compiler'
import { configOptions } from 'tests/configOptions.test'

test('should return an empty array when all options are false', () => {
  const { compilerDevDependencies } = getCompilerCommands(configOptions)

  expect(compilerDevDependencies).toBeEmpty()
})

const devDependenciesWithoutWordpress = [
  '@babel/node',
  '@babel/plugin-transform-modules-commonjs',
  '@babel/plugin-transform-runtime',
  '@babel/preset-env',
]

test('should return dependencies for Babel', () => {
  configOptions.babel = true

  const { compilerDevDependencies } = getCompilerCommands(configOptions)

  expect(compilerDevDependencies).toIncludeSameMembers(['@babel/core', ...devDependenciesWithoutWordpress])
})

test('should return dependencies for Babel with Wordpress', () => {
  configOptions.babel = true
  configOptions.wordpress = true

  const { compilerDevDependencies } = getCompilerCommands(configOptions)

  expect(compilerDevDependencies).toIncludeSameMembers(['@babel/core'])
})
