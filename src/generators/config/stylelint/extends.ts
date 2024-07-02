import type { SelectOptions } from '_types'

// extends: [
//   'stylelint-config-standard',
//   'stylelint-config-standard-scss',
// ],
const getExtends = (configOptions: SelectOptions) => {
  const result = ['stylelint-config-standard']

  if (configOptions.scss) {
    result.push('stylelint-config-standard-scss')
  }

  return result
}

export default getExtends
