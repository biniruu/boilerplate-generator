import { SelectOptions } from '_types'

// plugins: [
//   'stylelint-scss',
//   'stylelint-order',
// ],
const getPlugins = (configOptions: SelectOptions) => {
  const result = ['stylelint-order']

  if (configOptions.scss) {
    result.push('stylelint-scss')
  }

  return result
}

export default getPlugins
