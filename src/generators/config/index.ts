import configs from '@data/configs'
import { objOptions } from '@data/options'
import type { ConfigTab, ObjConfigTab } from '_types'

import generateBabelConfig from './babel'
import generateEslintConfig from './eslint'
import generateEslintIgnoreConfig from './eslintIgnore'
import generateGatsbyConfig from './gatsby'
import generateGitIgnore from './gitignore'
import generateJestConfigs from './jest'
import generateMarkdownlintConfig from './markdownlint'
import generateNextConfig from './next'
import generateNodemonConfig from './nodemon'
import generateNpmConfig from './npm'
import generateNuxtConfig from './nuxt'
import generatePackageConfig from './package'
import generatePostcssConfig from './postcss'
import generatePrettierConfig from './prettier'
import generatePrettierIgnoreConfig from './prettierignore'
import generatePugConfig from './pug'
import generateStylelintConfig from './stylelint'
import generateStylelintIgnoreConfig from './stylelintignore'
import generateTailwindConfig from './tailwind'
import generateTypescriptConfigs from './ts'
import generateViteConfig from './vite'
import generateVolarConfig from './volar'
import generateWebpackConfig from './webpack'

const generateConfig = (tab: ConfigTab) => {
  const values = [
    generateBabelConfig(),
    generateEslintConfig(objOptions),
    generateEslintIgnoreConfig(objOptions),
    generateGatsbyConfig(),
    generateGitIgnore(objOptions),
    generateJestConfigs(objOptions).jestConfig,
    generateJestConfigs(objOptions).jestSetup,
    generatePrettierConfig(objOptions),
    generatePostcssConfig(objOptions),
    generatePugConfig(),
    generateStylelintConfig(objOptions),
    generateMarkdownlintConfig(),
    generateNextConfig(objOptions),
    generateNodemonConfig(objOptions),
    generateNpmConfig(),
    generateNuxtConfig(),
    generatePackageConfig(objOptions),
    generateTailwindConfig(objOptions),
    generateTypescriptConfigs(objOptions).tsBuild,
    generateTypescriptConfigs(objOptions).tsDefault,
    generateTypescriptConfigs(objOptions).tsNode,
    generateTypescriptConfigs(objOptions).tsTest,
    generateTypescriptConfigs(objOptions).tsConfig,
    generateViteConfig(),
    generateVolarConfig(),
    generateWebpackConfig(objOptions),
    generateStylelintIgnoreConfig(objOptions),
    generatePrettierIgnoreConfig(),
  ]

  // The values of the two variables, values and configs, are identical in both order and length
  if (values.length !== configs.length) {
    console.error('The lengths of values and configs are not the same')
  }

  const config = configs.reduce((acc, curr, idx) => {
    acc[curr] = values[idx]

    return acc
  }, {} as ObjConfigTab)

  return config[tab]
}

export default generateConfig
