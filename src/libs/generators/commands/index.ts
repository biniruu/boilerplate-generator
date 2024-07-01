import getEslintCommands from '@libs/generators/commands/eslint'
import getPrettierCommands from '@libs/generators/commands/prettier'
import getStylelintCommands from '@libs/generators/commands/stylelint'
import type { SelectOptions } from '_types'
import { stringify } from 'javascript-stringify'

const parseCommands = (commands: string[]) => {
  const parsedCommands = commands.join(' ')

  return parsedCommands
}

const generateCommands = (configOptions: SelectOptions) => {
  const { eslintDevDependencies } = getEslintCommands(configOptions)
  const { stylelintDevDependencies } = getStylelintCommands(configOptions)
  const { prettierDevDependencies } = getPrettierCommands(configOptions)

  const devDependencies = [
    ...eslintDevDependencies,
    ...stylelintDevDependencies,
    ...prettierDevDependencies,
  ]
}

export default generateCommands
