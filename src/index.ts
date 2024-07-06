import { objOptions } from '@data/options'
import generateCommand from '@generators/command'
import generateConfig from '@generators/config'
import type { Option, Tab } from '_types'
import './style.css'

// Toggle 'active' css class on inputs in 'Syntax' and 'JavaScript library' categories in the sidebar
const tabEvent = (e: MouseEvent) => {
  const tablinkElems = document.querySelectorAll<HTMLButtonElement>('.tablinks')
  tablinkElems.forEach(tablink => tablink.classList.remove('active'))

  const target = e.target as HTMLButtonElement
  const value = target.value as Tab

  // Avoid invoking this function when user clicked outside of input
  if (!value) {
    return
  }
  target.classList.add('active')
  provideConfig(value)
}
let currentTab: Tab = 'eslint'
const tabElems = document.querySelector<HTMLDivElement>('#tabs')
tabElems && tabElems.addEventListener('click', tabEvent, { passive: true })

// Handle inputs in the sidebar
const syntax: Option[] = ['typescript', 'javascript']
const jsLib: Option[] = ['nothing', 'gatsby', 'next', 'nuxt', 'react', 'vue']
const radioBtns = [...syntax, ...jsLib]
const formEvent = (e: MouseEvent) => {
  const target = e.target as HTMLInputElement
  const value = target.value as Option

  // Avoid invoking this function when user clicked outside of input
  if (!value) {
    return
  }
  if (radioBtns.includes(value)) {
    handleRadioBtns(value)
  } else {
    objOptions[value] = !objOptions[value]
  }

  provideContents(currentTab)
}
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
    codeElem.textContent = generateConfig(tab, objOptions)
  }
}
const provideCommand = () => {
  if (bashElem) {
    bashElem.textContent = generateCommand(objOptions)
  }
}
const codeElem = document.querySelector<HTMLElement>('#code')
const bashElem = document.querySelector<HTMLElement>('#bash')

// Init content
const provideContents = (tab: Tab = currentTab) => {
  provideConfig(tab)
  provideCommand()
}
const initContents = () => {
  // Make values 'typescript' and 'nothing' in 'config' variable as true
  const syntax = document.querySelector<HTMLInputElement>('input[name=syntax]:checked')?.value as Option
  const jsLib = document.querySelector<HTMLInputElement>('input[name=js-lib]:checked')?.value as Option
  objOptions[syntax] = true
  objOptions[jsLib] = true

  provideContents()
}
window.onload = initContents
