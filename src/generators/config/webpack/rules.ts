import type { SelectOptions } from '_types'

interface Rule {
  test: RegExp
  type?: string
  loader?: string
  exclude?: string[]
  use?: string[]
}

/**
 * [rules]{@link https://webpack.js.org/loaders}
 */
const getRules = (configOptions: SelectOptions) => {
  const hasPostcss = configOptions.postcss
  const hasScss = configOptions.scss
  const hasTypescript = configOptions.typescript

  const postcssLoader = hasPostcss ? ['postcss-loader'] : []

  // rules: [
  //   {
  //     test: /\.(ts|tsx)$/i,
  //     loader: 'ts-loader',
  //     exclude: ['/node_modules/'],
  //   },
  //   {
  //     test: /\.css$/i,
  //     use: [stylesHandler, 'css-loader', 'postcss-loader'],
  //   },
  //   {
  //     test: /\.s[ac]ss$/i,
  //     use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
  //   },
  //   {
  //     test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
  //     type: 'asset',
  //   },
  // ]
  const rules: Rule[] = [
    {
      test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
      type: 'asset',
    },
    {
      test: /\.css$/i,
      use: ['replace stylesHandler', 'css-loader', ...postcssLoader],
    },
  ]

  if (hasScss) {
    rules.push({
      test: /\.s[ac]ss$/i,
      use: ['replace stylesHandler', 'css-loader', ...postcssLoader, 'sass-loader'],
    })
  }
  if (hasTypescript) {
    rules.push({
      test: /\.(ts|tsx)$/i,
      loader: 'ts-loader',
      exclude: ['/node_modules/'],
    })
  }

  return rules
}

export default getRules
