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
      'msw',
      'ts-jest',
    )
    /**
     * identity-obj-proxy
     * {@link https://github.com/keyz/identity-obj-proxy#readme}
     */
    if (hasCssModule) {
      testDevDependencies.push('identity-obj-proxy')
      hasTypescript && testDevDependencies.push('@types/identity-obj-proxy')
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
      hasStorybook && testDevDependencies.push('@storybook/react', '@storybook/testing-library')
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
     * @storybook/addon-a11y (Accessibility testing)
     * {@link https://github.com/storybookjs/storybook/tree/next/code/addons/a11y#storybook-addon-a11y}
     *
     * @storybook/addon-actions (Action logger)
     * {@link https://github.com/storybookjs/storybook/tree/next/code/addons/actions#storybook-addon-actions}
     *
     * @storybook/addon-essentials (Essential addons)
     * {@link https://github.com/storybookjs/storybook/tree/next/code/addons/essentials#storybook-essentials}
     *
     * @storybook/addon-interactions (Interact with components)
     * {@link https://github.com/storybookjs/storybook/tree/next/code/addons/interactions#storybook-addon-interactions}
     *
     * @storybook/addon-links (Link to other stories)
     * {@link https://github.com/storybookjs/storybook/tree/next/code/addons/links#story-links-addon}
     *
     * @storybook/builder-webpack5 (Webpack 5)
     * {@link https://github.com/storybookjs/storybook/tree/next/code/builders/builder-webpack5#builder-webpack5}
     *
     * @storybook/manager-webpack5 (Webpack 5 Storybook manager)
     * {@link https://www.npmjs.com/package/@storybook/manager-webpack5}
     */
    if (hasStorybook && !hasReact && !hasNext) {
      testDevDependencies.push(
        '@storybook/addon-a11y',
        '@storybook/addon-actions',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-links',
      )
      hasWebpack && testDevDependencies.push('@storybook/builder-webpack5', '@storybook/manager-webpack5')
    }
  }

  return {
    testDevDependencies,
  }
}

export default getTestCommands
