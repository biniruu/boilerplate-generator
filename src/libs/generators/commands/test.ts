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
    if (hasCssModule) {
      if (hasTypescript) {
        testDevDependencies.push('@types/identity-obj-proxy')
      }
      testDevDependencies.push('identity-obj-proxy')
    }
    if (hasReact || hasNext) {
      testDevDependencies.push(
        '@testing-library/react',
        '@testing-library/react-hooks',
        '@types/react-test-renderer',
        'react-test-renderer',
      )
    }
    if (hasTypescript) {
      testDevDependencies.push('ts-jest')
    }
    if (hasNuxt || hasVue) {
      testDevDependencies.push('@testing-library/vue', '@vue/vue3-jest')
    }
    // If you have added 'jest', you don't need to add these packages: jest-resolve and jest-resolve-dependencies.
    // I recommend adding @types/jest even if it is not a TypeScript project because of its IntelliSense.
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
    )
  }

  return {
    testDevDependencies,
  }
}

export default getTestCommands
