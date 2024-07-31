import getPrettierCommands from '@generators/command/prettier'
import { configOptions } from 'tests/configOptions.test'

test('should return an empty array when all options are false', () => {
  const { prettierDevDependencies } = getPrettierCommands(configOptions)

  expect(prettierDevDependencies).toBeEmpty()
})

test('should return dependencies for Prettier', () => {
  configOptions.prettier = true

  const { prettierDevDependencies } = getPrettierCommands(configOptions)

  expect(prettierDevDependencies).toEqual(['prettier'])
})

test('should return dependencies for Prettier with Pug', () => {
  configOptions.prettier = true
  configOptions.pug = true

  const { prettierDevDependencies } = getPrettierCommands(configOptions)

  expect(prettierDevDependencies).toIncludeSameMembers(['prettier', '@prettier/plugin-pug'])
})

test('should return dependencies for Prettier with Tailwind', () => {
  configOptions.prettier = true
  configOptions.tailwind = true

  const { prettierDevDependencies } = getPrettierCommands(configOptions)

  expect(prettierDevDependencies).toIncludeSameMembers(['prettier', 'prettier-plugin-tailwindcss'])
})
