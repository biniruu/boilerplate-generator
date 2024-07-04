import generateEslintConfig from '@generators/config/eslint'
import generateGitIgnore from '@generators/config/gitignore'
import generateJestConfigs from '@generators/config/jest'
import generateNextConfig from '@generators/config/next'
import generatePostcssConfig from '@generators/config/postcss'
import generatePrettierConfig from '@generators/config/prettier'
import generateStylelintConfig from '@generators/config/stylelint'
import generateTailwindConfig from '@generators/config/tailwind'
import generateWebpackConfig from '@generators/config/webpack'
import type { SelectOptions, Tab } from '_types'

const generateConfig = (tab: Tab, configOptions: SelectOptions) => {
  // TODO: Make sure that it uses dynamic import
  const config = {
    eslint: generateEslintConfig(configOptions),
    gitignore: generateGitIgnore(configOptions),
    jest: generateJestConfigs(configOptions).jestConfig,
    'jest-setup': generateJestConfigs(configOptions).jestSetup,
    prettier: generatePrettierConfig(configOptions),
    postcss: generatePostcssConfig(configOptions),
    stylelint: generateStylelintConfig(configOptions),
    next: generateNextConfig(configOptions),
    tailwind: generateTailwindConfig(configOptions),
    webpack: generateWebpackConfig(configOptions),
  }

  return config[tab as keyof typeof config]
}

export default generateConfig
