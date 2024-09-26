const dynamicTabList = {
  eslint: {
    value: '.eslintrc.js',
  },
  eslintFlatConfig: {
    value: 'eslint.config.mjs',
  },
  prettier: {
    value: '.prettierrc.js',
  },
  stylelint: {
    value: '.stylelintrc.js',
  },
  jest: {
    value: 'jest.config',
    ext: {
      javascript: '.js',
      typescript: '.ts',
    },
  },
  postcss: {
    value: 'postcss.config.js',
  },
  webpack: {
    value: 'webpack.config',
    ext: {
      javascript: '.js',
      typescript: '.ts',
    },
  },
  vite: {
    value: 'vite.config.ts',
  },
  next: {
    value: 'next.config.mjs',
  },
  tailwind: {
    value: 'tailwind.config',
    ext: {
      javascript: '.js',
      typescript: '.ts',
    },
  },
  typescript: {
    value: 'tsconfig.json',
  },
  babel: {
    value: '.babelrc',
  },
  pug: {
    value: '.pug-lintrc.json',
  },
  nodemon: {
    value: 'nodemon.json',
  },
  markdownlint: {
    value: '.markdownlint.json',
  },
  gatsby: {
    value: 'gatsby-config.ts',
  },
  npm: {
    value: '.npmrc',
  },
  nuxt: {
    value: 'nuxt.config.ts',
  },
  volar: {
    value: 'volar.config.cjs',
  },
  'next-layout-file': {
    value: 'layout.tsx',
  },
  'tanstack-query-file': {
    value: 'reactQueryProvider',
    ext: {
      javascript: '.jsx',
      typescript: '.tsx',
    },
  },
  'type-guards-file': {
    value: 'typeGuards.ts',
  },
  'jest-setup': {
    value: 'jest.setup',
    ext: {
      javascript: '.js',
      typescript: '.ts',
    },
  },
  'ts-default': {
    value: 'tsconfig.default.json',
  },
  'ts-build': {
    value: 'tsconfig.build.json',
  },
  'ts-node': {
    value: 'tsconfig.node.json',
  },
  'ts-test': {
    value: 'tsconfig.test.json',
  },
  'eslint-ignore': {
    value: '.eslintignore',
  },
  'pug-file': {
    value: 'home.pug',
  },
  'swr-file': {
    value: 'swrProvider.tsx',
  },
  'tailwind-file': {
    value: 'style.css',
  },
  'typescript-file': {
    value: 'declarations.d.ts',
  },
  'socket-file': {
    value: 'socket.d.ts',
  },
  'stylelint-ignore': {
    value: '.stylelintignore',
  },
  'prettier-ignore': {
    value: '.prettierignore',
  },
};

export default dynamicTabList;
