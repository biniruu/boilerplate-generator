import controlElements from '@libs/controlElements'
import eslintConfig from '@libs/eslintConfig'
// import generateEslintConfig from '@libs/generators/eslint'
// import generateStylelintConfig from '@libs/generators/stylelint'
// import generatePrettierConfig from '@libs/generators/prettier'
import generateCommands from '@libs/generators/commands'
import generateNextConfig from '@libs/generators/next'
import generateJestConfig from '@libs/jestConfig'
import generatePostcssConfig from '@libs/postcss'
import prettierConfig from '@libs/prettierConfig'
import stylelintConfig from '@libs/stylelintConfig'
import type { Config } from '_types'
import { stringify } from 'javascript-stringify'
import './style.css'

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
      const value = target.value
      if (value) {
        currentTabName = value
        handleFormSubmit()
      }
    },
    { passive: true },
  )

const codeElem = document.querySelector<HTMLElement>('#code')

const generateConfigs = {
  eslint: eslintConfig,
  prettier: prettierConfig,
  stylelint: stylelintConfig,
  jest: generateJestConfig,
  postcss: generatePostcssConfig,
}

const gitignoreConfig = {
  gitignore: await import('@data/gitignore/gitignore' /* webpackChunkName: "gitignore" */),
  react: await import('@data/gitignore/react' /* webpackChunkName: "gitignore-react" */),
  vue: await import('@data/gitignore/vue' /* webpackChunkName: "gitignore-vue" */),
  wordpress: await import('@data/gitignore/wordpress' /* webpackChunkName: "gitignore-wordpress" */),
  gatsby: await import('@data/gitignore/gatsby' /* webpackChunkName: "gitignore-gatsby" */),
}

const webpackConfig = await import('@data/webpack/webpack' /* webpackChunkName: "webpack" */)
const viteConfig = await import('@data/vite/vite' /* viteChunkName: "vite" */)

const handleFormSubmit = () => {
  if (!codeElem) {
    throw new Error('Text area is not provided.')
  }
  if (currentTabName === 'webpack') {
    codeElem.textContent = webpackConfig.default

    return
  }
  if (currentTabName === 'vite') {
    codeElem.textContent = viteConfig.default

    return
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
  if (currentTabName === 'postcss') {
    codeElem.textContent = `module.exports = ${stringify(config, null, 4)}`

    return
  }
  codeElem.textContent = `module.exports = ${stringify(config, null, 4)}`
}

const tabName = {
  jest: '#jest-tab',
  postcss: '#postcss-tab',
  webpack: '#webpack-tab',
  vite: '#vite-tab',
}

const handleTabs = (selectedOption: string) => {
  if (Object.hasOwn(tabName, selectedOption)) {
    const currentTab = document.querySelectorAll<HTMLButtonElement>(tabName[selectedOption as keyof typeof tabName])
    currentTab.forEach(tab => {
      if (tab.classList.contains('hide')) {
        tab.classList.remove('hide')
      } else {
        tab?.classList.add('hide')
      }
    })
  }
}

// Toggle Vite config when Web Development Library options are changed
const handleViteOption = () => {
  const viteOptionWrapperElem = document.querySelector<HTMLSpanElement>('#vite-wrapper')
  const webDevLibOption = document.querySelector<HTMLInputElement>('input[name=web-development-library]:checked')

  switch (webDevLibOption?.value) {
    case 'react':
      controlElements({ target: 'viteWrapper', action: 'show' })
      break
    default:
      if (!controlElements({ target: 'viteTab', action: 'getState', state: 'show' })) {
        controlElements({ target: 'vite', action: 'uncheck' })

        void handleTabs('vite')
        currentTabName = 'eslint'
        handleFormSubmit()
      }
      viteOptionWrapperElem?.classList.add('hide')
      controlElements({ target: 'viteWrapper', action: 'hide' })
      break
  }
}

const form = document.querySelector<HTMLFormElement>('#options')
form &&
  form.addEventListener(
    'click',
    e => {
      void handleFormSubmit()

      // TODO: Set another tab to active when toggle same option
      const target = e.target as HTMLInputElement
      const value = target.value
      value && handleTabs(value)

      handleViteOption()
    },
    { passive: true },
  )

// Init content
// window.onload = () => handleFormSubmit()

const config = {
  gatsby: true,
  graphql: true,
  jest: true,
  react: true,
  next: true,
  nuxt: true,
  postcss: true,
  pug: true,
  scss: true,
  storybook: true,
  styledComponents: false,
  tailwind: true,
  three: true,
  typescript: true,
  tanstackQuery: true,
  vite: true,
  // Not yet installed
  vue: false,
  webpack: true,
  wordpress: true,
}

const result = () => {
  // const result = generateEslintConfig(config)
  // const result = generateStylelintConfig(config)
  // const result = generatePrettierConfig(config)
  // const result = tailwindConfig
  const result = generateNextConfig(config)

  return result
}

const parseCommands = (commands: string[]) => {
  const parsedCommands = commands.join(', ')

  return parsedCommands
}

const result2 = () => {
  const { devDependencies } = generateCommands(config)

  return `yarn add -D ${stringify(devDependencies, parseCommands, 2)}`
}

const bashElem = document.querySelector<HTMLElement>('#bash')

const newStart = () => {
  if (codeElem) {
    codeElem.textContent = result()
  }
  if (bashElem) {
    bashElem.textContent = result2()
  }
}

window.onload = newStart
