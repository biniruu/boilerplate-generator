import configs from '@data/configs'
import files from '@data/files'
import { options } from '@data/options'
import type { ConfigTab, FileTab, Option, Tab } from '_types'

const tabs = [...configs, ...files, 'terminal']

const isHtmlInputElement = (element: unknown): element is HTMLInputElement => element instanceof HTMLInputElement
const isHtmlButtonElement = (element: unknown): element is HTMLButtonElement => element instanceof HTMLButtonElement
const isTab = (value: string): value is Tab => tabs.some(tab => tab === value)
const isConfig = (value: string): value is ConfigTab => configs.some(config => config === value)
const isFile = (value: string): value is FileTab => files.some(file => file === value)
const isOption = (value: string): value is Option => options.some(option => option === value)

export { isConfig, isFile, isHtmlButtonElement, isHtmlInputElement, isOption, isTab }
