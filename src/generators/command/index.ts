import { objOptions } from '@data/options'
import convertToString from '@utils/convertToString'

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

const generateCommand = () => {
  const { authenticationDependencies, authenticationDevDependencies } = getAuthenticationCommands(objOptions)
  const { bundlerDependencies, bundlerDevDependencies } = getBundlerCommands(objOptions)
  const { compilerDevDependencies } = getCompilerCommands(objOptions)
  const { cssFrameworkDevDependencies } = getCssFrameworkCommands(objOptions)
  const { cssInJsDependencies, cssInJsDevDependencies } = getCssInJsCommands(objOptions)
  const { dataManagementDependencies, dataManagementDevDependencies } = getDataManagementCommands(objOptions)
  const { eslintDevDependencies } = getEslintCommands(objOptions)
  const { htmlTemplateDependencies, htmlTemplateDevDependencies } = getHtmlTemplateCommands(objOptions)
  const { prettierDevDependencies } = getPrettierCommands(objOptions)
  const { stateManagementDependencies } = getStateManagementCommands(objOptions)
  const { stylelintDevDependencies } = getStylelintCommands(objOptions)
  const { testDevDependencies } = getTestCommands(objOptions)
  const { utilityDependencies, utilityDevDependencies } = getUtilityCommands(objOptions)
  const { webFrameworkDependencies, webFrameworkDevDependencies } = getWebFrameworkCommands(objOptions)

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
