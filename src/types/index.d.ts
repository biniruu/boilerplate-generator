import { options } from '@data/options'

export type SelectOptions = {
  [K in (typeof options)[number]]: boolean
}

// See options: /src/data/options.ts
export type Option = (typeof options)[number]

type MakeType<P extends string, F extends string> = `${P}${Capitalize<F>}`
export type Condition = MakeType<'has', Capitalize<Option>>

export type Tab =
  | 'babel'
  | 'eslint'
  | 'gatsby'
  | 'gitignore'
  | 'jest'
  | 'jest-setup'
  | 'prettier'
  | 'postcss'
  | 'pug'
  | 'stylelint'
  | 'markdown'
  | 'next'
  | 'nuxt'
  | 'nodemon'
  | 'npm'
  | 'package'
  | 'tailwind'
  | 'ts-build'
  | 'ts-default'
  | 'ts-node'
  | 'ts-test'
  | 'typescript'
  | 'vite'
  | 'volar'
  | 'webpack'
  | 'next-layout-file'
  | 'pug-file'
  | 'socket-file'
  | 'swr-file'
  | 'tailwind-file'
  | 'tanstack-query-file'
  | 'typescript-file'
