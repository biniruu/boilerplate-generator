import getCertainConditions from '@utils/certainConditions';
import convertToJson from '@utils/convertToJson';

const getTsBuild = () => {
  const { hasNext, hasJsLibs } = getCertainConditions();

  const jsxInclude = hasJsLibs ? ['**/src/**/*.tsx'] : [];
  const nextInclude = hasNext ? ['next-env.d.ts', '.next/types/**/*.ts'] : [];

  const config = {
    compilerOptions: {
      // "declaration": true, // Generate .d.ts files from TypeScript and JavaScript files in your project.
      sourceMap: false, // Create source map files for emitted JavaScript files.
    },
    extends: './tsconfig.default.json',
    include: ['**/src/**/*.ts', ...jsxInclude, ...nextInclude],
  };

  const result = convertToJson(config);

  return result;
};

export default getTsBuild;
