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
  axios: boolean
  babel: boolean
  bcrypt: boolean
  dayjs: boolean
  dotenv: boolean
  ejs: boolean
  express: boolean
  fileSaver: boolean
  gatsby: boolean
  graphql: boolean
  husky: boolean
  immer: boolean
  javascriptStringify: boolean
  jest: boolean
  joi: boolean
  jsdiff: boolean
  jsZip: boolean
  koa: boolean
  lodash: boolean
  markdown: boolean
  mongoose: boolean
  next: boolean
  nextAuth: boolean
  nodemon: boolean
  nuxt: boolean
  prism: boolean
  postcss: boolean
  pug: boolean
  react: boolean
  reactHookForm: boolean
  reactInfiniteScroller: boolean
  reactJoyride: boolean
  recoil: boolean
  redis: boolean
  scss: boolean
  socket: boolean
  storybook: boolean
  styledComponents: boolean
  swr: boolean
  tailwind: boolean
  three: boolean
  typescript: boolean
  tanstackQuery: boolean
  vite: boolean
  vue: boolean
  webpack: boolean
  wordpress: boolean
}
