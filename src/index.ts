// TODO: Make objOptions immutable
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
  const currentTab = getActivatedTab()
  currentTab?.classList.remove('active')
  // Add 'active' class to the clicked tab
  target.classList.add('active')
  isTab(value) && provideConfig(value)
}
const handleOptions = (value: string) => {
  if (isOption(value)) {
    // (objOptions[value] = !objOptions[value]) means that togging checkbox
    radioBtns.includes(value) ? handleRadioBtns(value) : (objOptions[value] = !objOptions[value])
    reloadEditor()
  }
  if (isDynamicTabValue(value)) {
    toggleTabs(value)
  }
  // If the currently active tab within the dynamic tabs is removed, the 'README.md' tab will be displayed instead
  const currentTab = getActivatedTab()
  if (!currentTab?.classList.contains('active')) {
    showReadme()
  }
}
const reloadEditor = () => {
  const currentTab = getActivatedTab()
  const value = currentTab?.value
  if (value && isTab(value)) {
    provideConfig(value)
  }
}
const getActivatedTab = () => {
  const tablinkElems = document.querySelectorAll<HTMLButtonElement>('.tablinks')
  const currentTab = Array.from(tablinkElems).find(tab => tab.classList.contains('active'))

  return currentTab
}
const handleRadioBtns = (value: Option) => {
  // Reset inputs in 'Syntax' and 'JavaScript library' categories
  const target = syntax.includes(value) ? syntax : jsLib
  target.forEach(item => (objOptions[item] = false))
  // Select new one
  objOptions[value] = true
}
const syntax: Option[] = ['typescript', 'javascript']
const jsLib: Option[] = ['nothing', 'gatsby', 'next', 'nuxt', 'react', 'vue', 'wordpress']
const radioBtns = [...syntax, ...jsLib]

// Use handleEvent as an event listeners
const tabElems = document.querySelector<HTMLDivElement>('#tabs-wrapper')
tabElems?.addEventListener('click', handleEvent, { passive: true })
const form = document.querySelector<HTMLFormElement>('#options')
form?.addEventListener('click', handleEvent, { passive: true })

// Show code and commands to the code windows
const provideConfig = (tab: Tab) => {
  if (codeElem) {
    codeElem.textContent = switchTab(tab)
  }
}
const switchTab = (tab: Tab) => {
  if (isConfig(tab)) {
    return generateConfig(tab)
  }
  if (isFile(tab)) {
    return generateFile(tab)
  }
  if (tab === 'terminal') {
    return generateCommand()
  }
  if (tab === 'readme') {
    return generateReadme(objOptions)
  }
  return ''
}

// Copy code to clipboard
const copyBtn = document.querySelector<HTMLButtonElement>('#btn-copy')
copyBtn?.addEventListener('click', () => void copyToClipboard(codeElem?.textContent ?? ''))

// Init content
const initContents = () => {
  const syntax = document.querySelector<HTMLInputElement>('input[name=syntax]:checked')?.value
  const jsLib = document.querySelector<HTMLInputElement>('input[name=js-lib]:checked')?.value
  if (syntax && isOption(syntax)) {
    objOptions[syntax] = true
  }
  if (jsLib && isOption(jsLib)) {
    objOptions[jsLib] = true
  }
  showReadme()
}
window.onload = initContents

// Reusable functions
export const showReadme = () => {
  readmeElem?.click()
  provideConfig('readme')
}
const readmeElem = document.querySelector<HTMLButtonElement>('#readme-tab')

// Reusable elements
const codeElem = document.querySelector<HTMLElement>('#code')
