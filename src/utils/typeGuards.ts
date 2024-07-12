import configs from '@data/configs'
import dynamicTabList from '@data/dynamicTabList'
import files from '@data/files'
import { options } from '@data/options'
import type { Condition, ConfigTab, DynamicTabValueList, FileTab, Option, Tab } from '_types'

import capitaliseFirstLetter from './capitaliseFirstLetter'

const tabs = [...configs, ...files, 'terminal', 'readme']

const isHtmlInputElement = (element: unknown): element is HTMLInputElement => element instanceof HTMLInputElement
const isHtmlButtonElement = (element: unknown): element is HTMLButtonElement => element instanceof HTMLButtonElement
const isTab = (value: string): value is Tab => tabs.some(tab => tab === value)
const isConfig = (value: string): value is ConfigTab => configs.some(config => config === value)
const isFile = (value: string): value is FileTab => files.some(file => file === value)
const isOption = (value: string): value is Option => options.some(option => option === value)
// It could be occurring an error 'ReferenceError: Cannot access uninitialized variable' when use 'conditions' via @data/conditions.ts instead of 'options'
const isCondition = (value: string): value is Condition =>
  options.some(option => 'has'.concat(capitaliseFirstLetter(option)) === value)
const isDynamicTabValue = (value: string): value is DynamicTabValueList =>
  Object.keys(dynamicTabList).some(tabValue => tabValue === value)

export { isCondition, isConfig, isDynamicTabValue, isFile, isHtmlButtonElement, isHtmlInputElement, isOption, isTab }
