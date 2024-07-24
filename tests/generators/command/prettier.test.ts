import getPrettierCommands from '@generators/command/prettier'
import { configOptions } from 'tests/configOptions.test'

describe('Prettier Commands', () => {
  test('should return an empty value when all options are false', () => {
    const { prettierDevDependencies } = getPrettierCommands(configOptions)

    expect(prettierDevDependencies).toBeEmpty()
  })

  test('should generate a command for Prettier', () => {
    configOptions.prettier = true

    const { prettierDevDependencies } = getPrettierCommands(configOptions)

    expect(prettierDevDependencies).toEqual(['prettier'])
  })

  test('should generate a command for Prettier with Pug', () => {
    configOptions.prettier = true
    configOptions.pug = true

    const { prettierDevDependencies } = getPrettierCommands(configOptions)

    expect(prettierDevDependencies).toIncludeSameMembers(['prettier', '@prettier/plugin-pug'])
  })
})
