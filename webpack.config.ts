/**
 * Generated using webpack-cli
 * {@link https://github.com/webpack/webpack-cli}
 */

import path from 'path'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type { Configuration as WebpackConfiguration } from 'webpack'
import { SourceMapDevToolPlugin } from 'webpack'
import type { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
import WorkboxWebpackPlugin from 'workbox-webpack-plugin'

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration
}

const isProduction = process.env.NODE_ENV === 'production'
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader'

const config: Configuration = {
  devServer: {
    // allowedHosts: [],
    compress: true,
    open: true,
    host: 'localhost',
    port: 8000,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    watchFiles: ['src/**/*.ts', 'public/*.html'],
  },
  entry: './src/index.ts',
  mode: isProduction ? 'production' : 'development',
  /**
   * [rules]{@link https://webpack.js.org/loaders}
   */
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
      // }, // sass (scss)
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  /**
   * [plugins]{@link https://webpack.js.org/configuration/plugins}
   */
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new SourceMapDevToolPlugin({}),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
}

const result = () => {
  if (isProduction) {
    config.plugins?.push(new MiniCssExtractPlugin())
    config.plugins?.push(new WorkboxWebpackPlugin.GenerateSW())
  }

  return config
}

export default result
