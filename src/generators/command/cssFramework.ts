import getCertainConditions from '@utils/certainConditions';

const getCssFrameworkCommands = () => {
  const { hasGatsby, hasPostcss, hasScss, hasStyledComponents, hasTailwind, hasTypescript, hasJsLibs } =
    getCertainConditions();

  const cssFrameworkDevDependencies: string[] = [];

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
   * {@link https://github.com/webpack-contrib/postcss-loader#postcss-loader}
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
    if (hasGatsby) {
      cssFrameworkDevDependencies.push('postcss-html');
    } else {
      cssFrameworkDevDependencies.push(
        'cssnano',
        'postcss-flexbugs-fixes',
        'postcss-hexrgba',
        'postcss-html',
        'postcss-loader',
        'postcss-normalize',
        'postcss-preset-env',
        'postcss-syntax',
      );

      const postcss = hasJsLibs ? 'postcss-jsx' : 'postcss';
      cssFrameworkDevDependencies.push(postcss);

      hasScss && cssFrameworkDevDependencies.push('postcss-scss');
      hasStyledComponents && cssFrameworkDevDependencies.push('postcss-styled-syntax');
      hasTailwind && cssFrameworkDevDependencies.push('@tailwindcss/nesting');
      hasTypescript && cssFrameworkDevDependencies.push('@types/postcss-flexbugs-fixes', '@types/postcss-html');
    }
  }
  /**
   * sass (Sass)
   * {@link https://sass-lang.com}
   */
  if (hasScss) {
    cssFrameworkDevDependencies.push('sass');
  }
  /**
   * tailwindcss (Tailwind CSS)
   * {@link https://tailwindcss.com}
   */
  if (hasTailwind) {
    cssFrameworkDevDependencies.push('tailwindcss');
  }

  return {
    cssFrameworkDevDependencies,
  };
};

export default getCssFrameworkCommands;
