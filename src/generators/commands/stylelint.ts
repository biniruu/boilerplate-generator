import type { SelectOptions } from '_types'

const getStylelintCommands = (configOptions: SelectOptions) => {
  const hasScss = configOptions.scss

  const stylelintDevDependencies: string[] = ['stylelint', 'stylelint-config-standard', 'stylelint-order']

  if (hasScss) {
    stylelintDevDependencies.push('stylelint-config-standard-scss', 'stylelint-scss')
  }

  return {
    stylelintDevDependencies,
  }
}

export default getStylelintCommands
