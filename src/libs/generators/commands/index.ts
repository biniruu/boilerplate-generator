import getEslintCommands from '@libs/generators/commands/eslint'
import type { SelectOptions } from '_types'

const generateCommands = (configOptions: SelectOptions) => {
  const { eslintDevDependencies } = getEslintCommands(configOptions)
  const devDependencies = [...eslintDevDependencies]

  return { devDependencies }
}

export default generateCommands
