import getCertainConditions from '@utils/certainConditions';

/**
 * @example
 *
 * ```js
 * plugins: [
 *   'stylelint-scss',
 *   'stylelint-order',
 * ],
 * ```
 */
const getPlugins = () => {
  const { hasScss } = getCertainConditions();
  const result = ['stylelint-order'];

  if (hasScss) {
    result.push('stylelint-scss');
  }

  return result;
};

export default getPlugins;
