import { objOptions } from '@data/options'
import type { SelectOptions } from '_types'

export let configOptions: SelectOptions

beforeEach(() => {
  configOptions = { ...objOptions }
})
