import getCertainConditions from '@utils/certainConditions'
import convertToJson from '@utils/convertToJson'
import type { SelectOptions } from '_types'

const generatePackageConfig = (configOptions: SelectOptions) => {
  const {
    hasExpress,
    hasJsLibs,
    hasGatsby,
    hasNext,
    hasNuxt,
    hasJest,
    hasReact,
    hasStorybook,
    hasTypescript,
    hasWebpack,
    hasSocket,
  } = getCertainConditions(configOptions)

  const gatsbyScripts = {
    develop: 'gatsby develop',
    start: 'gatsby develop',
    build: 'gatsby build',
    serve: 'gatsby serve',
    clean: 'gatsby clean',
    typecheck: 'tsc --noEmit',
  }
  const jestScripts = {
    test: 'jest',
    'test:update': 'jest -u',
    'test:watch': 'jest --watch',
  }
  const nextScripts = {
    dev: 'next dev',
    build: 'next build',
    start: 'next start',
    lint: 'next lint',
  }
  const nuxtScripts = {
    build: 'nuxt build',
    dev: 'nuxt dev',
    generate: 'nuxt generate',
    preview: 'nuxt preview',
    postinstall: 'nuxt prepare',
  }
  const reactScripts = {
    dev: 'vite',
    build: 'tsc && NODE_ENV=development vite build --mode development',
    'build:prod': 'yarn lint && tsc && vite build',
    preview: 'vite preview',
  }
  const storybookScripts = {
    storybook: 'storybook dev -p 6006',
    'build-storybook': 'storybook build',
  }
  const tsScripts = {
    dev: 'nodemon',
    start: 'yarn compile & nodemon',
    compile: 'rm -r dist ; npx tsc --project tsconfig.build.json',
  }
  const webpackScripts = {
    build: 'webpack --mode=production --node-env=production',
    'build:dev': 'webpack --mode=development',
    'build:prod': 'webpack --mode=production --node-env=production',
    watch: 'webpack --watch',
    serve: 'webpack serve',
  }
  const serverScripts = {
    'dev:server': 'nodemon ./server/index.ts',
  }

  const config = {
    name: 'my-site',
    version: '0.1.0',
    private: true,
    description: 'this-is-my-site',
    license: 'ISC',
    author: 'my-name',
    main: 'src/index.js',
    keywords: ['node', 'javascript'],
    scripts: {
      // Gatsby
      ...(hasGatsby && !hasJsLibs && !hasWebpack && !hasExpress && gatsbyScripts),
      // Express
      ...((hasExpress || !hasJsLibs || hasSocket) && serverScripts),
      // with Jest
      ...(hasJest && jestScripts),
      // Next.js
      ...(hasNext && !hasGatsby && !hasWebpack && !hasExpress && nextScripts),
      // Nuxt,js
      ...(hasNuxt && !hasGatsby && !hasWebpack && !hasExpress && nuxtScripts),
      // React.js with Vite
      ...(hasReact && !hasGatsby && !hasWebpack && !hasExpress && reactScripts),
      // with Storybook
      ...(hasStorybook && storybookScripts),
      // TypeScript
      ...(hasTypescript && !hasJsLibs && !hasGatsby && !hasWebpack && !hasExpress && tsScripts),
      // Webpack
      ...(hasWebpack && !hasJsLibs && webpackScripts),
      lint: 'eslint . && stylelint .',
      'update-packages': 'yarn upgrade --latest && yarn sync-package-version',
      'sync-package-version': 'npx syncyarnlock -ks',
    },
  }

  const result = convertToJson(config)

  return result
}

export default generatePackageConfig
