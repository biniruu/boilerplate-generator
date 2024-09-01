import type { Option } from '_types'

export const getOptionElem = (option: Option) => document.querySelector<HTMLInputElement>(`#${option}`)
