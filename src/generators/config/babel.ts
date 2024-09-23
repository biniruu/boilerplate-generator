import convertToString from '@utils/convertToString';

const generateBabelConfig = () => {
  const config = {
    env: {
      test: {
        plugins: ['@babel/plugin-transform-modules-commonjs', '@babel/plugin-transform-runtime'],
      },
    },
    presets: ['@babel/preset-env'],
  };

  const result = convertToString(config);
  if (!result) {
    throw new Error('Babel config is not defined.');
  }

  return result;
};

export default generateBabelConfig;
