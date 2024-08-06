import { isCondition } from '@utils/typeGuards'
import type { Condition } from '_types'
import { upperFirst } from 'lodash-es'

import { options } from './options'

export const conditions = options.reduce((acc, curr) => {
  const condition = 'has'.concat(upperFirst(curr))
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
