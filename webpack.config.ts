/**
 * Generated using webpack-cli
 * {@link https://github.com/webpack/webpack-cli}
 */

import path from 'path';

// eslint-disable-next-line import/default
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlMinimizerPlugin from 'html-minimizer-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import type { Configuration as WebpackConfiguration } from 'webpack';
import { SourceMapDevToolPlugin } from 'webpack';
import type { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import WorkboxWebpackPlugin from 'workbox-webpack-plugin';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const isProduction = process.env.NODE_ENV === 'production';
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

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
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new HtmlMinimizerPlugin({
        minify: HtmlMinimizerPlugin.swcMinify,
        minimizerOptions: {},
      }),
      new TerserPlugin(),
    ],
    mergeDuplicateChunks: true,
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
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'dist'),
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@data': path.resolve(__dirname, 'src/data'),
      '@generators': path.resolve(__dirname, 'src/generators'),
      '@libs': path.resolve(__dirname, 'src/libs'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      _types: path.resolve(__dirname, 'src/types'),
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
};

const result = () => {
  if (!config.plugins) {
    throw new Error('config.plugins is not defined.');
  }
  if (isProduction) {
    config.plugins.push(new MiniCssExtractPlugin(), new WorkboxWebpackPlugin.GenerateSW());
  }
  if (!isProduction) {
    config.plugins.push(new SourceMapDevToolPlugin({}));
  }

  return config;
};

export default result;
