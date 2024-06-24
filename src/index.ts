import generateEslintConfig from '@libs/eslintConfig'
import getPrettierConfig from '@libs/prettierConfig'
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

const generatePrettierConfig = () => {
  const selectedCssLibOption = document.querySelector<HTMLInputElement>('#tailwind')
  const hasTailwind = selectedCssLibOption?.checked

  const config = getPrettierConfig(hasTailwind)

  return config
}

const generateConfigs = {
  eslint: generateEslintConfig,
  prettier: generatePrettierConfig,
}

const handleFormSubmit = () => {
  const config: Config = generateConfigs[currentTabName as keyof typeof generateConfigs]() || {}
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
