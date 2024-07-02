import type { SelectOptions } from '_types'

const getPrettierCommands = (configOptions: SelectOptions) => {
  const hasTailwind = configOptions.tailwind
  const hasPug = configOptions.pug

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
