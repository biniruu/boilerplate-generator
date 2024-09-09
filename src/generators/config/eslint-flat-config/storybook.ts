import convertToString from '@utils/convertToString'

const config = {
  name: 'eslint-plugin-storybook', // https://github.com/storybookjs/eslint-plugin-storybook#eslint-plugin-storybook
  extends: ['replace storybookConfig'],
}

export const storybookConfig = convertToString(config)?.replace(
  `'replace storybookConfig'`,
  `...fixupConfigRules(flatCompat.extends('plugin:storybook/recommended'))`,
)
