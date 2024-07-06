import { conditions, objConditions as objConditionData } from '@data/conditions'
import { options } from '@data/options'
import type { SelectOptions } from '_types'

const getCertainConditions = (configOptions: SelectOptions) => {
  const objConditions = conditions.reduce((acc, curr, idx) => {
    const matchedOptionWithCondition = options[idx]
    const valueOfMatchedOption = configOptions[matchedOptionWithCondition]
    objConditionData[curr] = valueOfMatchedOption

    return acc
  }, objConditionData)

  const { hasJest, hasNext, hasNuxt, hasReact, hasTailwind, hasVite, hasVue, hasWebpack } = objConditions
  const hasJsLibs = hasNext || hasNuxt || hasReact || hasVue
  const hasTsExtension = hasJest || hasNuxt || hasTailwind || hasVite || hasWebpack

  return { ...objConditions, hasJsLibs, hasTsExtension }
}

export default getCertainConditions
