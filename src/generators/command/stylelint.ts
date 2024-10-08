import getCertainConditions from '@utils/certainConditions';

const getStylelintCommands = () => {
  const { hasScss, hasStylelint } = getCertainConditions();

  const stylelintDevDependencies: string[] = [];

  /**
   * stylelint (Stylelint)
   * {@link https://stylelint.io}
   *
   * stylelint-config-standard
   * {@link https://github.com/stylelint/stylelint-config-standard#readme}
   *
   * stylelint-order
   * {@link https://github.com/hudochenkov/stylelint-order#readme}
   *
   * stylelint-config-standard-scss
   * {@link https://github.com/stylelint-scss/stylelint-config-standard-scss#readme}
   *
   * stylelint-scss
   * {@link https://github.com/stylelint-scss/stylelint-scss#readme}
   */
  if (hasStylelint) {
    stylelintDevDependencies.push('stylelint', 'stylelint-config-standard', 'stylelint-order');
    hasScss && stylelintDevDependencies.push('stylelint-config-standard-scss', 'stylelint-scss');
  }

  return {
    stylelintDevDependencies,
  };
};

export default getStylelintCommands;
