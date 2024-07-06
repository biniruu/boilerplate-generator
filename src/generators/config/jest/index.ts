import type { SelectOptions } from '_types'

import getJestConfig from './jest'
import getJestSetup from './jestSetup'

const generateJestConfigs = (configOptions: SelectOptions) => {
  const jestConfig = getJestConfig(configOptions)
  const jestSetup = getJestSetup()

  return { jestConfig, jestSetup }
}

export default generateJestConfigs
