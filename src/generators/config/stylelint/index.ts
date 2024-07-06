import convertToString from '@utils/convertToString'
import type { SelectOptions } from '_types'

import getExtends from './extends'
import getOverrides from './overrides'
import getPlugins from './plugins'
import getRules from './rules'

/**
 * Stylelint documentation
 * {@link https://stylelint.io}
 */
const generateStylelintConfig = (configOptions: SelectOptions) => {
  const hasPostcss = configOptions.postcss
  const config = {
    extends: getExtends(configOptions),
    ...(hasPostcss ? { overrides: getOverrides(configOptions) } : {}),
    plugins: getPlugins(configOptions),
    rules: getRules(configOptions),
  }
  const code = `module.export = ${convertToString(config)}`

  return code
}

export default generateStylelintConfig
