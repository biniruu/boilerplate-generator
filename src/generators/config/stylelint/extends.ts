import getCertainConditions from '@utils/certainConditions';

/**
 * @example
 *
 * ```js
 * extends: [
 *   'stylelint-config-standard',
 *   'stylelint-config-standard-scss',
 * ]
 * ```
 */
const getExtends = () => {
  const { hasScss } = getCertainConditions();
  const result = ['stylelint-config-standard'];

  if (hasScss) {
    result.push('stylelint-config-standard-scss');
  }

  return result;
};

export default getExtends;
