import getCertainConditions from '@utils/certainConditions';
import convertToJson from '@utils/convertToJson';
import type { SelectOptions } from '_types';

const nuxtConfig = {
  compilerOptions: {},
  extends: './.nuxt/tsconfig.json',
};

const getTsConfig = (configOptions: SelectOptions) => {
  const { hasGatsby, hasJest, hasNext, hasNuxt, hasJsLibs, hasTsExtension } = getCertainConditions(configOptions);

  const gatsbyInclude = hasGatsby ? ['gatsby-config.ts'] : [];
  const jestJsxInclude = hasJsLibs ? ['**/tests/**/*.spec.tsx', '**/tests/**/*.test.tsx'] : [];
  const jestInclude = hasJest ? ['**/tests/**/*.spec.ts', '**/tests/**/*.test.ts', ...jestJsxInclude] : [];
  const jsxInclude = hasJsLibs ? ['**/src/**/*.tsx'] : [];
  const nextInclude = hasNext ? ['next-env.d.ts', '.next/types/**/*.ts'] : [];
  const tsExtInclude = hasTsExtension ? ['**/*.config.ts'] : [];

  const config = {
    compilerOptions: {
      /* Editor Support */
      ...(hasNext && {
        plugins: [
          {
            name: 'next',
          },
        ],
      }),
    },
    extends: './tsconfig.default.json',
    include: [
      '**/*.ts',
      ...jsxInclude,
      'dist/types/**/*.ts',
      ...gatsbyInclude,
      ...jestInclude,
      ...nextInclude,
      ...tsExtInclude,
    ],
  };

  const result = convertToJson(hasNuxt ? nuxtConfig : config);

  return result;
};

export default getTsConfig;
