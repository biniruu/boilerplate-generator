import convertToString from '@utils/convertToString';

export const tanstackImport = `import tanstackQueryPlugin from '@tanstack/eslint-plugin-query';`;

// const recommendedTanstackConfig = `...tanstackConfig`, // https://tanstack.com/config/latest/docs/eslint#eslintconfigjs
const config = {
  name: '@tanstack/eslint-plugin-query', // https://tanstack.com/config/latest/docs/eslint#eslintconfigjs
  plugins: {
    '@tanstack/eslint-plugin-query': { rules: 'replace tanstackRules', configs: 'replace tanstackConfigs' },
  },
};

export const tanstackConfig = convertToString(config)
  ?.replace(`'replace tanstackRules'`, 'tanstackQueryPlugin.rules')
  .replace(`'replace tanstackConfigs'`, 'tanstackQueryPlugin.configs');

// TODO: Use this instead of the export above if '...tanstackConfig' doesn't occur an error
// const result = {
//   name: '@tanstack/eslint-plugin-query', // https://tanstack.com/config/latest/docs/eslint#eslintconfigjs
//   plugins: {
//     '@tanstack/eslint-plugin-query': { rules: 'replace tanstackRules', configs: 'replace tanstackConfigs' },
//   },
// }
// export const tanstackConfig = recommendedTanstackConfig.concat('\n', result)
