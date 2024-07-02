import getEnv from '@generators/config/eslint/env'
import mergeExtends from '@generators/config/eslint/extends'
import mergeOverrides from '@generators/config/eslint/overrides'
import mergeParser from '@generators/config/eslint/parser'
import { parserOptions } from '@generators/config/eslint/parserOptions'
import { plugins } from '@generators/config/eslint/plugins'
import mergeRules from '@generators/config/eslint/rules'
import mergeSettings from '@generators/config/eslint/settings'
import type { SelectOptions } from '_types'
import { stringify } from 'javascript-stringify'

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
  const code = `module.export = ${stringify(config, null, 2)}`
  const result = code
    .replace(`'replace jestVersion'`, `require('jest/package.json').version`)
    .replace(`'replace tsconfigRootDir'`, '__dirname')

  return result
}

export default generateEslintConfig
