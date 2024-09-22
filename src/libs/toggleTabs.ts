import dynamicTabList from '@data/dynamicTabList'
import { getButtonElem } from '@utils/getElements'
import type { DynamicTabValueList } from '_types'

// <Always showed>
//
// .gitignore
// package.json
// terminal
//
// <For ESLint>
//
// .eslintrc.js
// .eslintignore
//
// <For Prettier>
//
// .prettierrc
// .prettierignore
//
// <For Stylelint>
//
// .stylelintrc.js
// .stylelintignore
//
// gatsby-config.ts
//
// <For Gatsby.js>
//
// gatsby-config.ts
//
// <For Jest>
//
// jest.config.ts
// jest.setup.ts
//
// <For Markdownlint>
//
// markdownlint.json
//
// <For Next.js>
//
// next.config.ts
//
// [with tanstack query or swr]
// layout.tsx
// reactQueryProvider.tsx
// swrProvider.tsx
//
// <For Nodemon>
//
// nodemon.json
//
// <For npm>
//
// .npmrc
//
// <For Nuxt.js>
//
// nuxt.config.ts
// volar.config.cjs
//
// <For React.js>
// @desc In this repository, a React.js is served using Vite, so it always includes a Vite configuration.
//
// vite.config.ts
//
// <For PostCSS>
//
// postcss.config.js
//
// <For Pug>
//
// home.pug
// pug-lintrc.json
//
// [with tanstack query or swr]
// layout.tsx
// reactQueryProvider.tsx
// swrProvider.tsx
//
// <For Socket.io>
//
// socket.d.ts
//
// <For Tailwind CSS>
//
// style.css
// tailwind.config.js
//
// <For TypeScript>
//
// declarations.d.ts
// tsconfig.json
// tsconfig.build.json
// tsconfig.default.json
// tsconfig.node.json
// tsconfig.test.json
// typeGuards.ts
//
// <For Vanilla.js>
//
// .babelrc
//
// <For Vite>
// A vite configuration is for a React.js project for now.
//
// vite.config.ts
//
// <For Webpack>
//
// webpack.config.ts

const lints = ['eslint', 'prettier', 'stylelint']

const toggleTabs = (tab: DynamicTabValueList, isChecked: boolean) => (isChecked ? addNewTabs(tab) : removeTabs(tab))

const removeTabs = (tab: DynamicTabValueList) => {
  const element = getButtonElem(`${tab}-tab`)
  element && element.remove()
  removeAdditionalTabs(tab)
}
// When a lint tab is removed, remove the corresponding ignore tab as well
const removeAdditionalTabs = (tab: DynamicTabValueList) =>
  lints.includes(tab) && removeTabs(`${tab}-ignore` as DynamicTabValueList)

const addNewTabs = (tab: DynamicTabValueList) => {
  createTab(tab)
  addAdditionalTabs(tab)
}
// When a lint tab is created, create the corresponding ignore tab as well
const addAdditionalTabs = (tab: DynamicTabValueList) =>
  lints.includes(tab) && createTab(`${tab}-ignore` as DynamicTabValueList)

const dynamicTabsElem = document.querySelector<HTMLDivElement>('#dynamic-tabs')
const fragment = document.querySelector<HTMLTemplateElement>('#tab')
export const createTab = (tab: DynamicTabValueList) => {
  const instance = fragment && document.importNode(fragment.content, true).querySelector<HTMLButtonElement>('.tablink')
  if (instance) {
    instance.textContent = dynamicTabList[tab]
    instance.id = `${tab}-tab`
    instance.value = tab
    dynamicTabsElem?.appendChild(instance)
  }
}

export default toggleTabs
