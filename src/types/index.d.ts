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
  gatsby: boolean
  graphql: boolean
  jest: boolean
  react: boolean
  next: boolean
  nuxt: boolean
  postcss: boolean
  pug: boolean
  scss: boolean
  storybook: boolean
  styledComponents: boolean
  tailwind: boolean
  three: boolean
  typescript: boolean
  tanstackQuery: boolean
  vite: boolean
  vue: boolean
  webpack: boolean
  wordpress: boolean
}
