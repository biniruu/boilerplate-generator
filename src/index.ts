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

const gitignoreConfig = {
  gitignore: await import('@data/gitignore/gitignore' /* webpackChunkName: "gitignore" */),
  react: await import('@data/gitignore/react' /* webpackChunkName: "gitignore-react" */),
  vue: await import('@data/gitignore/vue' /* webpackChunkName: "gitignore-vue" */),
  wordpress: await import('@data/gitignore/wordpress' /* webpackChunkName: "gitignore-wordpress" */),
  gatsby: await import('@data/gitignore/gatsby' /* webpackChunkName: "gitignore-gatsby" */),
}

const handleFormSubmit = () => {
  if (!codeElem) {
    throw new Error('Text area is not provided.')
  }
  if (currentTabName === 'gitignore') {
    const selectedWebDevLibOption = document.querySelector<HTMLInputElement>(
      'input[name=web-development-library]:checked',
    )
    if (!selectedWebDevLibOption) {
      throw new Error('Something went wrong. Please reload this page.')
    }
    switch (selectedWebDevLibOption.value) {
      case 'react':
      case 'next':
        codeElem.textContent = gitignoreConfig.react.default
        break
      case 'vue':
      case 'nuxt':
        codeElem.textContent = gitignoreConfig.vue.default
        break
      case 'wordpress':
        codeElem.textContent = gitignoreConfig.wordpress.default
        break
      default:
        codeElem.textContent = gitignoreConfig.gitignore.default
    }

    return
  }
  if (currentTabName === 'jest-setup') {
    codeElem.textContent = `import '@testing-library/jest-dom'`

    return
  }
  if (!Object.hasOwn(generateConfigs, currentTabName)) {
    throw new Error('Something went wrong. Please reload this page.')
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
