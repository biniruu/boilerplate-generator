import type { SelectOptions } from '_types'

const options = [
  'axios',
  'babel',
  'bcrypt',
  'dayjs',
  'dotenv',
  'ejs',
  'express',
  'fileSaver',
  'gatsby',
  'graphql',
  'husky',
  'immer',
  'javascript',
  'javascriptStringify',
  'jest',
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
  'nuxt',
  'prism',
  'postcss',
  'pug',
  'react',
  'reactHookForm',
  'reactInfiniteScroller',
  'reactJoyride',
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
