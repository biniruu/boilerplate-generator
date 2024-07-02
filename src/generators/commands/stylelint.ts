import type { SelectOptions } from '_types'

const getStylelintCommands = (configOptions: SelectOptions) => {
  const hasScss = configOptions.scss

  /**
   * stylelint
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
  const stylelintDevDependencies: string[] = ['stylelint', 'stylelint-config-standard', 'stylelint-order']

  if (hasScss) {
    stylelintDevDependencies.push('stylelint-config-standard-scss', 'stylelint-scss')
  }

  return {
    stylelintDevDependencies,
  }
}

export default getStylelintCommands
