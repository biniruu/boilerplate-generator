import { objOptions } from '@data/options'
import generateCommand from '@generators/command'
import generateConfig from '@generators/config'
import generateFile from '@generators/file'
import { isConfig, isFile, isHtmlButtonElement, isHtmlInputElement, isOption, isTab } from '@utils/typeGuards'
import type { Option, Tab } from '_types'
import './style.css'

// Toggle 'active' css class on inputs in 'Syntax' and 'JavaScript library' categories in the sidebar
const tabEvent = (e: MouseEvent) => {
  const tablinkElems = document.querySelectorAll<HTMLButtonElement>('.tablinks')
  tablinkElems.forEach(tablink => tablink.classList.remove('active'))

  const target = e.target
  // Avoid invoking this function when user clicked outside of tab buttons
  if (!isHtmlButtonElement(target) || !target) {
    // TODO: Remove this if statement
    if (process.env.NODE_ENV === 'development') {
      console.warn('No target found.')
    }

    return
  }

  const value = target.value
  if (value && isTab(value)) {
    target.classList.add('active')
    provideConfig(value)
  }
}
let currentTab: Tab = 'eslint'
const tabElems = document.querySelector<HTMLDivElement>('#tabs')
tabElems && tabElems.addEventListener('click', tabEvent, { passive: true })

// Handle inputs in the sidebar
const formEvent = (e: MouseEvent) => {
  const target = e.target
  // Avoid invoking this function when user clicked outside of option inputs
  if (!isHtmlInputElement(target) || !target) {
    // TODO: Remove this if statement
    if (process.env.NODE_ENV === 'development') {
      console.warn('No target found.')
    }

    return
  }

  const value = target.value
  if (value && isOption(value)) {
    radioBtns.includes(value) ? handleRadioBtns(value) : (objOptions[value] = !objOptions[value])
  }

  provideContents(currentTab)
}
const syntax: Option[] = ['typescript', 'javascript']
const jsLib: Option[] = ['nothing', 'gatsby', 'next', 'nuxt', 'react', 'vue']
const radioBtns = [...syntax, ...jsLib]
const handleRadioBtns = (value: Option) => {
  // Reset inputs in 'Syntax' and 'JavaScript library' categories
  const target = syntax.includes(value) ? syntax : jsLib
  target.forEach(item => (objOptions[item] = false))
  // Select new one
  objOptions[value] = true
}
const form = document.querySelector<HTMLFormElement>('#options')
form && form.addEventListener('click', formEvent, { passive: true })

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

// Init content
const provideContents = (tab: Tab = currentTab) => {
  provideConfig(tab)
}
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
