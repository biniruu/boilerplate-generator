import getJestConfig from '@generators/config/jest/jest'
import getJestSetup from '@generators/config/jest/jestSetup'
import type { SelectOptions } from '_types'

const generateJestConfigs = (configOptions: SelectOptions) => {
  const jestConfig = getJestConfig(configOptions)
  const jestSetup = getJestSetup()

  return { jestConfig, jestSetup }
}

export default generateJestConfigs
