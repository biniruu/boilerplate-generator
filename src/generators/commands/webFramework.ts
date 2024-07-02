import type { SelectOptions } from '_types'

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

  /**
   * body-parser
   * {@link https://github.com/expressjs/body-parser#readme}
   *
   * cors
   * {@link https://github.com/expressjs/cors#readme}
   *
   * express (Express)
   * {@link https://expressjs.com}
   */
  if (hasExpress) {
    if (hasTypescript) {
      webFrameworkDevDependencies.push('@types/body-parser', '@types/cors', '@types/express')
    }
    webFrameworkDependencies.push('body-parser', 'cors', 'express')
  }
  /**
   * react-refresh
   * {@link https://www.npmjs.com/package/react-refresh}
   */
  if (hasNext || hasReact) {
    webFrameworkDependencies.push('react-refresh')
  }
  /**
   * volar-service-vetur
   * {@link https://github.com/volarjs/services/tree/master/packages/vetur#volar-service-vetur}
   *
   * vue-tsc
   * {@link https://github.com/vuejs/language-tools/tree/master/packages/tsc#vue-tsc}
   * {@link https://github.com/vuejs/language-tools#readme}
   */
  if (hasNuxt || hasVue) {
    if (hasTypescript) {
      webFrameworkDevDependencies.push('vue-tsc')
    }
    webFrameworkDevDependencies.push('volar-service-vetur')
  }
  /**
   * react-router-dom (React Router DOM)
   * {@link https://reactrouter.com/en/main}
   */
  if (hasReact) {
    webFrameworkDependencies.push('react-router-dom')
  }
  /**
   * three (three.js)
   * {@link https://threejs.org}
   */
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
