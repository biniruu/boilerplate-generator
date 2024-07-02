import { SelectOptions } from '_types'

const getWebFrameworkCommands = (configOptions: SelectOptions) => {
  const hasExpress = configOptions.express
  const hasNext = configOptions.next
  const hasNuxt = configOptions.nuxt
  const hasReact = configOptions.react
  const hasThree = configOptions.three
  const hasTypescript = configOptions.typescript
  const hasVue = configOptions.vue

  const webFrameworkDependencies: string[] = []
  const webFrameworkDevDependencies: string[] = []

  if (hasExpress) {
    if (hasTypescript) {
      webFrameworkDevDependencies.push('@types/body-parser', '@types/cors', '@types/express')
    }
    webFrameworkDependencies.push('body-parser', 'cors', 'express')
  }
  if (hasNext) {
    webFrameworkDependencies.push('react-refresh')
  }
  if (hasNuxt || hasVue) {
    webFrameworkDevDependencies.push('volar-service-vetur', 'vue-tsc')
  }
  if (hasReact) {
    webFrameworkDependencies.push('react-router-dom')
    webFrameworkDevDependencies.push('@types/react-test-renderer', 'react-test-renderer')
  }
  if (hasThree) {
    if (hasTypescript) {
      webFrameworkDevDependencies.push('@types/three')
    }
    webFrameworkDependencies.push('three')
  }

  return {
    webFrameworkDependencies,
    webFrameworkDevDependencies,
  }
}

export default getWebFrameworkCommands
