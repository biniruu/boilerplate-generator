import configs from '@data/configs'
import files from '@data/files'
import type { ConfigTab, FileTab, Tab } from '_types'

const isHtmlInputElement = (element: unknown): element is HTMLInputElement => element instanceof HTMLInputElement
const isHtmlButtonElement = (element: unknown): element is HTMLButtonElement => element instanceof HTMLButtonElement
const isConfig = (value: Tab): value is ConfigTab => configs.some(config => config === value)
const isFile = (value: Tab): value is FileTab => files.some(file => file === value)

export { isConfig, isFile, isHtmlButtonElement, isHtmlInputElement }
