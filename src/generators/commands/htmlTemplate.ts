import type { SelectOptions } from '_types'

const getHtmlTemplateCommands = (configOptions: SelectOptions) => {
  const hasEjs = configOptions.ejs
  const hasPug = configOptions.pug
  const hasTypescript = configOptions.typescript

  const htmlTemplateDependencies: string[] = []
  const htmlTemplateDevDependencies: string[] = []

  /**
   * ejs (Embedded JavaScript templates)
   * {@link https://ejs.co}
   */
  if (hasEjs) {
    if (hasTypescript) {
      htmlTemplateDevDependencies.push('@types/ejs')
    }
    htmlTemplateDependencies.push('ejs')
  }
  /**
   * pug
   * {@link https://pugjs.org/api/getting-started.html}
   *
   * pug-lint
   * {@link https://github.com/pugjs/pug-lint?tab=readme-ov-file#pug-lint}
   */
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
