import { objOptions } from '@data/options'
import type { SelectOptions } from '_types'

export const options = objOptions

interface Params {
  generateConfig?: (param: SelectOptions) => string
  content?: string
}

export const setTextContent = ({ generateConfig, content }: Params) => {
  if (!elemCode) {
    throw new Error('elemCode is not defined')
  }
  if (generateConfig) {
    elemCode.textContent = generateConfig(options)

    return
  }
  if (content) {
    elemCode.textContent = content
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
