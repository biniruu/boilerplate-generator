import { objOptions } from '@data/options'
import type { SelectOptions } from '_types'

export let configOptions: SelectOptions
export const setHasJsLibs = () => {
  configOptions.next = true
  configOptions.nuxt = true
  configOptions.react = true
  configOptions.vue = true
}

beforeEach(() => {
  configOptions = { ...objOptions }
})
