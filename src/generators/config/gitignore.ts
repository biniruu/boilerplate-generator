import type { SelectOptions } from '_types'

type Options = keyof SelectOptions

const isTemplate = (option: Options) => {
  switch (option) {
    case 'gatsby':
      return 'gatsby'
    case 'next':
      return 'nextjs'
    case 'nuxt':
      return 'nuxtjs'
    case 'react':
      return 'react'
    case 'scss':
      return 'sass'
    case 'storybook':
      return 'storybookjs'
    case 'vue':
      return 'vuejs'
    case 'wordpress':
      return 'wordpress'
    default:
      return ''
  }
}

const generateGitIgnore = (configOptions: SelectOptions) => {
  // A template is a path used to retrieve the corresponding gitignore code
  const templates = []
  for (const option in configOptions) {
    // If configOptions[key] is true and it belongs to the list of templates, it is template
    if (configOptions[option as Options] && isTemplate(option as Options)) {
      templates.push(option)
    }
  }

  return `// Copy and past the url to the address bar or go to toptal.com
  
https://www.toptal.com/developers/gitignore/api/dotenv,git,intellij,macos,node,visualstudiocode,webstorm,windows,yarn${templates.length ? ',' : ''}${templates.join(',')}`
}

export default generateGitIgnore
