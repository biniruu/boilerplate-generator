import getCertainConditions from '@utils/certainConditions'
import type { SelectOptions } from '_types'

const getExtension = (configOptions: SelectOptions) => {
  const { hasTypescript } = getCertainConditions(configOptions)

  return hasTypescript ? 'ts' : 'js'
}

export default getExtension
