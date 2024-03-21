/**
 * Syntaxes
 * {@link https://github.com/postcss/postcss#syntaxes}
 *
 * Plugins
 * {@link https://github.com/postcss/postcss#plugins}
 *
 * Postcss-preset-env options
 * {@link https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env}
 *
 * Postcss-preset-env features
 * {@link https://preset-env.cssdb.org/features/}
 *
 * Additional options in autoprefixer
 * {@link https://github.com/postcss/autoprefixer#options}
 *
 * Optimising Tailwind CSS for production
 * {@link https://tailwindcss.com/docs/optimizing-for-production}
 *
 * Nesting support in the Tailwind CSS plugin API (tailwindcss/nesting)
 * {@link https://tailwindcss.com/docs/using-with-preprocessors#nesting}
 */

module.exports = {
  syntax: 'postcss-syntax', //  automatically switch the required PostCSS syntax by file extension/source
  plugins: {
    '@tailwindcss/nesting': {}, // this plugin has to come before 'tailwindcss'
    'postcss-preset-env': {
      autoprefixer: {
        // grid: 'autoplace', // adding prefixes of grid layout properties for IE 10-11
      },
      features: {
        'nesting-rules': false, // ensure this value as false when using @tailwindcss/nesting
      },
    },
    tailwindcss: {}, // for using tailwindcss
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}), // invoking CSS minification in production environment
  },
}
