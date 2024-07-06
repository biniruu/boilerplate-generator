import convertToString from '@utils/convertToString'
import type { SelectOptions } from '_types'

import getAuthenticationCommands from './authentication'
import getBundlerCommands from './bundler'
import getCompilerCommands from './compiler'
import getCssFrameworkCommands from './cssFramework'
import getCssInJsCommands from './cssInJs'
import getDataManagementCommands from './dataManagement'
import getEslintCommands from './eslint'
import getHtmlTemplateCommands from './htmlTemplate'
import getPrettierCommands from './prettier'
import getStateManagementCommands from './stateManagement'
import getStylelintCommands from './stylelint'
import getTestCommands from './test'
import getUtilityCommands from './utility'
import getWebFrameworkCommands from './webFramework'

const parseCommands = (commands: string[]) => {
  const parsedCommands = commands.join(' ')

  return parsedCommands
}

const generateCommand = (configOptions: SelectOptions) => {
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
    return `yarn add ${convertToString(dependencies, parseCommands)}
  
yarn add -D ${convertToString(devDependencies, parseCommands)}`
  }
  return `yarn add -D ${convertToString(devDependencies, parseCommands)}`
}

export default generateCommand
