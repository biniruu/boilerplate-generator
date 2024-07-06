import type { Conditions, SelectOptions } from '_types'

import { isCondition } from './typeGuards'

const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1)

const getCertainConditions = (configOptions: SelectOptions) => {
  const conditions = Object.keys(configOptions).reduce(
    (acc, curr) => {
      const condition = 'has'.concat(capitalizeFirstLetter(curr))
      if (isCondition(condition, configOptions)) {
        acc[condition] = configOptions[curr as keyof typeof configOptions]
      }
      return acc
    },
    {} as Record<Conditions, boolean>,
  )

  const { hasJest, hasNext, hasNuxt, hasReact, hasTailwind, hasVite, hasVue, hasWebpack } = conditions
  const hasJsLibs = hasNext || hasNuxt || hasReact || hasVue
  const hasTsExtension = hasJest || hasNuxt || hasTailwind || hasVite || hasWebpack

  return { ...conditions, hasJsLibs, hasTsExtension }
}

export default getCertainConditions
