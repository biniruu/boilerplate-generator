import { options } from '@data/options'

export interface Env {
  browser?: boolean
  es6?: boolean
  node?: boolean
  'jest/globals'?: boolean
}

export interface Config {
  [key: string]: unknown
}

export type SelectOptions = {
  [K in (typeof options)[number]]: boolean
}

export type Option = (typeof options)[number]

type MakeType<P extends string, F extends string> = `${P}${Capitalize<F>}`
export type Condition = MakeType<'has', Capitalize<Option>>

export type Tab =
  | 'eslint'
  | 'gitignore'
  | 'jest'
  | 'jest-setup'
  | 'prettier'
  | 'postcss'
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
