import generateCommands from '@generators/commands'
import generateConfig from '@generators/config'
import type { Tab } from '_types'
import './style.css'

// Toggle 'active' css class on inputs in 'Syntax' and 'JavaScript library' categories in the sidebar
const tabEvent = (e: MouseEvent) => {
  const tablinkElems = document.querySelectorAll<HTMLButtonElement>('.tablinks')
  tablinkElems.forEach(tablink => tablink.classList.remove('active'))

  const target = e.target as HTMLButtonElement
  target.classList.add('active')
  const value = target.value as Tab

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
  const value = target.value as keyof typeof config

  // Avoid invoking this function when user clicked outside of input
  if (!value) {
    return
  }
  if (radioBtns.includes(value)) {
    handleRadioBtns(value)
  } else {
    config[value] = !config[value]
  }

  provideContents(currentTab)
}
const handleRadioBtns = (value: string) => {
  // Reset inputs in 'Syntax' and 'JavaScript library' categories
  const target = syntax.includes(value) ? syntax : jsLib
  target.forEach(item => (config[item as keyof typeof config] = false))
  // Select new one
  config[value as keyof typeof config] = true
}
const form = document.querySelector<HTMLFormElement>('#options')
form && form.addEventListener('click', formEvent, { passive: true })

// Show code and commands to the code windows
const provideConfig = (tab: Tab) => {
  currentTab = tab
  if (codeElem) {
    codeElem.textContent = generateConfig(tab, config)
  }
}
const provideCommand = () => {
  if (bashElem) {
    bashElem.textContent = generateCommands(config)
  }
}
const codeElem = document.querySelector<HTMLElement>('#code')
const bashElem = document.querySelector<HTMLElement>('#bash')

// Init content
const provideContents = (tab: Tab = currentTab) => {
  provideConfig(tab)
  provideCommand()
}
window.onload = () => provideContents()

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
