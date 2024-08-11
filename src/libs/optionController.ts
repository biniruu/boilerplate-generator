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

import { jsLib, radioBtns, syntax } from '@data/options'
import { isDynamicTabValue, isOption } from '@utils/typeGuards'
import type { DynamicTabValueList, JsLib, Option, SelectOptions } from '_types'

import { reloadEditor, showReadme } from './editorController'
import toggleOptionState from './optionState'
import { getActivatedTab } from './tabController'
import toggleTabs from './toggleTabs'

let precedentValue: JsLib

const isJsLib = (value: string): value is JsLib => jsLib.some(item => item === value)
export const handleOptions = (value: Option, isChecked: boolean, options: SelectOptions) => {
  if (isOption(value)) {
    // (options[value] = !options[value]) means that togging checkbox
    radioBtns.includes(value as (typeof radioBtns)[number])
      ? handleRadioBtns(value, options)
      : (options[value] = !options[value])
    reloadEditor(options)
  }
  if (isJsLib(value)) {
    toggleTabs(precedentValue as Extract<DynamicTabValueList, JsLib>, false)
    precedentValue = value
    toggleOptionState(value)
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

const handleRadioBtns = (value: string, options: SelectOptions) => {
  // Reset inputs in 'Syntax' and 'JavaScript library' categories
  const target = syntax.includes(value as (typeof syntax)[number]) ? syntax : jsLib
  target.forEach(item => (options[item] = false))
  // Select new one
  options[value as Option] = true
}
