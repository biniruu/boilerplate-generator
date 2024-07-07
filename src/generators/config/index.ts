import configs from '@data/configs'
import type { ConfigTab, ObjConfigTab, SelectOptions } from '_types'

import generateBabelConfig from './babel'
import generateEslintConfig from './eslint'
import generateEslintIgnoreConfig from './eslintIgnore'
import generateGatsbyConfig from './gatsby'
import generateGitIgnore from './gitignore'
import generateJestConfigs from './jest'
import generateMarkdownConfig from './markdown'
import generateNextConfig from './next'
import generateNodemonConfig from './nodemon'
import generateNpmConfig from './npm'
import generateNuxtConfig from './nuxt'
import generatePackageConfig from './package'
import generatePostcssConfig from './postcss'
import generatePrettierConfig from './prettier'
import generatePugConfig from './pug'
import generateStylelintConfig from './stylelint'
import generateTailwindConfig from './tailwind'
import generateTypescriptConfigs from './ts'
import generateViteConfig from './vite'
import generateVolarConfig from './volar'
import generateWebpackConfig from './webpack'

const generateConfig = (tab: ConfigTab, configOptions: SelectOptions) => {
  // TODO: Make sure that it uses dynamic import
  const values = [
    generateBabelConfig(),
    generateEslintConfig(configOptions),
    generateEslintIgnoreConfig(configOptions),
    generateGatsbyConfig(),
    generateGitIgnore(configOptions),
    generateJestConfigs(configOptions).jestConfig,
    generateJestConfigs(configOptions).jestSetup,
    generatePrettierConfig(configOptions),
    generatePostcssConfig(configOptions),
    generatePugConfig(),
    generateStylelintConfig(configOptions),
    generateMarkdownConfig(),
    generateNextConfig(configOptions),
    generateNodemonConfig(configOptions),
    generateNpmConfig(),
    generateNuxtConfig(),
    generatePackageConfig(configOptions),
    generateTailwindConfig(configOptions),
    generateTypescriptConfigs(configOptions).tsBuild,
    generateTypescriptConfigs(configOptions).tsDefault,
    generateTypescriptConfigs(configOptions).tsNode,
    generateTypescriptConfigs(configOptions).tsTest,
    generateTypescriptConfigs(configOptions).tsConfig,
    generateViteConfig(),
    generateVolarConfig(),
    generateWebpackConfig(configOptions),
  ]
  const config = configs.reduce((acc, curr, idx) => {
    acc[curr] = values[idx]

    return acc
  }, {} as ObjConfigTab)
  // const config: Config = {
  //   babel: generateBabelConfig(),
  //   eslint: generateEslintConfig(configOptions),
  //   'eslint-ignore': generateEslintIgnoreConfig(configOptions),
  //   gatsby: generateGatsbyConfig(),
  //   gitignore: generateGitIgnore(configOptions),
  //   jest: generateJestConfigs(configOptions).jestConfig,
  //   'jest-setup': generateJestConfigs(configOptions).jestSetup,
  //   prettier: generatePrettierConfig(configOptions),
  //   postcss: generatePostcssConfig(configOptions),
  //   pug: generatePugConfig(),
  //   stylelint: generateStylelintConfig(configOptions),
  //   markdown: generateMarkdownConfig(),
  //   next: generateNextConfig(configOptions),
  //   nodemon: generateNodemonConfig(configOptions),
  //   npm: generateNpmConfig(),
  //   nuxt: generateNuxtConfig(),
  //   package: generatePackageConfig(configOptions),
  //   tailwind: generateTailwindConfig(configOptions),
  //   'ts-build': generateTypescriptConfigs(configOptions).tsBuild,
  //   'ts-default': generateTypescriptConfigs(configOptions).tsDefault,
  //   'ts-node': generateTypescriptConfigs(configOptions).tsNode,
  //   'ts-test': generateTypescriptConfigs(configOptions).tsTest,
  //   typescript: generateTypescriptConfigs(configOptions).tsConfig,
  //   vite: generateViteConfig(),
  //   volar: generateVolarConfig(),
  //   webpack: generateWebpackConfig(configOptions),
  // }

  return config[tab]
}

export default generateConfig
