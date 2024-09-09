import type { SelectOptions } from '_types'

export const syntax = ['typescript', 'javascript'] as const
export const jsLib = ['nothing', 'gatsby', 'next', 'nuxt', 'react', 'vue', 'wordpress'] as const
export const radioBtns = [...syntax, ...jsLib]

// This variable is used to create the objOptions variable in this file, the conditions and the objConditions variables in data/conditions.ts, as well as the Option, SelectOptions, and Condition types in types/index.d.ts
// And see utils/certainConditions.ts
export const options = [
  'axios',
  'babel',
  'bcrypt',
  'copyToClipboard',
  'dayjs',
  'dotenv',
  'ejs',
  'esbuild',
  'eslint',
  'eslint-flat-config',
  'express',
  'fileSaver',
  'graphql',
  'husky',
  'immer',
  'javascriptStringify',
  'jest',
  'jestHtmlReporters',
  'joi',
  'jsdiff',
  'jsZip',
  'koa',
  'lodash',
  'markdownlint',
  'mongoose',
  'nextAuth',
  'nodemon',
  'npm',
  'prettier',
  'prism',
  'postcss',
  'pug',
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
  'stylelint',
  'swr',
  'tailwind',
  'three',
  'tanstackQuery',
  'vite',
  'webpack',
  ...radioBtns,
] as const

export const objOptions = options.reduce((acc, curr) => {
  acc[curr] = false

  return acc
}, {} as SelectOptions)
