import getCertainConditions from '@utils/certainConditions'
import convertToString from '@utils/convertToString'
import type { SelectOptions } from '_types'

const generatePostcssConfig = (configOptions: SelectOptions) => {
  const { hasTailwind } = getCertainConditions(configOptions)

  const config = {
    syntax: 'postcss-syntax', //  automatically switch the required PostCSS syntax by file extension/source
    plugins: {
      ...(hasTailwind && { '@tailwindcss/nesting': {} }), // this plugin has to come before 'tailwindcss'
      'postcss-preset-env': {
        autoprefixer: {
          // grid: 'autoplace', // adding prefixes of grid layout properties for IE 10-11
        },
        features: {
          'nesting-rules': false, // ensure this value as false when using @tailwindcss/nesting
        },
      },
      ...(hasTailwind && { tailwindcss: {} }), // for using tailwindcss
      cssnano: { preset: 'default' }, // invoking CSS minification in production environment
    },
  }

  return `module.exports = ${convertToString(config)}`
}

export default generatePostcssConfig
