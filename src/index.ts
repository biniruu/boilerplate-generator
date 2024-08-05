import { objOptions } from '@data/options'
import generateCommand from '@generators/command'
import generateConfig from '@generators/config'
import generateFile from '@generators/file'
import generateReadme from '@generators/readme'
import toggleTabs from '@libs/toggleTabs'
import copyToClipboard from '@utils/copyToClipboard'
import {
  isConfig,
  isDynamicTabValue,
  isFile,
  isHtmlButtonElement,
  isHtmlInputElement,
  isOption,
  isTab,
} from '@utils/typeGuards'
import type { Option, Tab } from '_types'
import './style.css'

const options = { ...objOptions }

// Handle click inputs and tabs
const handleEvent = (e: MouseEvent) => {
  const target = e.target
  if (isHtmlButtonElement(target) || isHtmlInputElement(target)) {
    const value = target.value
    // Handle inputs in the sidebar
    isHtmlInputElement(target) && handleOptions(value)
    isHtmlButtonElement(target) && handleTab(target, value)
  }
}
const handleTab = (target: HTMLButtonElement, value: string) => {
  // Remove 'active' class from the previous activated tab
  const elemCurrentTab = getActivatedTab()
  elemCurrentTab?.classList.remove('active')
  // Add 'active' class to the clicked tab
  target.classList.add('active')
  isTab(value) && provideConfig(value)
}
const handleOptions = (value: string) => {
  if (isOption(value)) {
    // (options[value] = !options[value]) means that togging checkbox
    radioBtns.includes(value) ? handleRadioBtns(value) : (options[value] = !options[value])
    reloadEditor()
  }
  if (isDynamicTabValue(value)) {
    toggleTabs(value)
  }
  // If the currently active tab within the dynamic tabs is removed, the 'README.md' tab will be displayed instead
  const elemCurrentTab = getActivatedTab()
  if (!elemCurrentTab?.classList.contains('active')) {
    showReadme()
  }
}
const reloadEditor = () => {
  const elemCurrentTab = getActivatedTab()
  const value = elemCurrentTab?.value
  if (value && isTab(value)) {
    provideConfig(value)
  }
}
const getActivatedTab = () => {
  const elemTablinks = document.querySelectorAll<HTMLButtonElement>('.tablinks')
  const elemCurrentTab = Array.from(elemTablinks).find(tab => tab.classList.contains('active'))

  return elemCurrentTab
}
const handleRadioBtns = (value: Option) => {
  // Reset inputs in 'Syntax' and 'JavaScript library' categories
  const target = syntax.includes(value) ? syntax : jsLib
  target.forEach(item => (options[item] = false))
  // Select new one
  options[value] = true
}
const syntax: Option[] = ['typescript', 'javascript']
const jsLib: Option[] = ['nothing', 'gatsby', 'next', 'nuxt', 'react', 'vue', 'wordpress']
const radioBtns = [...syntax, ...jsLib]

// Use handleEvent as an event listeners
const elemTabs = document.querySelector<HTMLDivElement>('#tabs-wrapper')
elemTabs?.addEventListener('click', handleEvent, { passive: true })
const form = document.querySelector<HTMLFormElement>('#options')
form?.addEventListener('click', handleEvent, { passive: true })

// Show code and commands to the code windows
const provideConfig = (tab: Tab) => {
  if (elemCode) {
    elemCode.textContent = switchTab(tab)
  }
}
const switchTab = (tab: Tab) => {
  if (isConfig(tab)) {
    return generateConfig(tab, options)
  }
  if (isFile(tab)) {
    return generateFile(tab, options)
  }
  if (tab === 'terminal') {
    return generateCommand(options)
  }
  if (tab === 'readme') {
    return generateReadme(options)
  }
  return ''
}

// Copy code to clipboard
const elemCopyBtn = document.querySelector<HTMLButtonElement>('#btn-copy')
elemCopyBtn?.addEventListener('click', () => void copyToClipboard(elemCode?.textContent ?? ''))

// Init content
const initContents = () => {
  const syntax = document.querySelector<HTMLInputElement>('input[name=syntax]:checked')?.value
  const jsLib = document.querySelector<HTMLInputElement>('input[name=js-lib]:checked')?.value
  if (syntax && isOption(syntax)) {
    options[syntax] = true
  }
  if (jsLib && isOption(jsLib)) {
    options[jsLib] = true
  }
  showReadme()
}
window.onload = initContents

// Reusable functions
export const showReadme = () => {
  elemReadme?.click()
  provideConfig('readme')
}
const elemReadme = document.querySelector<HTMLButtonElement>('#readme-tab')

// Reusable elements
const elemCode = document.querySelector<HTMLElement>('#code')
