import getJsRuntimeCommands from '@generators/command/jsRuntime'
import { configOptions } from 'tests/configOptions.test'

describe('JavaScript Runtime', () => {
  test('should return an empty value when all options are false', () => {
    const { jsRuntimeDevDependencies } = getJsRuntimeCommands(configOptions)

    expect(jsRuntimeDevDependencies).toBeEmpty()
  })

  test('should generate a command for Node.js', () => {
    configOptions.typescript = true

    const { jsRuntimeDevDependencies } = getJsRuntimeCommands(configOptions)

    expect(jsRuntimeDevDependencies).toIncludeSameMembers(['@types/node', 'tsconfig-paths', 'ts-node', 'ts-node-dev'])
  })

  test('should generate a command for Node.js with Next.js', () => {
    configOptions.typescript = true
    configOptions.next = true

    const { jsRuntimeDevDependencies } = getJsRuntimeCommands(configOptions)

    expect(jsRuntimeDevDependencies).toIncludeSameMembers(['@types/node', 'ts-node'])
  })

  test('should generate a command for Node.js with React.js and Vite', () => {
    configOptions.typescript = true
    configOptions.react = true
    configOptions.vite = true

    const { jsRuntimeDevDependencies } = getJsRuntimeCommands(configOptions)

    expect(jsRuntimeDevDependencies).toIncludeSameMembers(['@types/node', 'ts-node', 'ts-node-dev'])
  })
})
