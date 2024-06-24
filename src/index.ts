import getEslintConfigs from '@libs/eslintConfigs'
import type { Config } from '_types'
import { stringify } from 'javascript-stringify'

let currentTabName = 'eslint'
const tabElem = document.querySelector<HTMLDivElement>('#tab')
tabElem &&
  tabElem.addEventListener(
    'click',
    e => {
      const tablinkElems = document.querySelectorAll<HTMLButtonElement>('.tablinks')
      tablinkElems.forEach(tablink => tablink.classList.remove('active'))

      const target = e.target as HTMLButtonElement
      target.classList.add('active')
      currentTabName = target.value
      handleFormSubmit()
    },
    { passive: true },
  )

const codeElem = document.querySelector<HTMLTextAreaElement>('#code')

const generateEslintConfig = () => {
  const selectedCheckboxOptions = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]:checked')
  const selectedSyntax = document.querySelector<HTMLInputElement>('input[name="syntax"]:checked')
  const selectedWebDevLib = document.querySelector<HTMLInputElement>('input[name="web-development-library"]:checked')

  const checkboxOptions = Array.from(selectedCheckboxOptions).map((checkbox: HTMLInputElement) => checkbox.value)
  const selectedOptions = [...checkboxOptions, selectedSyntax!.value]
  const options =
    selectedWebDevLib!.value === 'nothing' ? selectedOptions : [...selectedOptions, selectedWebDevLib!.value]

  const config = (getEslintConfigs as (selectedVal: string[]) => { [key: string]: unknown })(options)

  return config
}

const handleFormSubmit = () => {
  const configs = {
    eslint: generateEslintConfig,
  }
  const config: Config = configs[currentTabName as keyof typeof configs]() || {}
  if (codeElem) {
    codeElem.textContent = `module.exports = ${stringify(config, null, 4)}`
  }
}

const form = document.querySelector<HTMLFormElement>('#eslint')
form &&
  form.addEventListener(
    'click',
    e => {
      const target = e.target as HTMLInputElement
      target.value && void handleFormSubmit()
    },
    { passive: true },
  )

// Init content
window.onload = () => handleFormSubmit()
