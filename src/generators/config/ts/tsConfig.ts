import convertToJson from '@utils/convertToJson'
import type { SelectOptions } from '_types'

const nuxtConfig = {
  compilerOptions: {},
  extends: './.nuxt/tsconfig.json',
}

const getTsConfig = (configOptions: SelectOptions) => {
  const hasGatsby = configOptions.gatsby
  const hasJest = configOptions.jest
  const hasNext = configOptions.next
  const hasNuxt = configOptions.nuxt
  const hasReact = configOptions.react
  const hasTailwind = configOptions.tailwind
  const hasVite = configOptions.vite
  const hasVue = configOptions.vue
  const hasWebpack = configOptions.webpack
  const hasJsx = hasNext || hasNuxt || hasReact || hasVue
  const hasTsExtension = hasJest || hasNuxt || hasTailwind || hasVite || hasWebpack

  const core = hasJsx ? ['**/*.tsx', '**/tests/**/*.spec.tsx', '**/tests/**/*.test.tsx', 'dist/types/**/*.ts'] : []
  const gatsby = hasGatsby ? ['gatsby-config.ts'] : []
  const next = hasNext ? ['next-env.d.ts', '.next/types/**/*.ts'] : []
  const withTs = hasTsExtension ? ['**/*.config.ts'] : []

  const config = {
    compilerOptions: {
      /* Editor Support */
      ...(hasNext
        ? {
            plugins: [
              {
                name: 'next',
              },
            ],
          }
        : {}),
    },
    extends: './tsconfig.default.json',
    include: ['**/*.ts', '**/tests/**/*.spec.ts', '**/tests/**/*.test.ts', ...core, ...gatsby, ...next, ...withTs],
  }

  const result = convertToJson(hasNuxt ? nuxtConfig : config)

  return result
}

export default getTsConfig
