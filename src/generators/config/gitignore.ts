import type { Option, SelectOptions } from '_types'

type Template = (typeof templateList)[number]

const templateList = ['gatsby', 'nextjs', 'nuxtjs', 'react', 'sass', 'storybookjs', 'vuejs', 'wordpress'] as const

// Convert the option to the corresponding template
const fitTemplate = (option: string) => {
  switch (option) {
    case 'next':
      return 'nextjs'
    case 'nuxt':
      return 'nuxtjs'
    case 'scss':
      return 'sass'
    case 'storybook':
      return 'storybookjs'
    case 'vue':
      return 'vuejs'
    default:
      return option
  }
}
const isTemplate = (option: string): option is Template => templateList.some(template => template === option)

const generateGitIgnore = (configOptions: SelectOptions) => {
  // A template is a path used to retrieve the corresponding gitignore code
  const templates: Template[] = []
  for (const option in configOptions) {
    const template = fitTemplate(option)
    // If configOptions[key] is true and it belongs to the list of templates, it is template
    if (isTemplate(template) && configOptions[option as Option]) {
      templates.push(template)
    }
  }

  return `// Copy and past the url to the address bar or go to toptal.com
  
https://www.toptal.com/developers/gitignore/api/dotenv,git,intellij,macos,node,visualstudiocode,webstorm,windows,yarn${templates.length ? ',' : ''}${templates.join(',')}

// If you want to add or remove some files from the .vscode directory, look for the '### VisualStudioCode ###' in the ignore code and make your changes there.`
}

export default generateGitIgnore
