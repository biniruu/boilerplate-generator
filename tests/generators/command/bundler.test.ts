import getBundlerCommands from '@generators/command/bundler'

import { configOptions } from './configOptions.test'

describe('Generate command for Bundler', () => {
  test('should generate command for vite', () => {
    configOptions.vite = true

    const { bundlerDependencies, bundlerDevDependencies } = getBundlerCommands(configOptions)

    expect(bundlerDependencies).toEqual(['vite'])
    expect(bundlerDevDependencies).toEqual(['vite-plugin-dts'])
  })

  test('should generate command for vite with TypeScript', () => {
    configOptions.vite = true
    configOptions.typescript = true

    const { bundlerDependencies, bundlerDevDependencies } = getBundlerCommands(configOptions)

    expect(bundlerDependencies).toEqual(['vite'])
    expect(bundlerDevDependencies).toEqual(['vite-tsconfig-paths', 'vite-plugin-dts'])
  })
})
