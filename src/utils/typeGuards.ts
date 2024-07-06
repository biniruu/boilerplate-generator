import type { Conditions, SelectOptions } from '_types'

const isHtmlInputElement = (element: unknown): element is HTMLInputElement => element instanceof HTMLInputElement

const isHtmlButtonElement = (element: unknown): element is HTMLButtonElement => element instanceof HTMLButtonElement

const isCondition = (key: string, configOptions: SelectOptions): key is Conditions =>
  Object.values(configOptions).includes(key)

export { isCondition, isHtmlButtonElement, isHtmlInputElement }
