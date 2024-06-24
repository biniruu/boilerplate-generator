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

const inputTypes = {
  syntaxInputs,
  webDevLibInputs,
  moduleBundlerInputs,
}

export default inputTypes
