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
  | 'gitignore'
  | 'jest'
  | 'jest-setup'
  | 'prettier'
  | 'postcss'
  | 'pug'
  | 'stylelint'
  | 'next'
  | 'tailwind'
  | 'ts-build'
  | 'ts-default'
  | 'ts-node'
  | 'ts-test'
  | 'typescript'
  | 'vite'
  | 'webpack'
