import getStylelintCommands from '@generators/command/stylelint'
import { configOptions } from 'tests/configOptions.test'

describe('Stylelint Commands', () => {
  test('should return an empty value when all options are false', () => {
    const { stylelintDevDependencies } = getStylelintCommands(configOptions)

    expect(stylelintDevDependencies).toBeEmpty()
  })

  const dependencies = ['stylelint', 'stylelint-config-standard', 'stylelint-order']
  test('should generate a command for Stylelint', () => {
    configOptions.stylelint = true

    const { stylelintDevDependencies } = getStylelintCommands(configOptions)

    expect(stylelintDevDependencies).toIncludeSameMembers(dependencies)
  })
})
