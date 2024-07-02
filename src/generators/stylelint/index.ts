import getExtends from '@generators/stylelint/extends'
import getOverrides from '@generators/stylelint/overrides'
import getPlugins from '@generators/stylelint/plugins'
import getRules from '@generators/stylelint/rules'
import type { SelectOptions } from '_types'
import { stringify } from 'javascript-stringify'

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
  const code = `module.export = ${stringify(config, null, 2)}`

  return code
}

export default generateStylelintConfig
