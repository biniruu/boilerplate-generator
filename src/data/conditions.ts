import capitaliseFirstLetter from '@utils/capitaliseFirstLetter'

import { options } from './options'

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
