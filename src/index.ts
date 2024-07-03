import eslintConfig from '@libs/eslintConfig'
// import generateEslintConfig from '@generators/config/eslint'
// import generateStylelintConfig from '@generators/config/stylelint'
// import generatePrettierConfig from '@generators/config/prettier'
import generateCommands from '@generators/commands'
import generateNextConfig from '@generators/config/next'
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

// const tabName = {
//   jest: '#jest-tab',
//   postcss: '#postcss-tab',
//   webpack: '#webpack-tab',
//   vite: '#vite-tab',
// }

// const handleTabs = (selectedOption: string) => {
//   if (Object.hasOwn(tabName, selectedOption)) {
//     const currentTab = document.querySelectorAll<HTMLButtonElement>(tabName[selectedOption as keyof typeof tabName])
//     currentTab.forEach(tab => {
//       if (tab.classList.contains('hide')) {
//         tab.classList.remove('hide')
//       } else {
//         tab?.classList.add('hide')
//       }
//     })
//   }
// }

// // Toggle Vite config when Web Development Library options are changed
// const handleViteOption = () => {
//   const viteOptionWrapperElem = document.querySelector<HTMLSpanElement>('#vite-wrapper')
//   const webDevLibOption = document.querySelector<HTMLInputElement>('input[name=web-development-library]:checked')

//   switch (webDevLibOption?.value) {
//     case 'react':
//       controlElements({ target: 'viteWrapper', action: 'show' })
//       break
//     default:
//       if (!controlElements({ target: 'viteTab', action: 'getState', state: 'show' })) {
//         controlElements({ target: 'vite', action: 'uncheck' })

//         void handleTabs('vite')
//         currentTabName = 'eslint'
//         handleFormSubmit()
//       }
//       viteOptionWrapperElem?.classList.add('hide')
//       controlElements({ target: 'viteWrapper', action: 'hide' })
//       break
//   }
// }

const config = {
  axios: false,
  babel: false,
  bcrypt: false,
  dayjs: false,
  dotenv: false,
  ejs: false,
  express: false,
  fileSaver: false,
  gatsby: false,
  graphql: false,
  husky: false,
  immer: false,
  javascriptStringify: false,
  jest: false,
  joi: false,
  jsdiff: false,
  jsZip: false,
  koa: false,
  lodash: false,
  markdown: false,
  mongoose: false,
  next: false,
  nextAuth: false,
  nodemon: false,
  nothing: true, // This means that no library selected
  nuxt: false,
  prism: false,
  postcss: false,
  pug: false,
  react: false,
  reactHookForm: false,
  reactInfiniteScroller: false,
  reactJoyride: false,
  recoil: false,
  redis: false,
  scss: false,
  socket: false,
  storybook: false,
  styledComponents: false,
  swr: false,
  tailwind: false,
  three: false,
  typescript: true,
  tanstackQuery: false,
  vite: false,
  vue: false, // Not yet installed
  webpack: false,
  wordpress: false,
}

const result = () => {
  // const result = generateEslintConfig(config)
  // const result = generateStylelintConfig(config)
  // const result = generatePrettierConfig(config)
  // const result = tailwindConfig
  const result = generateNextConfig(config)

  return result
}

const bashElem = document.querySelector<HTMLElement>('#bash')

const provideContents = () => {
  if (codeElem) {
    codeElem.textContent = result()
  }
  if (bashElem) {
    bashElem.textContent = generateCommands(config)
  }
}

const syntax = ['typescript', 'javascript']
const jsLib = ['nothing', 'gatsby', 'next', 'nuxt', 'react', 'vue']
const radioBtns = [...syntax, ...jsLib]

const handleRadioBtns = (value: string) => {
  const target = syntax.includes(value) ? syntax : jsLib
  target.forEach(item => (config[item as keyof typeof config] = false))
  config[value as keyof typeof config] = true
  provideContents()
}

const formEvent = (e: MouseEvent) => {
  // TODO: Set another tab to active when toggle same option
  const target = e.target as HTMLInputElement
  const value = target.value

  if (!value) {
    return
  }
  if (radioBtns.includes(value)) {
    handleRadioBtns(value)

    return
  }

  config[value as keyof typeof config] = !config[value as keyof typeof config]
  provideContents()
}

const form = document.querySelector<HTMLFormElement>('#options')
form && form.addEventListener('click', formEvent, { passive: true })

// Init content
window.onload = provideContents
