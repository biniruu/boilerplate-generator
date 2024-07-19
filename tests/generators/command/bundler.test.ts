import getBundlerCommands from '@generators/command/bundler'

import { configOptions } from './configOptions.test'

describe('Generate command for Bundler', () => {
  describe('Vite', () => {
    test('should generate command for Vite', () => {
      configOptions.vite = true

      const { bundlerDependencies, bundlerDevDependencies } = getBundlerCommands(configOptions)

      expect(bundlerDependencies).toIncludeSameMembers(['vite'])
      expect(bundlerDevDependencies).toIncludeSameMembers(['vite-plugin-dts'])
    })

    test('should generate command for Vite with TypeScript', () => {
      configOptions.vite = true
      configOptions.typescript = true

      const { bundlerDependencies, bundlerDevDependencies } = getBundlerCommands(configOptions)

      expect(bundlerDependencies).toIncludeSameMembers(['vite'])
      expect(bundlerDevDependencies).toIncludeSameMembers(['vite-tsconfig-paths', 'vite-plugin-dts'])
    })

    test('should generate command for Vite with React.js and TypeScript', () => {
      configOptions.vite = true
      configOptions.react = true
      configOptions.typescript = true

      const { bundlerDependencies, bundlerDevDependencies } = getBundlerCommands(configOptions)

      expect(bundlerDependencies).toBeEmpty()
      expect(bundlerDevDependencies).toIncludeSameMembers(['vite-tsconfig-paths', 'vite-plugin-dts'])
    })
  })

  describe('Webpack', () => {
    test('should generate command for Webpack', () => {
      configOptions.webpack = true

      const { bundlerDevDependencies } = getBundlerCommands(configOptions)

      expect(bundlerDevDependencies).toIncludeAllMembers([
        'html-webpack-plugin',
        'mini-css-extract-plugin',
        'workbox-webpack-plugin',
      ])
    })

    test('should generate command for Webpack with Three.js', () => {
      configOptions.webpack = true
      configOptions.three = true

      const { bundlerDevDependencies } = getBundlerCommands(configOptions)

      expect(bundlerDevDependencies).not.toIncludeAllMembers([
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

    test('should generate command for Webpack with SCSS', () => {
      configOptions.webpack = true
      configOptions.scss = true

      const { bundlerDevDependencies } = getBundlerCommands(configOptions)

      expect(bundlerDevDependencies).toContain('sass-loader')
    })

    test('should generate command for Webpack with TypeScript', () => {
      configOptions.webpack = true
      configOptions.typescript = true

      const { bundlerDevDependencies } = getBundlerCommands(configOptions)

      expect(bundlerDevDependencies).toIncludeAllMembers(['@types/webpack', 'ts-loader'])
    })

    test('should generate command for Webpack with TypeScript and SCSS', () => {
      configOptions.webpack = true
      configOptions.typescript = true
      configOptions.scss = true

      const { bundlerDevDependencies } = getBundlerCommands(configOptions)

      expect(bundlerDevDependencies).toIncludeAllMembers(['@types/webpack', 'ts-loader', 'sass-loader'])
    })
  })

  describe('esbuild', () => {
    test('should generate command for esbuild', () => {
      configOptions.esbuild = true

      const { bundlerDevDependencies } = getBundlerCommands(configOptions)

      expect(bundlerDevDependencies).toIncludeSameMembers(['esbuild'])
    })

    test('should generate command for esbuild with Jest', () => {
      configOptions.esbuild = true
      configOptions.jest = true

      const { bundlerDevDependencies } = getBundlerCommands(configOptions)

      expect(bundlerDevDependencies).toIncludeSameMembers(['esbuild', 'esbuild-jest'])
    })
  })
})
