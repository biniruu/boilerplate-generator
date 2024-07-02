import { SelectOptions } from '_types'

const getCssFrameworkCommands = (configOptions: SelectOptions) => {
  const hasGatsby = configOptions.gatsby
  const hasNext = configOptions.next
  const hasNuxt = configOptions.nuxt
  const hasPostcss = configOptions.postcss
  const hasReact = configOptions.react
  const hasScss = configOptions.scss
  const hasStyledComponents = configOptions.styledComponents
  const hasTailwind = configOptions.tailwind
  const hasVue = configOptions.vue
  const hasCore = hasNext || hasNuxt || hasReact || hasVue

  const cssFrameworkDependencies: string[] = []
  const cssFrameworkDevDependencies: string[] = []

  if (hasPostcss) {
    if (!hasGatsby) {
      if (hasCore) {
        cssFrameworkDevDependencies.push('postcss-jsx')
      }
      if (!hasCore) {
        cssFrameworkDevDependencies.push('postcss')
      }
      if (hasScss) {
        cssFrameworkDevDependencies.push('postcss-scss')
      }
      if (hasStyledComponents) {
        cssFrameworkDevDependencies.push('postcss-styled-syntax')
      }
      if (hasTailwind) {
        cssFrameworkDevDependencies.push('@tailwindcss/nesting')
      }
      // If you don't want postcss-preset-env, you have to install postcss plugins related to the link below
      // https://github.com/csstools/postcss-plugins/tree/main/plugins
      cssFrameworkDevDependencies.push(
        'cssnano postcss-flexbugs-fixes postcss-hexrgba postcss-html postcss-loader postcss-normalize postcss-preset-env postcss-syntax',
      )
    }
    if (hasGatsby) {
      cssFrameworkDevDependencies.push('postcss-html')
    }
  }
  if (hasScss) {
    cssFrameworkDevDependencies.push('sass')
  }
  if (hasTailwind) {
    cssFrameworkDependencies.push('tailwindcss')
  }

  return {
    cssFrameworkDependencies,
    cssFrameworkDevDependencies,
  }
}

export default getCssFrameworkCommands
