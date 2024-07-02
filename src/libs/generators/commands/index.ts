import getAuthenticationCommands from '@libs/generators/commands/authentication'
import getBundlerCommands from '@libs/generators/commands/bundler'
import getCompilerCommands from '@libs/generators/commands/compiler'
import getCssFrameworkCommands from '@libs/generators/commands/cssFramework'
import getCssInJsCommands from '@libs/generators/commands/cssInJs'
import getDataManagementCommands from '@libs/generators/commands/dataManagement'
import getEslintCommands from '@libs/generators/commands/eslint'
import getHtmlTemplateCommands from '@libs/generators/commands/htmlTemplate'
import getPrettierCommands from '@libs/generators/commands/prettier'
import getStateManagementCommands from '@libs/generators/commands/stateManagement'
import getStylelintCommands from '@libs/generators/commands/stylelint'
import getTestCommands from '@libs/generators/commands/test'
import getUtilityCommands from '@libs/generators/commands/utility'
import getWebFrameworkCommands from '@libs/generators/commands/webFramework'
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

  return `yarn add ${stringify(dependencies, parseCommands, 2)}
  
yarn add -D ${stringify(devDependencies, parseCommands, 2)}`
}

export default generateCommands
