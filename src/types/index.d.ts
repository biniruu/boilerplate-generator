export interface Env {
  browser?: boolean
  es6?: boolean
  node?: boolean
  'jest/globals'?: boolean
}

export interface Config {
  [key: string]: unknown
}
