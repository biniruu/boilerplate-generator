import type { SelectOptions, Tab } from '_types'

import generateEslintConfig from './eslint'
import generateGitIgnore from './gitignore'
import generateJestConfigs from './jest'
import generateNextConfig from './next'
import generatePostcssConfig from './postcss'
import generatePrettierConfig from './prettier'
import generateStylelintConfig from './stylelint'
import generateTailwindConfig from './tailwind'
import generateTypescriptConfigs from './ts'
import generateViteConfig from './vite'
import generateWebpackConfig from './webpack'

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
    'ts-build': generateTypescriptConfigs(configOptions).tsBuild,
    'ts-default': generateTypescriptConfigs(configOptions).tsDefault,
    'ts-node': generateTypescriptConfigs(configOptions).tsNode,
    'ts-test': generateTypescriptConfigs(configOptions).tsTest,
    typescript: generateTypescriptConfigs(configOptions).tsConfig,
    vite: generateViteConfig(),
    webpack: generateWebpackConfig(configOptions),
  }

  return config[tab as keyof typeof config]
}

export default generateConfig
