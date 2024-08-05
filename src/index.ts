import { objOptions } from '@data/options'
import { showReadme } from '@libs/editorController'
import { handleOptions } from '@libs/optionController'
import { handleTab } from '@libs/tabController'
import copyToClipboard from '@utils/copyToClipboard'
import { isHtmlButtonElement, isHtmlInputElement, isOption } from '@utils/typeGuards'
import './style.css'

const options = { ...objOptions }

const elemCode = document.querySelector<HTMLElement>('#code')

// Copy code to clipboard
const elemCopyBtn = document.querySelector<HTMLButtonElement>('#btn-copy')
elemCopyBtn?.addEventListener('click', () => void copyToClipboard(elemCode?.textContent ?? ''))

// Handle click inputs and tabs
const handleEvent = (e: MouseEvent) => {
  const target = e.target
  if (isHtmlButtonElement(target) || isHtmlInputElement(target)) {
    const value = target.value
    // Handle inputs in the sidebar
    isHtmlInputElement(target) && handleOptions(value, options)
    isHtmlButtonElement(target) && handleTab(target, value, options)
  }
}

// Use handleEvent as an event listeners
const elemTabs = document.querySelector<HTMLDivElement>('#tabs-wrapper')
elemTabs?.addEventListener('click', handleEvent, { passive: true })
const form = document.querySelector<HTMLFormElement>('#options')
form?.addEventListener('click', handleEvent, { passive: true })

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
  showReadme(options)
}
window.onload = initContents
