export interface Env {
  browser?: boolean
  es6?: boolean
  node?: boolean
  'jest/globals'?: boolean
}

export interface Config {
  [key: string]: unknown
}

export interface SelectOptions {
  jest: boolean
  react: boolean
  next: boolean
  postcss: boolean
  scss: boolean
  styledComponents: boolean
  tailwind: boolean
  typescript: boolean
  tanstackQuery: boolean
  vue: boolean
}
