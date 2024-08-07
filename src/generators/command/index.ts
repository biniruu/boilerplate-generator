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

const generateCommand = (options: SelectOptions) => {
  const { authenticationDependencies, authenticationDevDependencies } = getAuthenticationCommands(options)
  const { bundlerDependencies, bundlerDevDependencies } = getBundlerCommands(options)
  const { compilerDevDependencies } = getCompilerCommands(options)
  const { cssFrameworkDevDependencies } = getCssFrameworkCommands(options)
  const { cssInJsDependencies, cssInJsDevDependencies } = getCssInJsCommands(options)
  const { dataManagementDependencies, dataManagementDevDependencies } = getDataManagementCommands(options)
  const { eslintDevDependencies } = getEslintCommands(options)
  const { htmlTemplateDependencies, htmlTemplateDevDependencies } = getHtmlTemplateCommands(options)
  const { prettierDevDependencies } = getPrettierCommands(options)
  const { stateManagementDependencies } = getStateManagementCommands(options)
  const { stylelintDevDependencies } = getStylelintCommands(options)
  const { testDevDependencies } = getTestCommands(options)
  const { utilityDependencies, utilityDevDependencies } = getUtilityCommands(options)
  const { webFrameworkDependencies, webFrameworkDevDependencies } = getWebFrameworkCommands(options)

  const dependencies = [
    ...authenticationDependencies,
    ...bundlerDependencies,
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
  const hasDependencies = dependencies.length
  const hasDevDependencies = devDependencies.length

  if (hasDependencies && hasDevDependencies) {
    return `yarn add ${convertToString(dependencies, parseCommands)}
  
yarn add -D ${convertToString(devDependencies, parseCommands)}`
  }
  if (hasDevDependencies) {
    return `yarn add -D ${convertToString(devDependencies, parseCommands)}`
  }
  return ''
}

export default generateCommand
