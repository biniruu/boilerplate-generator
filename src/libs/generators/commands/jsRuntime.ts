import { SelectOptions } from '_types'

const getJsRuntimeCommands = (configOptions: SelectOptions) => {
  const hasGatsby = configOptions.gatsby
  const hasNext = configOptions.next
  const hasNuxt = configOptions.nuxt
  const hasReact = configOptions.react
  const hasTypescript = configOptions.typescript
  const hasWebpack = configOptions.webpack
  const hasVite = configOptions.vite

  const jsRuntimeDevDependencies: string[] = []

  if (hasTypescript) {
    // Node.js
    if (!hasGatsby || !hasNext || !hasReact || !hasWebpack || !hasNuxt) {
      jsRuntimeDevDependencies.push('@types/node', 'tsconfig-paths', 'ts-node', 'ts-node-dev')
    }
    if (hasNext) {
      jsRuntimeDevDependencies.push('@types/node', 'ts-node')
    }
    if (hasReact && hasVite) {
      jsRuntimeDevDependencies.push('@types/node', 'ts-node', 'ts-node-dev')
    }
    if (hasWebpack) {
      jsRuntimeDevDependencies.push('tsconfig-paths', 'ts-node', 'ts-node-dev')
    }
  }

  return {
    jsRuntimeDevDependencies,
  }
}

export default getJsRuntimeCommands
