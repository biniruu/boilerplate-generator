import type { SelectOptions } from '_types'

const getEnv = (configOptions: SelectOptions) => {
  const env = {
    browser: true,
    es6: true,
    node: true,
  }
  const result = configOptions.jest ? { ...env, 'jest/globals': true } : env

  return result
}

export default getEnv
