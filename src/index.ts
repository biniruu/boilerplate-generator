import { objOptions } from '@data/options'
import generateCommand from '@generators/command'
import generateConfig from '@generators/config'
import generateFile from '@generators/file'
import toggleTabs from '@libs/toggleTabs'
import copyToClipboard from '@utils/copyToClipboard'
import { isConfig, isFile, isHtmlButtonElement, isHtmlInputElement, isOption, isTab } from '@utils/typeGuards'
import type { Option, Tab } from '_types'
import './style.css'

let currentTab: Tab = 'eslint'

const provideContents = (tab: Tab = currentTab) => {
  toggleTabs(tab)
  provideConfig(tab)
}

// Handle click inputs and tabs
const handleEvent = (e: MouseEvent) => {
  const target = e.target
  if (isHtmlButtonElement(target) || isHtmlInputElement(target)) {
    const value = target.value
    // Handle inputs in the sidebar
    if (isHtmlInputElement(target) && isOption(value)) {
      // (objOptions[value] = !objOptions[value]) means that togging checkbox
      radioBtns.includes(value) ? handleRadioBtns(value) : (objOptions[value] = !objOptions[value])
      provideContents(currentTab)
    }
    // Toggle 'active' css class on inputs in 'Syntax' and 'JavaScript library' categories in the sidebar
    if (isHtmlButtonElement(target) && isTab(value)) {
      const tablinkElems = document.querySelectorAll<HTMLButtonElement>('.tablinks')
      tablinkElems.forEach(tablink => tablink.classList.remove('active'))
      target.classList.add('active')
      provideConfig(value)
    }
  }
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
const tabElems = document.querySelector<HTMLDivElement>('#tabs-wrapper')
tabElems && tabElems.addEventListener('click', handleEvent, { passive: true })
const form = document.querySelector<HTMLFormElement>('#options')
form && form.addEventListener('click', handleEvent, { passive: true })

// Show code and commands to the code windows
const provideConfig = (tab: Tab) => {
  currentTab = tab
  if (codeElem) {
    codeElem.textContent = switchTab(tab)
  }
}
const switchTab = (tab: Tab) => {
  if (isConfig(tab)) {
    return generateConfig(tab, objOptions)
  }
  if (isFile(tab)) {
    return generateFile(tab, objOptions)
  }
  if (tab === 'terminal') {
    return generateCommand(objOptions)
  }
  return ''
}
const codeElem = document.querySelector<HTMLElement>('#code')

// Copy code to clipboard
const copyBtn = document.querySelector<HTMLButtonElement>('#btn-copy')
copyBtn &&
  copyBtn.addEventListener('click', () => {
    if (codeElem) {
      void copyToClipboard(codeElem.textContent ?? '')
    }
  })

// Init content
const initContents = () => {
  // Make values 'typescript' and 'nothing' in 'config' variable as true
  const syntax = document.querySelector<HTMLInputElement>('input[name=syntax]:checked')?.value
  const jsLib = document.querySelector<HTMLInputElement>('input[name=js-lib]:checked')?.value
  if (syntax && isOption(syntax)) {
    objOptions[syntax] = true
  }
  if (jsLib && isOption(jsLib)) {
    objOptions[jsLib] = true
  }
  provideContents()
}
window.onload = initContents
