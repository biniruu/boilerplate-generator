import type { SelectOptions } from '_types'

const getTestCommands = (configOptions: SelectOptions) => {
  const hasJest = configOptions.jest
  const hasNext = configOptions.next
  const hasNuxt = configOptions.nuxt
  const hasPostcss = configOptions.postcss
  const hasReact = configOptions.react
  const hasTailwind = configOptions.tailwind
  const hasTypescript = configOptions.typescript
  const hasVue = configOptions.vue
  const hasCssModule = hasPostcss || hasTailwind

  const testDevDependencies: string[] = []

  if (hasJest) {
    /**
     * identity-obj-proxy
     * {@link https://github.com/keyz/identity-obj-proxy#readme}
     */
    if (hasCssModule) {
      if (hasTypescript) {
        testDevDependencies.push('@types/identity-obj-proxy')
      }
      testDevDependencies.push('identity-obj-proxy')
    }
    /**
     * @testing-library/react (React Testing Library)
     * {@link https://testing-library.com/docs/react-testing-library/intro/})
     *
     * @testing-library/react-hooks (react-hooks-testing-library)
     * {@link https://github.com/testing-library/react-hooks-testing-library#readme}
     *
     * react-test-renderer (Test Renderer)
     * {@link https://legacy.reactjs.org/docs/test-renderer.html}
     */
    if (hasReact || hasNext) {
      testDevDependencies.push(
        '@testing-library/react',
        '@testing-library/react-hooks',
        '@types/react-test-renderer',
        'react-test-renderer',
      )
    }
    /**
     * @testing-library/vue (Vue Testing Library)
     * {@link https://testing-library.com/docs/vue-testing-library/intro/}
     *
     * @vue/vue3-jest
     * {@link https://github.com/vuejs/vue-jest#readme}
     */
    if (hasNuxt || hasVue) {
      testDevDependencies.push('@testing-library/vue', '@vue/vue3-jest')
    }
    /**
     * @testing-library/dom (DOM Testing Library)
     * {@link https://testing-library.com/docs/dom-testing-library/intro/}
     *
     * @testing-library/jest-dom (jest-dom)
     * {@link https://github.com/testing-library/jest-dom#readme}
     *
     * @testing-library/user-event (user-event)
     * {@link https://github.com/testing-library/user-event#readme}
     *
     * jest (Jest)
     * {@link https://jestjs.io}
     *
     * jest-environment-jsdom
     * {@link https://github.com/jestjs/jest#readme}
     *
     * jest-watch-typeahead
     * {@link https://github.com/jest-community/jest-watch-typeahead#jest-watch-typeahead}
     *
     * jsdom
     * {@link https://github.com/jsdom/jsdom#readme}
     *
     * msw (Mock Service Worker)
     * {@link https://mswjs.io}
     *
     * ts-jest
     * {@link https://kulshekhar.github.io/ts-jest/}
     * ts-jest is necessary when you’re working in a development environment, since it provides types of jest configuration
     *
     *
     * If you have added 'jest', you don't need to add these packages: jest-resolve and jest-resolve-dependencies.
     * I recommend adding @types/jest even if it is not a TypeScript project because of its IntelliSense.
     */
    testDevDependencies.push(
      '@testing-library/dom',
      '@testing-library/jest-dom',
      '@testing-library/user-event',
      '@types/jest',
      'jest',
      'jest-environment-jsdom',
      'jest-watch-typeahead',
      'jsdom',
      'msw',
      'ts-jest',
    )
  }

  return {
    testDevDependencies,
  }
}

export default getTestCommands
