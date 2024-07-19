import getBundlerCommands from '@generators/command/bundler'

import { configOptions } from './configOptions.test'

describe('Generate command for Bundler', () => {
  describe('Vite', () => {
    test('should generate command for Vite', () => {
      configOptions.vite = true

      const { bundlerDependencies, bundlerDevDependencies } = getBundlerCommands(configOptions)

      expect(bundlerDependencies).toEqual(['vite'])
      expect(bundlerDevDependencies).toEqual(['vite-plugin-dts'])
    })

    test('should generate command for Vite with TypeScript', () => {
      configOptions.vite = true
      configOptions.typescript = true

      const { bundlerDependencies, bundlerDevDependencies } = getBundlerCommands(configOptions)

      expect(bundlerDependencies).toEqual(['vite'])
      expect(bundlerDevDependencies).toEqual(['vite-tsconfig-paths', 'vite-plugin-dts'])
    })

    test('should generate command for Vite with React.js and TypeScript', () => {
      configOptions.vite = true
      configOptions.react = true
      configOptions.typescript = true

      const { bundlerDependencies, bundlerDevDependencies } = getBundlerCommands(configOptions)

      expect(bundlerDependencies).toBeEmpty()
      expect(bundlerDevDependencies).toEqual(['vite-tsconfig-paths', 'vite-plugin-dts'])
    })
  })

  describe('Webpack', () => {
    let devDependencies: string[]

    beforeEach(() => {
      devDependencies = [
        '@swc/html',
        'source-map-loader',
        'style-loader',
        'webpack',
        'webpack-cli',
        'webpack-dev-server',
        'webpack-merge',
        'html-webpack-plugin',
        'mini-css-extract-plugin',
        'workbox-webpack-plugin',
      ]
    })

    test('should generate command for Webpack', () => {
      configOptions.webpack = true

      const { bundlerDevDependencies } = getBundlerCommands(configOptions)

      expect(bundlerDevDependencies).toIncludeAllMembers([
        'html-webpack-plugin',
        'mini-css-extract-plugin',
        'workbox-webpack-plugin',
      ])
    })

    test('should generate command for Webpack with Next.js', () => {
      configOptions.webpack = true
      configOptions.next = true

      const { bundlerDevDependencies } = getBundlerCommands(configOptions)

      expect(bundlerDevDependencies).toEqual(['source-map-loader'])
    })
  })
})
