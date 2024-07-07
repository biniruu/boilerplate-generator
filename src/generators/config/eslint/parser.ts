import getCertainConditions from '@utils/certainConditions'
import type { SelectOptions } from '_types'

const mergeParser = (configOptions: SelectOptions) => {
  const { hasTypescript } = getCertainConditions(configOptions)

  return hasTypescript ? '@typescript-eslint/parser' : '@babel/eslint-parser'
}

export default mergeParser
