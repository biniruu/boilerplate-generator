import configs from '@data/configs';
import type { ConfigTab, ObjConfigTab, SelectOptions } from '_types';

import generateBabelConfig from './babel';
import generateEslintConfig from './eslint';
import generateEslintFlatConfig from './eslint-flat-config';
import generateEslintIgnoreConfig from './eslintIgnore';
import generateGatsbyConfig from './gatsby';
import generateGitIgnore from './gitignore';
import generateJestConfigs from './jest';
import generateMarkdownlintConfig from './markdownlint';
import generateNextConfig from './next';
import generateNodemonConfig from './nodemon';
import generateNpmConfig from './npm';
import generateNuxtConfig from './nuxt';
import generatePackageConfig from './package';
import generatePostcssConfig from './postcss';
import generatePrettierConfig from './prettier';
import generatePrettierIgnoreConfig from './prettierignore';
import generatePugConfig from './pug';
import generateStylelintConfig from './stylelint';
import generateStylelintIgnoreConfig from './stylelintignore';
import generateTailwindConfig from './tailwind';
import generateTypescriptConfigs from './ts';
import generateViteConfig from './vite';
import generateVolarConfig from './volar';
import generateWebpackConfig from './webpack';

const generateConfig = (tab: ConfigTab, options: SelectOptions) => {
  const values = [
    generateBabelConfig(),
    generateEslintConfig(options),
    generateEslintIgnoreConfig(options),
    generateEslintFlatConfig(options),
    generateGatsbyConfig(),
    generateGitIgnore(options),
    generateJestConfigs(options).jestConfig,
    generateJestConfigs(options).jestSetup,
    generatePrettierConfig(options),
    generatePostcssConfig(options),
    generatePugConfig(),
    generateStylelintConfig(options),
    generateMarkdownlintConfig(),
    generateNextConfig(options),
    generateNodemonConfig(options),
    generateNpmConfig(),
    generateNuxtConfig(),
    generatePackageConfig(options),
    generateTailwindConfig(options),
    generateTypescriptConfigs(options).tsBuild,
    generateTypescriptConfigs(options).tsDefault,
    generateTypescriptConfigs(options).tsNode,
    generateTypescriptConfigs(options).tsTest,
    generateTypescriptConfigs(options).tsConfig,
    generateViteConfig(),
    generateVolarConfig(),
    generateWebpackConfig(options),
    generateStylelintIgnoreConfig(options),
    generatePrettierIgnoreConfig(),
  ];

  // The values of the two variables, values and configs, are identical in both order and length
  if (values.length !== configs.length) {
    console.error('The lengths of values and configs are not the same');
  }

  const config = configs.reduce((acc, curr, idx) => {
    acc[curr] = values[idx];

    return acc;
  }, {} as ObjConfigTab);

  return config[tab];
};

export default generateConfig;
