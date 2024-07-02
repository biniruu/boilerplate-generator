import type { SelectOptions } from '_types'

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
    /**
     * Node.js
     *
     * tsconfig-paths
     * {@link https://github.com/dividab/tsconfig-paths#readme}
     *
     * ts-node
     * {@link https://typestrong.org/ts-node/}
     *
     * ts-node-dev
     * {@link https://github.com/wclr/ts-node-dev#readme}
     */
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
