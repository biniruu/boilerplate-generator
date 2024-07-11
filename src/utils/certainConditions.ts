import { conditions, objConditions as objConditionData } from '@data/conditions'
import { options } from '@data/options'
import type { SelectOptions } from '_types'

const getCertainConditions = (configOptions: SelectOptions) => {
  // convert options that from data/options.ts to conditions
  // for example: react -> hasReact
  const objConditions = conditions.reduce((acc, curr, idx) => {
    const matchedOptionWithCondition = options[idx]
    const valueOfMatchedOption = configOptions[matchedOptionWithCondition]
    objConditionData[curr] = valueOfMatchedOption

    return acc
  }, objConditionData)

  const { hasJest, hasNext, hasNuxt, hasPostcss, hasReact, hasTailwind, hasVite, hasVue, hasWebpack } = objConditions
  const hasCssModule = hasPostcss || hasTailwind
  const hasJsLibs = hasNext || hasNuxt || hasReact || hasVue
  const hasTsExtension = hasJest || hasNuxt || hasTailwind || hasVite || hasWebpack

  return { ...objConditions, hasCssModule, hasJsLibs, hasTsExtension }
}

export default getCertainConditions
