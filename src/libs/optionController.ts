/**
 * <For Nuxt.js>
 *
 * "disable"
 * Immer
 * NextAuth.js
 * React hook form
 * React infinite scroller
 * React joyride
 * Recoil
 * SWR
 * Tanstack query - since not yet prepared
 * Vite
 *
 * <For React.js>
 *
 * "enable"
 * Vite
 *
 *
 */

import { isDynamicTabValue, isOption } from '@utils/typeGuards'
import type { DynamicTabValueList, Option, SelectOptions } from '_types'

import { reloadEditor, showReadme } from './editorController'
import toggleOptionState from './optionState'
import { getActivatedTab } from './tabController'
import toggleTabs from './toggleTabs'

type JsLib = (typeof jsLib)[number]

const syntax: Option[] = ['typescript', 'javascript']
const jsLib = ['nothing', 'gatsby', 'next', 'nuxt', 'react', 'vue', 'wordpress'] as const
const radioBtns = [...syntax, ...jsLib]
let precedentValue: JsLib

export const handleOptions = (value: Option, isChecked: boolean, options: SelectOptions) => {
  if (isOption(value)) {
    // (options[value] = !options[value]) means that togging checkbox
    radioBtns.includes(value) ? handleRadioBtns(value, options) : (options[value] = !options[value])
    reloadEditor(options)
    toggleOptionState(value)
  }

  if (jsLib.includes(value as JsLib)) {
    toggleTabs(precedentValue as Extract<DynamicTabValueList, JsLib>, false)
    precedentValue = value as JsLib
  }
  if (isDynamicTabValue(value)) {
    toggleTabs(value, isChecked)
  }
  // If the currently active tab within the dynamic tabs is removed, the 'README.md' tab will be displayed instead
  const elemCurrentTab = getActivatedTab()
  if (!elemCurrentTab?.classList.contains('active')) {
    showReadme(options)
  }
}

const handleRadioBtns = (value: Option, options: SelectOptions) => {
  // Reset inputs in 'Syntax' and 'JavaScript library' categories
  const target = syntax.includes(value) ? syntax : jsLib
  target.forEach(item => (options[item] = false))
  // Select new one
  options[value] = true
}

export const toggleChecked = (value: Option) => document.querySelector<HTMLInputElement>(`#${value}`)?.click()

export const toggleDisabled = (value: Option) => {
  const elem = document.querySelector<HTMLInputElement>(`#${value}`)
  if (elem) {
    elem.disabled = !elem.disabled
  }
}
