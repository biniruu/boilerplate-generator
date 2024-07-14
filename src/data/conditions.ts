import capitaliseFirstLetter from '@utils/capitaliseFirstLetter'
import { isCondition } from '@utils/typeGuards'
import type { Condition } from '_types'

import { options } from './options'

export const conditions = options.reduce((acc, curr) => {
  const condition = 'has'.concat(capitaliseFirstLetter(curr))
  if (isCondition(condition)) {
    acc.push(condition)
  } else {
    console.error(`Condition ${condition} is not a valid condition`)
  }
  return acc
}, [] as Condition[])

export const objConditions = conditions.reduce(
  (acc, curr) => {
    acc[curr] = false

    return acc
  },
  {} as Record<Condition, boolean>,
)
