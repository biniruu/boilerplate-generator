import type { SelectOptions } from '_types'

const getCssFrameworkCommands = (configOptions: SelectOptions) => {
  const hasGatsby = configOptions.gatsby
  const hasNext = configOptions.next
  const hasNuxt = configOptions.nuxt
  const hasPostcss = configOptions.postcss
  const hasReact = configOptions.react
  const hasScss = configOptions.scss
  const hasStyledComponents = configOptions.styledComponents
  const hasTailwind = configOptions.tailwind
  const hasTypescript = configOptions.typescript
  const hasVue = configOptions.vue
  const hasCore = hasNext || hasNuxt || hasReact || hasVue

  const cssFrameworkDependencies: string[] = []
  const cssFrameworkDevDependencies: string[] = []

  /**
   * postcss (PostCSS)
   * {@link https://postcss.org}
   *
   * postcss-jsx (PostCSS JSX Syntax)
   * {@link https://github.com/gucong3000/postcss-jsx#readme}
   *
   * postcss-scss (PostCSS SCSS Syntax)
   * {@link https://github.com/postcss/postcss-scss#readme}
   *
   * postcss-styled-syntax
   * {@link https://github.com/hudochenkov/postcss-styled-syntax#readme}
   *
   * @tailwindcss/nesting
   * {@link https://www.npmjs.com/package/@tailwindcss/nesting}
   *
   * postcss-flexbugs-fixes (PostCSS Flexbugs Fixes)
   * {@link https://github.com/luisrudge/postcss-flexbugs-fixes#readme}
   *
   * postcss-hexrgba (PostCSS HexRGBA)
   * {@link https://github.com/madeleineostoja/postcss-hexrgba#readme}
   *
   * postcss-html (PostCSS HTML Syntax)
   * {@link https://github.com/ota-meshi/postcss-html#readme}
   *
   * postcss-loader
   * {@link https://github.com/webpack-contrib/postcss-loader?tab=readme-ov-file#postcss-loader}
   *
   * postcss-normalize (PostCSS Normalize)
   * {@link https://github.com/csstools/postcss-normalize#readme}
   *
   * postcss-preset-env (PostCSS Preset Env)
   * {@link https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env#readme}
   *
   * postcss-syntax (PostCSS Syntax)
   * {@link https://github.com/gucong3000/postcss-syntax#readme}
   *
   * If you don't want postcss-preset-env, you have to install postcss plugins related to the link below
   * https://github.com/csstools/postcss-plugins/tree/main/plugins
   */
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
      if (hasTypescript) {
        cssFrameworkDevDependencies.push('@types/postcss-flexbugs-fixes', '@types/postcss-html')
      }
      cssFrameworkDevDependencies.push(
        'cssnano',
        'postcss-flexbugs-fixes',
        'postcss-hexrgba',
        'postcss-html',
        'postcss-loader',
        'postcss-normalize',
        'postcss-preset-env',
        'postcss-syntax',
      )
    }
    if (hasGatsby) {
      cssFrameworkDevDependencies.push('postcss-html')
    }
  }
  /**
   * sass
   * {@link https://sass-lang.com}
   */
  if (hasScss) {
    cssFrameworkDevDependencies.push('sass')
  }
  /**
   * tailwindcss
   * {@link https://tailwindcss.com}
   */
  if (hasTailwind) {
    cssFrameworkDevDependencies.push('tailwindcss')
  }

  return {
    cssFrameworkDependencies,
    cssFrameworkDevDependencies,
  }
}

export default getCssFrameworkCommands
