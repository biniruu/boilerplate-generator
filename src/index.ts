import generateEslintConfig from '@libs/eslintConfig'
import generateJestConfig from '@libs/jestConfig'
import generatePrettierConfig from '@libs/prettierConfig'
import generateStylelintConfig from '@libs/stylelintConfig'
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

const generateConfigs = {
  eslint: generateEslintConfig,
  prettier: generatePrettierConfig,
  stylelint: generateStylelintConfig,
  jest: generateJestConfig,
}

const handleFormSubmit = () => {
  if (!codeElem) {
    throw new Error('Text area is not provided.')
  }
  if (currentTabName === 'jest-setup') {
    codeElem.textContent = `import '@testing-library/jest-dom'`

    return
  }

  const config: Config = generateConfigs[currentTabName as keyof typeof generateConfigs]() || {}
  if (currentTabName === 'jest') {
    codeElem.textContent = `import type { JestConfigWithTsJest } from 'ts-jest'
    
const jestConfig: JestConfigWithTsJest =  ${stringify(config, null, 4)}
    
export default jestConfig`

    return
  }
  codeElem.textContent = `module.exports = ${stringify(config, null, 4)}`
}

const handleTabs = (selectedOption: string) => {
  if (selectedOption === 'jest') {
    const jestTab = document.querySelectorAll<HTMLButtonElement>('#jest-tab')
    jestTab.forEach(tab => {
      if (tab.classList.contains('hide')) {
        tab.classList.remove('hide')
      } else {
        tab?.classList.add('hide')
      }
    })
  }
}

const form = document.querySelector<HTMLFormElement>('#options')
form &&
  form.addEventListener(
    'click',
    e => {
      void handleFormSubmit()

      const target = e.target as HTMLInputElement
      const value = target.value
      handleTabs(value)
    },
    { passive: true },
  )

// Init content
window.onload = () => handleFormSubmit()
