import type { SelectOptions } from '_types'

const getBundlerCommands = (configOptions: SelectOptions) => {
  const hasNext = configOptions.next
  const hasReact = configOptions.react
  const hasScss = configOptions.scss
  const hasThree = configOptions.three
  const hasTypescript = configOptions.typescript
  const hasVite = configOptions.vite
  const hasWebpack = configOptions.webpack

  const bundlerDependencies: string[] = []
  const bundlerDevDependencies: string[] = []

  /**
   * vite (Vite)
   * {@link https://vitejs.dev}
   *
   * vite-plugin-dts
   * {@link https://github.com/qmhc/vite-plugin-dts#readme}
   *
   * vite-tsconfig-paths
   * {@link https://github.com/aleclarson/vite-tsconfig-paths#readme}
   */
  if (hasVite) {
    if (!hasReact) {
      bundlerDependencies.push('vite')
    }
    if (hasTypescript) {
      bundlerDevDependencies.push('vite-tsconfig-paths')
    }
    bundlerDevDependencies.push('vite-plugin-dts')
  }
  /**
   * source-map-loader
   * {@link https://github.com/webpack-contrib/source-map-loader#source-map-loader}
   */
  if (hasWebpack) {
    if (!hasNext) {
      /**
       * ts-loader (TypeScript loader for webpack)
       * {@link https://github.com/TypeStrong/ts-loader#typescript-loader-for-webpack}
       */
      if (hasTypescript) {
        bundlerDevDependencies.push('@types/webpack', 'ts-loader')
      }
      /**
       * html-webpack-plugin
       * {@link https://github.com/jantimon/html-webpack-plugin#html-webpack-plugin}
       *
       * mini-css-extract-plugin
       * {@link https://github.com/webpack-contrib/mini-css-extract-plugin#mini-css-extract-plugin}
       *
       * workbox-webpack-plugin
       * {@link https://github.com/GoogleChrome/workbox#welcome-to-workbox}
       */
      if (!hasThree) {
        bundlerDevDependencies.push('html-webpack-plugin', 'mini-css-extract-plugin', 'workbox-webpack-plugin')
      }
      /**
       * sass-loader
       * {@link https://github.com/webpack-contrib/sass-loader#sass-loader}
       */
      if (hasScss) {
        bundlerDevDependencies.push('sass-loader')
      }
      /**
       * @swc/html
       * {@link https://swc.rs}
       *
       * style-loader
       * {@link https://github.com/webpack-contrib/style-loader#style-loader}
       *
       * webpack
       * {@link https://webpack.js.org}
       *
       * webpack-cli (webpack CLI)
       * {@link https://github.com/webpack/webpack-cli/tree/master/packages/webpack-cli#webpack-cli}
       * {@link https://webpack.js.org/api/cli/}
       *
       * webpack-dev-server
       * {@link https://github.com/webpack/webpack-dev-server#webpack-dev-server}
       * {@link https://webpack.js.org/configuration/dev-server/}
       *
       * webpack-merge - Merge designed for Webpack
       * {@link https://github.com/survivejs/webpack-merge#webpack-merge---merge-designed-for-webpack}
       */
      bundlerDevDependencies.push(
        '@swc/html',
        'source-map-loader',
        'style-loader',
        'webpack',
        'webpack-cli',
        'webpack-dev-server',
        'webpack-merge',
      )
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