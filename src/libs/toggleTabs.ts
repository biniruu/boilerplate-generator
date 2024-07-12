import dynamicTabList from '@data/dynamicTabList'
import type { DynamicTabValueList } from '_types'

/**
 * <Always showed>
 *
 * .gitignore
 * package.json
 * terminal
 *
 * <For ESLint>
 *
 * .eslintrc.js
 * .eslintignore
 *
 * <For Prettier>
 *
 * .prettierrc
 * .prettierignore
 *
 * <For Stylelint>
 *
 * .stylelintrc.js
 * .stylelintignore
 *
 * gatsby-config.ts
 *
 * <For Gatsby.js>
 *
 * gatsby-config.ts
 *
 * <For Jest>
 *
 * jest.config.ts
 * jest.setup.ts
 *
 * <For Markdownlint>
 *
 * markdownlint.json
 *
 * <For Next.js>
 *
 * next.config.ts
 *
 * [with tanstack query or swr]
 * layout.tsx
 * reactQueryProvider.tsx
 * swrProvider.tsx
 *
 * <For Nodemon>
 *
 * nodemon.json
 *
 * <For npm>
 *
 * .npmrc
 *
 * <For Nuxt.js>
 *
 * nuxt.config.ts
 * volar.config.cjs
 *
 * <For React.js>
 * @desc In this repository, a React.js is served using Vite, so it always includes a Vite configuration.
 *
 * vite.config.ts
 *
 * <For PostCSS>
 *
 * postcss.config.js
 *
 * <For Pug>
 *
 * home.pug
 * pug-lintrc.json
 *
 * [with tanstack query or swr]
 * layout.tsx
 * reactQueryProvider.tsx
 * swrProvider.tsx
 *
 * <For Socket.io>
 *
 * socket.d.ts
 *
 * <For Tailwind CSS>
 *
 * style.css
 * tailwind.config.js
 *
 * <For TypeScript>
 *
 * declarations.d.ts
 * tsconfig.json
 * tsconfig.build.json
 * tsconfig.default.json
 * tsconfig.node.json
 * tsconfig.test.json
 * typeGuards.ts
 *
 * <For Vanilla.js>
 *
 * .babelrc
 *
 * <For Vite>
 * @desc A vite configuration is for a React.js project for now.
 *
 * vite.config.ts
 *
 * <For Webpack>
 *
 * webpack.config.ts
 */

const enabledTabs: DynamicTabValueList[] = []
const fragment = document.querySelector<HTMLTemplateElement>('#tab')
const dynamicTabsElem = document.querySelector<HTMLDivElement>('#dynamic-tabs')
const toggleTabs = (tab: DynamicTabValueList) => {
  if (enabledTabs.includes(tab)) {
    removeTab(tab)

    return
  }
  addNewTab(tab)
}
const removeTab = (tab: DynamicTabValueList) => {
  enabledTabs.splice(enabledTabs.indexOf(tab), 1)
  const element = document.querySelector<HTMLButtonElement>(`#${tab}-tab`)
  if (element) {
    element.remove()
  }
}
const addNewTab = (tab: DynamicTabValueList) => {
  enabledTabs.push(tab)
  if (fragment) {
    const instance = document.importNode(fragment.content, true).querySelector<HTMLButtonElement>('.tablinks')
    if (instance) {
      instance.textContent = dynamicTabList[tab]
      instance.id = `${tab}-tab`
      instance.value = tab
      dynamicTabsElem?.appendChild(instance)
    }
  }
}

export default toggleTabs
