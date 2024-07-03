import getAuthenticationCommands from '@generators/commands/authentication'
import getBundlerCommands from '@generators/commands/bundler'
import getCompilerCommands from '@generators/commands/compiler'
import getCssFrameworkCommands from '@generators/commands/cssFramework'
import getCssInJsCommands from '@generators/commands/cssInJs'
import getDataManagementCommands from '@generators/commands/dataManagement'
import getEslintCommands from '@generators/commands/eslint'
import getHtmlTemplateCommands from '@generators/commands/htmlTemplate'
import getPrettierCommands from '@generators/commands/prettier'
import getStateManagementCommands from '@generators/commands/stateManagement'
import getStylelintCommands from '@generators/commands/stylelint'
import getTestCommands from '@generators/commands/test'
import getUtilityCommands from '@generators/commands/utility'
import getWebFrameworkCommands from '@generators/commands/webFramework'
import type { SelectOptions } from '_types'
import { stringify } from 'javascript-stringify'

const parseCommands = (commands: string[]) => {
  const parsedCommands = commands.join(' ')

  return parsedCommands
}

const generateCommands = (configOptions: SelectOptions) => {
  const { authenticationDependencies, authenticationDevDependencies } = getAuthenticationCommands(configOptions)
  const { bundlerDependencies, bundlerDevDependencies } = getBundlerCommands(configOptions)
  const { compilerDependencies, compilerDevDependencies } = getCompilerCommands(configOptions)
  const { cssFrameworkDependencies, cssFrameworkDevDependencies } = getCssFrameworkCommands(configOptions)
  const { cssInJsDependencies, cssInJsDevDependencies } = getCssInJsCommands(configOptions)
  const { dataManagementDependencies, dataManagementDevDependencies } = getDataManagementCommands(configOptions)
  const { eslintDevDependencies } = getEslintCommands(configOptions)
  const { htmlTemplateDependencies, htmlTemplateDevDependencies } = getHtmlTemplateCommands(configOptions)
  const { prettierDevDependencies } = getPrettierCommands(configOptions)
  const { stateManagementDependencies } = getStateManagementCommands(configOptions)
  const { stylelintDevDependencies } = getStylelintCommands(configOptions)
  const { testDevDependencies } = getTestCommands(configOptions)
  const { utilityDependencies, utilityDevDependencies } = getUtilityCommands(configOptions)
  const { webFrameworkDependencies, webFrameworkDevDependencies } = getWebFrameworkCommands(configOptions)

  const dependencies = [
    ...authenticationDependencies,
    ...bundlerDependencies,
    ...compilerDependencies,
    ...cssFrameworkDependencies,
    ...cssInJsDependencies,
    ...dataManagementDependencies,
    ...htmlTemplateDependencies,
    ...stateManagementDependencies,
    ...utilityDependencies,
    ...webFrameworkDependencies,
  ]
  const devDependencies = [
    ...authenticationDevDependencies,
    ...bundlerDevDependencies,
    ...compilerDevDependencies,
    ...cssFrameworkDevDependencies,
    ...cssInJsDevDependencies,
    ...dataManagementDevDependencies,
    ...eslintDevDependencies,
    ...htmlTemplateDevDependencies,
    ...prettierDevDependencies,
    ...stylelintDevDependencies,
    ...testDevDependencies,
    ...utilityDevDependencies,
    ...webFrameworkDevDependencies,
  ]

  if (dependencies.length) {
    return `yarn add ${stringify(dependencies, parseCommands, 2)}
  
yarn add -D ${stringify(devDependencies, parseCommands, 2)}`
  }
  return `yarn add -D ${stringify(devDependencies, parseCommands, 2)}`
}

export default generateCommands
