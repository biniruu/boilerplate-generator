import getCertainConditions from '@utils/certainConditions'
import type { SelectOptions } from '_types'

const getEnv = (configOptions: SelectOptions) => {
  const { hasJest } = getCertainConditions(configOptions)

  const env = {
    browser: true,
    es6: true,
    node: true,
  }
  const result = hasJest ? { ...env, 'jest/globals': true } : env

  return result
}

export default getEnv
