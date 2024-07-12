import type { SelectOptions } from '_types'

// This variable is used to create the objOptions variable in this file, the conditions and the objConditions variables in data/conditions.ts, as well as the Option, SelectOptions, and Condition types in types/index.d.ts
// And see utils/certainConditions.ts
const options = [
  'axios',
  'babel',
  'bcrypt',
  'copyToClipboard',
  'dayjs',
  'dotenv',
  'ejs',
  'esbuild',
  'express',
  'fileSaver',
  'gatsby',
  'graphql',
  'husky',
  'immer',
  'javascript',
  'javascriptStringify',
  'jest',
  'jestHtmlReporters',
  'joi',
  'jsdiff',
  'jsZip',
  'koa',
  'lodash',
  'markdown',
  'mongoose',
  'next',
  'nextAuth',
  'nodemon',
  'nothing',
  'npm',
  'nuxt',
  'prettier',
  'prism',
  'postcss',
  'pug',
  'react',
  'reactHookForm',
  'reactInfiniteScroller',
  'reactJoyride',
  'reactSyntaxHighlighter',
  'recoil',
  'redis',
  'scss',
  'socket',
  'storybook',
  'styledComponents',
  'swr',
  'tailwind',
  'three',
  'typescript',
  'tanstackQuery',
  'vite',
  'vue',
  'webpack',
  'wordpress',
] as const

const objOptions = options.reduce((acc, curr) => {
  acc[curr] = false

  return acc
}, {} as SelectOptions)

export { objOptions, options }
