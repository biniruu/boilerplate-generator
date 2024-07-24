import getCertainConditions from '@utils/certainConditions'
import type { SelectOptions } from '_types'

const getTestCommands = (configOptions: SelectOptions) => {
  const { hasCssModule, hasJest, hasNext, hasNuxt, hasReact, hasStorybook, hasTypescript, hasVue, hasWebpack } =
    getCertainConditions(configOptions)

  const testDevDependencies: string[] = []

  if (hasJest) {
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
     * Jest Extended
     * {{@link https://jest-extended.jestcommunity.dev/docs}}
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
      'jest-extended',
      'jest-html-reporters',
      'jest-watch-typeahead',
      'jsdom',
      'msw',
      'ts-jest',
    )
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
      if (hasStorybook) {
        testDevDependencies.push('@storybook/react', '@storybook/testing-library')
      }
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
    // TODO: Edit this jsdoc
    /**
     * @storybook/addon-a11y (Accessibility testing)
     * {@link XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX}
     *
     * @storybook/addon-actions (Action logger)
     * {@link XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX}
     *
     * @storybook/addon-essentials (Essential addons)
     * {@link XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX}
     *
     * @storybook/addon-interactions (Interact with components)
     * {@link XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX}
     *
     * @storybook/addon-links (Link to other stories)
     * {@link XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX}
     *
     * @storybook/builder-webpack5 (Webpack 5)
     * {@link XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX}
     *
     * @storybook/manager-webpack5 (Webpack 5 Storybook manager)
     * {@link XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX}
     */
    if (hasStorybook && !hasReact && !hasNext) {
      if (hasWebpack) {
        testDevDependencies.push('@storybook/builder-webpack5', '@storybook/manager-webpack5')
      }
      testDevDependencies.push(
        '@storybook/addon-a11y',
        '@storybook/addon-actions',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-links',
      )
    }
  }

  return {
    testDevDependencies,
  }
}

export default getTestCommands
