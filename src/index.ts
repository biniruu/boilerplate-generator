import options from '@data/options'
import generateCommand from '@generators/command'
import generateConfig from '@generators/config'
import type { Tab } from '_types'
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
const syntax = ['typescript', 'javascript']
const jsLib = ['nothing', 'gatsby', 'next', 'nuxt', 'react', 'vue']
const radioBtns = [...syntax, ...jsLib]
const formEvent = (e: MouseEvent) => {
  const target = e.target as HTMLInputElement
  const value = target.value as keyof typeof options

  // Avoid invoking this function when user clicked outside of input
  if (!value) {
    return
  }
  if (radioBtns.includes(value)) {
    handleRadioBtns(value)
  } else {
    options[value] = !options[value]
  }

  provideContents(currentTab)
}
const handleRadioBtns = (value: string) => {
  // Reset inputs in 'Syntax' and 'JavaScript library' categories
  const target = syntax.includes(value) ? syntax : jsLib
  target.forEach(item => (options[item as keyof typeof options] = false))
  // Select new one
  options[value as keyof typeof options] = true
}
const form = document.querySelector<HTMLFormElement>('#options')
form && form.addEventListener('click', formEvent, { passive: true })

// Show code and commands to the code windows
const provideConfig = (tab: Tab) => {
  currentTab = tab
  if (codeElem) {
    codeElem.textContent = generateConfig(tab, options)
  }
}
const provideCommand = () => {
  if (bashElem) {
    bashElem.textContent = generateCommand(options)
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
  const syntax = document.querySelector<HTMLInputElement>('input[name=syntax]:checked')?.value as keyof typeof options
  const jsLib = document.querySelector<HTMLInputElement>('input[name=js-lib]:checked')?.value as keyof typeof options
  options[syntax] = true
  options[jsLib] = true

  provideContents()
}
window.onload = initContents
