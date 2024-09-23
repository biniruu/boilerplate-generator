import getCertainConditions from '@utils/certainConditions';
import type { SelectOptions } from '_types';

const generateStylelintIgnoreConfig = (configOptions: SelectOptions) => {
  const { hasJest, hasJsLibs, hasTypescript, hasWordpress } = getCertainConditions(configOptions);

  const jest =
    hasJest && !hasTypescript
      ? `
**/*.test.js
**/*.spec.js`
      : '';
  const jestTypescript =
    hasJest && hasTypescript
      ? `
**/*.test.ts
**/*.spec.ts`
      : '';
  const jestJsLibs =
    hasJest && hasJsLibs && !hasTypescript
      ? `
**/*.test.jsx
**/*.spec.jsx`
      : '';
  const jestJsLibsTypescript =
    hasJest && hasJsLibs && hasTypescript
      ? `
**/*.test.tsx
**/*.test.tsx`
      : '';
  const typescript = hasTypescript
    ? `
**/*.ts
**/*.config.ts`
    : '';
  const wordpress = hasWordpress
    ? `
**/*.php`
    : '';
  const ignores = ''.concat(jest, jestTypescript, jestJsLibs, jestJsLibsTypescript, typescript, wordpress);

  const config = `# files
**/*.cjs
**/*.config.cjs
**/*.html
**/*.js
**/*.json
**/*.lock
**/*.svg
**/*.md
**/*.ico
**/*.png
**/*.txt
**/*.log${ignores}

# paths
node_modules/`;

  return config;
};

export default generateStylelintIgnoreConfig;
