import getHtmlTemplateCommands from '@generators/command/htmlTemplate'
import { configOptions } from 'tests/configOptions.test'

describe('HTML Template', () => {
  test('should return an empty value when all options are false', () => {
    const { htmlTemplateDependencies, htmlTemplateDevDependencies } = getHtmlTemplateCommands(configOptions)

    expect(htmlTemplateDependencies).toBeEmpty()
    expect(htmlTemplateDevDependencies).toBeEmpty()
  })

  test('should generate a command for EJS', () => {
    configOptions.ejs = true

    const { htmlTemplateDependencies, htmlTemplateDevDependencies } = getHtmlTemplateCommands(configOptions)

    expect(htmlTemplateDependencies).toEqual(['ejs'])
    expect(htmlTemplateDevDependencies).toBeEmpty()
  })
})
