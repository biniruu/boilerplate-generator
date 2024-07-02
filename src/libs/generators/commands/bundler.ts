import { SelectOptions } from '_types'

const getBundlerCommands = (configOptions: SelectOptions) => {
  const hasNext = configOptions.next
  const hasScss = configOptions.scss
  const hasThree = configOptions.three
  const hasTypescript = configOptions.typescript
  const hasVite = configOptions.vite
  const hasWebpack = configOptions.webpack

  const bundlerDependencies: string[] = []
  const bundlerDevDependencies: string[] = []

  if (hasVite) {
    bundlerDevDependencies.push('vite-plugin-dts', 'vite-tsconfig-paths')
  }
  if (hasWebpack) {
    if (!hasNext) {
      if (hasTypescript) {
        bundlerDevDependencies.push('@types/webpack ts-loader')
      }
      if (!hasThree) {
        bundlerDevDependencies.push('html-webpack-plugin mini-css-extract-plugin workbox-webpack-plugin')
      }
      if (hasScss) {
        bundlerDevDependencies.push('sass-loader')
      }
      bundlerDevDependencies.push('source-map-loader style-loader webpack webpack-cli webpack-dev-server webpack-merge')
    }
    if (hasNext) {
      bundlerDevDependencies.push('source-map-loader')
    }
  }

  return {
    bundlerDependencies,
    bundlerDevDependencies,
  }
}

export default getBundlerCommands
