import type { SelectOptions } from '_types'

const getPrettierCommands = (configOptions: SelectOptions) => {
  const hasTailwind = configOptions.tailwind
  const hasPug = configOptions.pug

  /**
   * prettier
   * {@link https://prettier.io}
   *
   * @prettier/plugin-pug (Prettier Pug plugin)
   * {@link https://github.com/prettier/plugin-pug#readme}
   *
   * prettier-plugin-tailwindcss
   * {@link https://github.com/tailwindlabs/prettier-plugin-tailwindcss#readme}
   */
  const prettierDevDependencies: string[] = ['prettier']

  if (hasPug) {
    prettierDevDependencies.push('@prettier/plugin-pug')
  }
  if (hasTailwind) {
    prettierDevDependencies.push('prettier-plugin-tailwindcss')
  }

  return {
    prettierDevDependencies,
  }
}

export default getPrettierCommands
