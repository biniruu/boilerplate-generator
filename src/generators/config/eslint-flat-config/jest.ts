import convertToString from '@utils/convertToString';

export const jestImports = `import eslintPluginJest from 'eslint-plugin-jest';
import eslintPluginJestDom from 'eslint-plugin-jest-dom';`;
export const testingLibraryImport = `import testingLibrary from 'eslint-plugin-testing-library';`;

const configJest = {
  name: 'eslint-plugin-jest / eslint-plugin-jest-dom', // https://github.com/jest-community/eslint-plugin-jest#eslint-plugin-jest / https://github.com/testing-library/eslint-plugin-jest-dom#readme
  extends: [
    'replace jestConfigRecommended', // recommended eslint-plugin-jest rules (https://github.com/jest-community/eslint-plugin-jest#rules)
    'replace jestDomConfigRecommended', // recommended eslint-plugin-jest-dom rules (https://github.com/testing-library/eslint-plugin-jest-dom#supported-rules)
  ],
  files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  settings: {
    jest: {
      'replace-jest-version': '', // fetch the installed version of Jest (https://github.com/jest-community/eslint-plugin-jest#jest-version-setting)
    },
  },
};
export const jestConfig = convertToString(configJest)
  ?.replace(`'replace jestConfigRecommended'`, `eslintPluginJest.configs['flat/recommended']`)
  .replace(`'replace jestDomConfigRecommended'`, `eslintPluginJestDom.configs['flat/recommended']`)
  .replace(`'replace-jest-version': ''`, 'version: jest.version');

const configReact = {
  name: 'eslint-plugin-testing-library', // https://github.com/testing-library/eslint-plugin-testing-library#react
  'replace-react': '',
};
export const testingLibraryReactConfig = convertToString(configReact)?.replace(
  `'replace-react': ''`,
  `...testingLibrary.configs['flat/react']`,
);
