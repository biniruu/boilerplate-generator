import getJsRuntimeCommands from '@generators/command/jsRuntime'
import { configOptions } from 'tests/configOptions.test'

test('should return an empty array when all options are false', () => {
  const { jsRuntimeDevDependencies } = getJsRuntimeCommands(configOptions)

  expect(jsRuntimeDevDependencies).toBeEmpty()
})

test('should return dependencies for Node.js', () => {
  configOptions.typescript = true

  const { jsRuntimeDevDependencies } = getJsRuntimeCommands(configOptions)

  expect(jsRuntimeDevDependencies).toIncludeSameMembers(['@types/node', 'tsconfig-paths', 'ts-node', 'ts-node-dev'])
})

test('should return dependencies for Node.js with Next.js', () => {
  configOptions.typescript = true
  configOptions.next = true

  const { jsRuntimeDevDependencies } = getJsRuntimeCommands(configOptions)

  expect(jsRuntimeDevDependencies).toIncludeSameMembers(['@types/node', 'ts-node'])
})

test('should return dependencies for Node.js with React.js and Vite', () => {
  configOptions.typescript = true
  configOptions.react = true
  configOptions.vite = true

  const { jsRuntimeDevDependencies } = getJsRuntimeCommands(configOptions)

  expect(jsRuntimeDevDependencies).toIncludeSameMembers(['@types/node', 'ts-node', 'ts-node-dev'])
})

test('should return dependencies for Webpack', () => {
  configOptions.typescript = true
  configOptions.webpack = true

  const { jsRuntimeDevDependencies } = getJsRuntimeCommands(configOptions)

  expect(jsRuntimeDevDependencies).toIncludeSameMembers(['tsconfig-paths', 'ts-node', 'ts-node-dev'])
})
