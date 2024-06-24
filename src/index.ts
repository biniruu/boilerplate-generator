import getEslintConfigs from '@libs/eslintConfigs'
import type { Config } from '_types'
import { stringify } from 'javascript-stringify'

const mainElem = document.getElementById('app') as HTMLElement

const elem = document.createElement('textarea')
elem.classList.add('code')

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
  const eslintConfig = generateEslintConfig()
  const config: Config = eslintConfig || {}
  elem.textContent = `module.exports = ${stringify(config, null, 4)}`
  mainElem.appendChild(elem)
}

const form = document.getElementById('eslint') as HTMLFormElement
form.addEventListener('submit', e => {
  e.preventDefault()

  void handleFormSubmit()
})
