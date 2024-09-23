import convertToString from '@utils/convertToString';

export const tailwindImport = `import tailwind from 'eslint-plugin-tailwindcss';`;

const recommendedFlatConfigs = `...tailwind.configs['flat/recommended'],`;
const config = {
  name: 'eslint-plugin-tailwindcss', // https://github.com/francoismassart/eslint-plugin-tailwindcss#eslintconfigjs
  rules: {
    /**
     * eslint-plugin-tailwindcss rules
     * {@link https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules}
     */
    'replace-tailwind-recommended-rules': '',
  },
  settings: {
    /**
     * Optional shared settings
     * {@link https://github.com/francoismassart/eslint-plugin-tailwindcss#for-eslintconfigjs-1}
     */
    tailwindcss: {
      // These are the default values but feel free to customize
      callees: ['classnames', 'clsx', 'ctl'],
      config: 'tailwind.config.js', // returned from `loadConfig()` utility if not provided
      cssFiles: ['**/*.css', '!**/node_modules', '!**/.*', '!**/dist', '!**/build'],
      cssFilesRefreshRate: 5_000,
      removeDuplicates: true,
      skipClassAttribute: false,
      whitelist: [],
      tags: [], // can be set to e.g. ['tw'] for use in tw`bg-blue`
      classRegex: '^class(Name)?$', // can be modified to support custom attributes. E.g. "^tw$" for `twin.macro`
    },
  },
};

const result = convertToString(config)?.replace(
  `'replace-tailwind-recommended-rules': ''`,
  `...tailwind.configs['flat/recommended'].rules`,
);

if (!result) {
  throw new Error('Failed to generate tailwind config');
}

export const tailwindConfig = recommendedFlatConfigs.concat('\n', result);
