import getStylelintCommands from '@generators/command/stylelint'
import { configOptions } from 'tests/configOptions.test'

describe('Stylelint Commands', () => {
  test('should return an empty value when all options are false', () => {
    const { stylelintDevDependencies } = getStylelintCommands(configOptions)

    expect(stylelintDevDependencies).toBeEmpty()
  })
})
