import getEslintCommands from '@generators/command/eslint'

import { configOptions } from './configOptions.test'

describe('ESLint', () => {
  test('should return empty values when all options are false', () => {
    const { eslintDevDependencies } = getEslintCommands(configOptions)

    expect(eslintDevDependencies).toBeEmpty()
  })

  test('should generate a command for ESLint', () => {
    configOptions.eslint = true

    const { eslintDevDependencies } = getEslintCommands(configOptions)

    expect(eslintDevDependencies).toIncludeSameMembers([
      '@babel/eslint-parser',
      'eslint',
      'eslint-plugin-jsx-a11y',
      'eslint-plugin-import',
    ])
  })
})
