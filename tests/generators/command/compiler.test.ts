import getCompilerCommands from '@generators/command/compiler'

import { configOptions } from './configOptions.test'

describe('Compiler', () => {
  test('should return empty arrays when all options are false', () => {
    const { compilerDependencies, compilerDevDependencies } = getCompilerCommands(configOptions)

    expect(compilerDependencies).toBeEmpty()
    expect(compilerDevDependencies).toBeEmpty()
  })
})
