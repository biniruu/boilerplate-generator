import { objOptions } from '@data/options'
import type { SelectOptions } from '_types'

export const options = objOptions

export const setTextContent = (generateConfig: (param: SelectOptions) => string) => {
  if (elemCode) {
    elemCode.textContent = generateConfig(options)
  }
}

export let elemCode: HTMLElement | null

beforeEach(() => {
  document.body.innerHTML = `<code id="code" />`
  elemCode = document.querySelector<HTMLElement>('#code')

  // Reset objOptions
  for (const key in options) {
    options[key as keyof typeof options] = false
  }
})
