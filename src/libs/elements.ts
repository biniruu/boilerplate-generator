const syntaxInputs = {
  typescript: document.querySelector<HTMLInputElement>('#typescript'),
  javascript: document.querySelector<HTMLInputElement>('#javascript'),
}

const webDevLibInputs = {
  react: document.querySelector<HTMLInputElement>('#react'),
  next: document.querySelector<HTMLInputElement>('#next'),
  nothing: document.querySelector<HTMLInputElement>('#nothing'),
}

const moduleBundlerInputs = {
  vite: document.querySelector<HTMLInputElement>('#vite'),
  viteWrapper: document.querySelector<HTMLDivElement>('#vite-wrapper'),
  webpack: document.querySelector<HTMLInputElement>('#webpack'),
}

const tabs = {
  eslint: document.querySelector<HTMLButtonElement>('#eslint-tab'),
  prettier: document.querySelector<HTMLButtonElement>('#prettier-tab'),
  stylelint: document.querySelector<HTMLButtonElement>('#stylelint-tab'),
  gitignore: document.querySelector<HTMLButtonElement>('#gitignore-tab'),
  jest: document.querySelector<HTMLButtonElement>('#jest-tab'),
  jestSetup: document.querySelector<HTMLButtonElement>('#jest-setup-tab'),
  postcss: document.querySelector<HTMLButtonElement>('#postcss-tab'),
  webpack: document.querySelector<HTMLButtonElement>('#webpack-tab'),
  vite: document.querySelector<HTMLButtonElement>('#vite-tab'),
}

const editors = {
  code: document.querySelector<HTMLDivElement>('#code'),
}

const elementTypes = {
  syntaxInputs,
  webDevLibInputs,
  moduleBundlerInputs,
  tabs,
  editors,
}

export default elementTypes
