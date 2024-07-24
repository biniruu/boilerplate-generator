import getPrettierCommands from '@generators/command/prettier'
import { configOptions } from 'tests/configOptions.test'

describe('Prettier Commands', () => {
  test('should return an empty value when all options are false', () => {
    const { prettierDevDependencies } = getPrettierCommands(configOptions)

    expect(prettierDevDependencies).toBeEmpty()
  })

  test('should generate a command for prettier', () => {
    configOptions.prettier = true

    const { prettierDevDependencies } = getPrettierCommands(configOptions)

    expect(prettierDevDependencies).toEqual(['prettier'])
  })
})
