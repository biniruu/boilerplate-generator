import getEslintCommands from '@libs/generators/commands/eslint'
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
  const devDependencies = [...eslintDevDependencies, ...stylelintDevDependencies]

  return `yarn add -D ${stringify(devDependencies, parseCommands, 2)}`
}

export default generateCommands
