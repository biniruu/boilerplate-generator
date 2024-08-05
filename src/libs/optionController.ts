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
import type { Option, SelectOptions } from '_types'

import { reloadEditor, showReadme } from './editorController'
import { getActivatedTab } from './tabController'
import toggleTabs from './toggleTabs'

const syntax: Option[] = ['typescript', 'javascript']
const jsLib: Option[] = ['nothing', 'gatsby', 'next', 'nuxt', 'react', 'vue', 'wordpress']
const radioBtns = [...syntax, ...jsLib]

export const handleOptions = (value: string, options: SelectOptions) => {
  if (isOption(value)) {
    // (options[value] = !options[value]) means that togging checkbox
    radioBtns.includes(value) ? handleRadioBtns(value, options) : (options[value] = !options[value])
    reloadEditor(options)
  }
  if (isDynamicTabValue(value)) {
    toggleTabs(value)
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
