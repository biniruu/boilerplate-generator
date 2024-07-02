import { SelectOptions } from '_types'

const getUtilityCommands = (configOptions: SelectOptions) => {
  const hasDotenv = configOptions.dotenv
  const hasImmer = configOptions.immer
  const hasLodash = configOptions.lodash
  const hasMarkdown = configOptions.markdown
  const hasNext = configOptions.next
  const hasNodemon = configOptions.nodemon
  const hasNuxt = configOptions.nuxt
  const hasReact = configOptions.react
  const hasReactInfiniteScroller = configOptions.reactInfiniteScroller
  const hasTypescript = configOptions.typescript
  const hasWebpack = configOptions.webpack

  const utilityDependencies: string[] = []
  const utilityDevDependencies: string[] = []

  if (hasDotenv) {
    if (hasNuxt) {
      utilityDevDependencies.push('dotenv-expand')
    }
    if (hasReact) {
      utilityDevDependencies.push('dotenv', 'dotenv-expand', 'env-cmd')
    }
  }
  if (hasImmer && (hasReact || hasNext)) {
    utilityDependencies.push('immer', 'use-immer')
  }
  if (hasLodash) {
    if (!hasNext || !hasReact || !hasNuxt || !hasWebpack) {
      utilityDependencies.push('lodash')
    }
    utilityDependencies.push('lodash-es')
    utilityDevDependencies.push('@types/lodash-es')
  }
  if (hasMarkdown) {
    utilityDevDependencies.push('markdownlint')
  }
  if (hasNodemon) {
    utilityDependencies.push('nodemon')
  }
  if (hasReactInfiniteScroller) {
    if (hasTypescript) {
      utilityDevDependencies.push('@types/react-infinite-scroller')
    }
    utilityDependencies.push('react-infinite-scroller')
  }

  return {
    utilityDependencies,
    utilityDevDependencies,
  }
}

export default getUtilityCommands
