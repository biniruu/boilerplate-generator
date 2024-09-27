import getCertainConditions from '@utils/certainConditions';
import convertToString from '@utils/convertToString';

import getAuthenticationCommands from './authentication';
import getBundlerCommands from './bundler';
import getCompilerCommands from './compiler';
import getCssFrameworkCommands from './cssFramework';
import getCssInJsCommands from './cssInJs';
import getDataManagementCommands from './dataManagement';
import getEslintCommands from './eslint';
import getEslintFlatConfigCommands from './eslint-flat-config';
import getHtmlTemplateCommands from './htmlTemplate';
import getPrettierCommands from './prettier';
import getStateManagementCommands from './stateManagement';
import getStylelintCommands from './stylelint';
import getTestCommands from './test';
import getTypescriptCommands from './typescript';
import getUtilityCommands from './utility';
import getValidationCommands from './validation';
import getWebFrameworkCommands from './webFramework';

const parseCommands = (commands: string[]) => {
  const parsedCommands = commands.join(' ');

  return parsedCommands;
};

const generateCommand = () => {
  const { authenticationDependencies, authenticationDevDependencies } = getAuthenticationCommands();
  const { bundlerDependencies, bundlerDevDependencies } = getBundlerCommands();
  const { compilerDevDependencies } = getCompilerCommands();
  const { cssFrameworkDevDependencies } = getCssFrameworkCommands();
  const { cssInJsDependencies, cssInJsDevDependencies } = getCssInJsCommands();
  const { dataManagementDependencies, dataManagementDevDependencies } = getDataManagementCommands();
  const { eslintDevDependencies } = getEslintCommands();
  const { eslintFlatConfigDevDependencies } = getEslintFlatConfigCommands();
  const { htmlTemplateDependencies, htmlTemplateDevDependencies } = getHtmlTemplateCommands();
  const { prettierDevDependencies } = getPrettierCommands();
  const { stateManagementDependencies } = getStateManagementCommands();
  const { stylelintDevDependencies } = getStylelintCommands();
  const { testDevDependencies } = getTestCommands();
  const { utilityDependencies, utilityDevDependencies } = getUtilityCommands();
  const { webFrameworkDependencies, webFrameworkDevDependencies } = getWebFrameworkCommands();
  const { typescriptDevDependencies } = getTypescriptCommands();
  const { validationDependencies } = getValidationCommands();

  const dependencies = [
    ...authenticationDependencies,
    ...bundlerDependencies,
    ...cssInJsDependencies,
    ...dataManagementDependencies,
    ...htmlTemplateDependencies,
    ...stateManagementDependencies,
    ...utilityDependencies,
    ...webFrameworkDependencies,
    ...validationDependencies,
  ];
  const devDependencies = [
    ...authenticationDevDependencies,
    ...bundlerDevDependencies,
    ...compilerDevDependencies,
    ...cssFrameworkDevDependencies,
    ...cssInJsDevDependencies,
    ...dataManagementDevDependencies,
    ...eslintDevDependencies,
    ...eslintFlatConfigDevDependencies,
    ...htmlTemplateDevDependencies,
    ...prettierDevDependencies,
    ...stylelintDevDependencies,
    ...testDevDependencies,
    ...utilityDevDependencies,
    ...webFrameworkDevDependencies,
    ...typescriptDevDependencies,
  ];
  const hasDependencies = dependencies.length;
  const hasDevDependencies = devDependencies.length;

  if (hasDependencies && hasDevDependencies) {
    return `yarn add ${convertToString(dependencies, parseCommands)}
  
yarn add -D ${convertToString(devDependencies, parseCommands)}`;
  }
  if (hasDependencies) {
    return `yarn add ${convertToString(dependencies, parseCommands)}`;
  }
  if (hasDevDependencies) {
    return `yarn add -D ${convertToString(devDependencies, parseCommands)}`;
  }

  const { hasGatsby, hasWordpress, hasDotenv } = getCertainConditions();
  if (hasGatsby || hasWordpress) {
    return `No commands available. Please see 'Getting Started' for more information.`;
  }
  // TODO: Make these packages selectable
  if (hasDotenv) {
    return `No commands available. Please try selecting one of the JavaScript Libraries or other options.`;
  }
  return 'No commands available';
};

export default generateCommand;
