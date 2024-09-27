import getCertainConditions from '@utils/certainConditions';

interface Rule {
  test: RegExp;
  type?: string;
  loader?: string;
  exclude?: string[];
  use?: string[];
}

/**
 * [rules]{@link https://webpack.js.org/loaders}
 */
const getRules = () => {
  const { hasPostcss, hasScss, hasTypescript } = getCertainConditions();

  const postcssLoader = hasPostcss ? ['postcss-loader'] : [];
  const rules: Rule[] = [
    // {
    //   test: /\.html$/i,
    //   type: 'asset/resource',
    // },
    {
      test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.css$/i,
      use: ['replace stylesHandler', 'css-loader', ...postcssLoader],
    },
  ];

  if (hasScss) {
    rules.push({
      test: /\.s[ac]ss$/i,
      use: ['replace stylesHandler', 'css-loader', ...postcssLoader, 'sass-loader'],
    });
  }
  if (hasTypescript) {
    rules.push({
      test: /\.(ts|tsx)$/i,
      loader: 'ts-loader',
      exclude: ['/node_modules/'],
    });
  }

  return rules;
};

export default getRules;
