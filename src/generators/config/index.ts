import generateEslintConfig from '@generators/config/eslint'
import generateNextConfig from '@generators/config/next'
import generatePrettierConfig from '@generators/config/prettier'
import generateStylelintConfig from '@generators/config/stylelint'
import generateWebpackConfig from '@generators/config/webpack'
import type { SelectOptions, Tab } from '_types'

const generateConfig = (tab: Tab, configOptions: SelectOptions) => {
  // TODO: Make sure that it uses dynamic import
  const config = {
    eslint: generateEslintConfig(configOptions),
    prettier: generatePrettierConfig(configOptions),
    stylelint: generateStylelintConfig(configOptions),
    next: generateNextConfig(configOptions),
    webpack: generateWebpackConfig(configOptions),
  }

  return config[tab as keyof typeof config]
}

export default generateConfig
