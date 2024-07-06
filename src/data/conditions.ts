import type { Condition, Option } from '_types'

import { options } from './options'

const capitaliseFirstLetter = (string: Option) =>
  (string.charAt(0).toUpperCase() + string.slice(1)) as Capitalize<Option>

const conditions = options.reduce((acc, curr) => {
  const condition = 'has'.concat(capitaliseFirstLetter(curr)) as Condition
  acc.push(condition)

  return acc
}, [] as Condition[])

const objConditions = conditions.reduce(
  (acc, curr) => {
    acc[curr] = false

    return acc
  },
  {} as Record<Condition, boolean>,
)

export { conditions, objConditions }
