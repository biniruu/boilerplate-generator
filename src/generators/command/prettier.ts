import getCertainConditions from '@utils/certainConditions';

const getPrettierCommands = () => {
  const { hasPrettier, hasPug, hasTailwind } = getCertainConditions();

  const prettierDevDependencies: string[] = [];

  /**
   * prettier
   * {@link https://prettier.io}
   *
   * @prettier/plugin-pug (Prettier Pug plugin)
   * {@link https://github.com/prettier/plugin-pug#readme}
   *
   * prettier-plugin-tailwindcss
   * {@link https://github.com/tailwindlabs/prettier-plugin-tailwindcss#readme}
   */
  if (hasPrettier) {
    prettierDevDependencies.push('prettier');
    hasPug && prettierDevDependencies.push('@prettier/plugin-pug');
    hasTailwind && prettierDevDependencies.push('prettier-plugin-tailwindcss');
  }

  return {
    prettierDevDependencies,
  };
};

export default getPrettierCommands;
