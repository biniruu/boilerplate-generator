import convertToString from '@utils/convertToString'
import type { SelectOptions } from '_types'

import getEnv from './env'
import mergeExtends from './extends'
import mergeOverrides from './overrides'
import mergeParser from './parser'
import { parserOptions } from './parserOptions'
import { plugins } from './plugins'
import mergeRules from './rules'
import mergeSettings from './settings'

// 현재 설정 파일이 root임을 명시하는 옵션. true로 설정하면 상위 설정 파일 찾기를 여기서 멈춘다.
const root = true

const generateEslintConfig = (configOptions: SelectOptions) => {
  const hasTypescript = configOptions.typescript
  const hasReact = configOptions.react || configOptions.next
  const config = {
    env: getEnv(configOptions),
    extends: mergeExtends(configOptions),
    overrides: mergeOverrides(configOptions),
    parser: mergeParser(configOptions),
    ...(hasTypescript ? { parserOptions } : {}),
    ...(hasReact ? { plugins } : {}),
    root,
    rules: mergeRules(configOptions),
    settings: mergeSettings(configOptions),
  }
  const code = `module.export = ${convertToString(config)}`
  const result = code
    .replace(`'replace jestVersion'`, `require('jest/package.json').version`)
    .replace(`'replace tsconfigRootDir'`, '__dirname')

  return result
}

export default generateEslintConfig
