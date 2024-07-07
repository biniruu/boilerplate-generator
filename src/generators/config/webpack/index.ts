import getExtension from '@generators/config/webpack/extension'
import getRules from '@generators/config/webpack/rules'
import getCertainConditions from '@utils/certainConditions'
import convertToString from '@utils/convertToString'
import type { SelectOptions } from '_types'

const generateWebpackConfig = (configOptions: SelectOptions) => {
  const extension = getExtension(configOptions)
  const rules = getRules(configOptions)
  const { hasTypescript } = getCertainConditions(configOptions)
  const tsExtensions = hasTypescript ? ['.tsx', '.ts'] : []

  const config = {
    devServer: {
      // allowedHosts: [],
      compress: true,
      open: true,
      host: 'localhost',
      port: 8000,
      static: {
        /**
         * @example
         *
         * ```js
         * directory: path.join(__dirname, 'public'),
         * ```
         */
        directory: 'replace directory',
      },
      watchFiles: [`src/**/*.${extension}`, 'public/*.html'],
    },
    entry: `./src/index.${extension}`,
    /**
     * @example
     *
     * ```js
     * mode: isProduction ? 'production' : 'development',
     * ```
     */
    mode: 'replace mode',
    module: {
      rules,
    },
    optimization: {
      minimize: true,
      /**
       * @example
       *
       * ```js
       * minimizer: [
       *  new HtmlMinimizerPlugin({
       *    minify: HtmlMinimizerPlugin.swcMinify,
       *    minimizerOptions: {},
       *  }),
       *  new TerserPlugin(),
       *],
       * ```
       */
      minimizer: ['replace HtmlMinimizerPlugin', 'replace TerserPlugin'],
      mergeDuplicateChunks: true,
    },
    output: {
      filename: 'index.js',
      /**
       * @example
       *
       * ```js
       * path: path.resolve(__dirname, 'dist'),
       * ```
       */
      path: 'replace output path',
    },
    /**
     * [plugins]{@link https://webpack.js.org/configuration/plugins}
     *
     * @example
     *
     * ```js
     * plugins: [
     *   new HtmlWebpackPlugin({
     *     template: './public/index.html',
     *   }),
     * ],
     * ```
     */
    plugins: ['replace HtmlWebpackPlugin'],
    resolve: {
      alias: {
        /**
         * @example
         *
         * ```js
         * '@': path.resolve(__dirname, 'src'),
         * ```
         */
        '@': 'replace alias src',
      },
      extensions: ['.jsx', '.js', ...tsExtensions],
    },
  }

  const code = `import path from 'path'
  
import HtmlMinimizerPlugin from 'html-minimizer-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import type { Configuration as WebpackConfiguration } from 'webpack'
import { SourceMapDevToolPlugin } from 'webpack'
import type { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
import WorkboxWebpackPlugin from 'workbox-webpack-plugin'

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration
}

const isProduction = process.env.NODE_ENV === 'production'
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader'

const config: Configuration = ${convertToString(config)}

const result = () => {
  if (!config.plugins) {
    throw new Error('config.plugins is not defined.')
  }
  if (isProduction) {
    config.plugins.push(new MiniCssExtractPlugin(), new WorkboxWebpackPlugin.GenerateSW())
  }
  if (!isProduction) {
    config.plugins.push(new SourceMapDevToolPlugin({}))
  }

  return config
}

export default result`

  const result = code
    .replace(`'replace mode'`, `isProduction ? 'production' : 'development'`)
    .replace(`'replace directory'`, `path.join(__dirname, 'public')`)
    .replace(`'replace stylesHandler'`, `stylesHandler`)
    .replace(
      `'replace HtmlMinimizerPlugin'`,
      `new HtmlMinimizerPlugin({
        minify: HtmlMinimizerPlugin.swcMinify,
        minimizerOptions: {},
      })`,
    )
    .replace(`'replace TerserPlugin'`, `new TerserPlugin()`)
    .replace(`'replace output path'`, `path.resolve(__dirname, 'dist')`)
    .replace(
      `'replace HtmlWebpackPlugin'`,
      `new HtmlWebpackPlugin({
      template: './public/index.html',
    })`,
    )
    .replace(`'replace alias src'`, `path.resolve(__dirname, 'src')`)

  return result
}

export default generateWebpackConfig
