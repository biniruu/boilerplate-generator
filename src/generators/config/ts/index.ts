import getCertainConditions from '@utils/certainConditions'
import type { SelectOptions } from '_types'

import getTsBuild from './tsBuild'
import getTsConfig from './tsConfig'
import getTsDefault from './tsDefault'
import getTsNode from './tsNode'
import getTsTest from './tsTest'

const tsNode = getTsNode()

const generateTypescriptConfigs = (configOptions: SelectOptions) => {
  const { hasGatsby, hasReact } = getCertainConditions(configOptions)
  const hasDefaultConfig = !hasGatsby || !hasReact

  const tsDefaultConfig = getTsDefault(configOptions)

  const tsBuild = getTsBuild(configOptions)
  const tsConfig = hasDefaultConfig ? getTsConfig(configOptions) : tsDefaultConfig
  const tsDefault = tsDefaultConfig
  const tsTest = getTsTest(configOptions)

  // These will become individual files:
  // tsBuild - tsconfig.build.json
  // tsConfig - tsconfig.json
  // tsDefault - tsconfig.default.json
  // tsNode - tsconfig.node.json
  // tsTest - tsconfig.test.json
  return { tsBuild, tsConfig, tsDefault, tsNode, tsTest }
}

export default generateTypescriptConfigs
