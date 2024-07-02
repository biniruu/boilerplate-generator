import { SelectOptions } from '_types'

const getHtmlTemplateCommands = (configOptions: SelectOptions) => {
  const hasEjs = configOptions.ejs
  const hasPug = configOptions.pug
  const hasTypescript = configOptions.typescript

  const htmlTemplateDependencies: string[] = []
  const htmlTemplateDevDependencies: string[] = []

  if (hasEjs) {
    if (hasTypescript) {
      htmlTemplateDevDependencies.push('@types/ejs')
    }
    htmlTemplateDependencies.push('ejs')
  }
  if (hasPug) {
    htmlTemplateDependencies.push('pug')
    htmlTemplateDevDependencies.push('pug-lint')
  }

  return {
    htmlTemplateDependencies,
    htmlTemplateDevDependencies,
  }
}

export default getHtmlTemplateCommands
