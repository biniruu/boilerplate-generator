import getCertainConditions from '@utils/certainConditions'
import type { SelectOptions } from '_types'

// plugins: [
//   'stylelint-scss',
//   'stylelint-order',
// ],
const getPlugins = (configOptions: SelectOptions) => {
  const { hasScss } = getCertainConditions(configOptions)
  const result = ['stylelint-order']

  if (hasScss) {
    result.push('stylelint-scss')
  }

  return result
}

export default getPlugins
