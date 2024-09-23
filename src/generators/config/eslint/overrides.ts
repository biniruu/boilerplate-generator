import getCertainConditions from '@utils/certainConditions';
import type { SelectOptions } from '_types';

/**
 * @example
 *
 * ```js
 * overrides: [
 *   {
 *     extends: ['plugin:jest/recommended', 'plugin:jest-dom/recommended', 'plugin:testing-library/react'],
 *     files: ['**\/__tests__/**\/*.[jt]s?(x)', '**\/?(*.)+(spec|test).[jt]s?(x)'],
 *     rules: {},
 *   },
 *   {
 *     extends: ['plugin:@typescript-eslint/disable-type-checked'],
 *     files: ['*.js', '*.cjs', '*.config.js', '*.config.ts', '*.test.js', '*.test.ts', '*.spec.js', '*.spec.ts'],
 *   },
 * ]
 * ```
 */
const mergeOverrides = (configOptions: SelectOptions) => {
  const { hasJest, hasTypescript } = getCertainConditions(configOptions);
  const result = [];

  /**
   * Jest
   *
   * plugin:jest/recommended : recommended eslint-plugin-jest rules
   * plugin:jest-dom/recommended : recommended jest-dom rules
   * plugin:testing-library/react : eslint-plugin-testing-library rules or preset
   *
   * rules
   *
   * [eslint-plugin-jest]{@link https://github.com/jest-community/eslint-plugin-jest#rules}
   * [eslint-plugin-jest-dom]{@link https://www.npmjs.com/package/eslint-plugin-jest-dom#supported-rules}
   * [eslint-plugin-testing-library]{@link https://www.npmjs.com/package/eslint-plugin-testing-library#supported-rules}
   */
  if (hasJest) {
    result.push({
      extends: ['plugin:jest/recommended', 'plugin:jest-dom/recommended', 'plugin:testing-library/react'],
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      // rules: {},
    });
  }
  /**
   * Specifying TSConfigs
   * {@link https://typescript-eslint.io/getting-started/typed-linting/#how-can-i-disable-type-aware-linting-for-a-subset-of-files}
   *
   * plugin:@typescript-eslint/disable-type-checked : turn off type-aware linting on specific subsets of files with a disabled-type-checked config {@link https://typescript-eslint.io/linting/typed-linting/#how-can-i-disable-type-aware-linting-for-a-subset-of-files}
   */
  if (hasTypescript) {
    result.push({
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      files: ['*.js', '*.cjs', '*.config.js', '*.config.ts', '*.test.js', '*.test.ts', '*.spec.js', '*.spec.ts'],
    });
  }

  return result;
};

export default mergeOverrides;
