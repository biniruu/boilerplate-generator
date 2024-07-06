import getCertainConditions from '@utils/certainConditions'
import type { SelectOptions } from '_types'

// extends: [
//   'stylelint-config-standard',
//   'stylelint-config-standard-scss',
// ],
const getExtends = (configOptions: SelectOptions) => {
  const { hasScss } = getCertainConditions(configOptions)
  const result = ['stylelint-config-standard']

  if (hasScss) {
    result.push('stylelint-config-standard-scss')
  }

  return result
}

export default getExtends
