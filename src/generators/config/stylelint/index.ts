import getCertainConditions from '@utils/certainConditions';
import convertToString from '@utils/convertToString';

import getExtends from './extends';
import getOverrides from './overrides';
import getPlugins from './plugins';
import getRules from './rules';

/**
 * Stylelint documentation
 * {@link https://stylelint.io}
 */
const generateStylelintConfig = () => {
  const { hasPostcss, hasNuxt } = getCertainConditions();

  const config = {
    extends: getExtends(),
    ...(hasPostcss && { overrides: getOverrides() }),
    plugins: getPlugins(),
    rules: getRules(),
  };
  const result = hasNuxt ? `export default ${convertToString(config)}` : `module.exports = ${convertToString(config)}`;

  return result;
};

export default generateStylelintConfig;
