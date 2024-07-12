import getCertainConditions from '@utils/certainConditions'
import type { SelectOptions } from '_types'

const getPrettierCommands = (configOptions: SelectOptions) => {
  const { hasPrettier, hasPug, hasTailwind } = getCertainConditions(configOptions)

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
  const prettierDevDependencies: string[] = []

  if (hasPrettier) {
    prettierDevDependencies.push('prettier')

    if (hasPug) {
      prettierDevDependencies.push('@prettier/plugin-pug')
    }
    if (hasTailwind) {
      prettierDevDependencies.push('prettier-plugin-tailwindcss')
    }
  }

  return {
    prettierDevDependencies,
  }
}

export default getPrettierCommands
