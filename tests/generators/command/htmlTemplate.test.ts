import getHtmlTemplateCommands from '@generators/command/htmlTemplate'
import { configOptions } from 'tests/configOptions.test'

describe('HTML Template', () => {
  test('should return an empty value when all options are false', () => {
    const { htmlTemplateDependencies, htmlTemplateDevDependencies } = getHtmlTemplateCommands(configOptions)

    expect(htmlTemplateDependencies).toBeEmpty()
    expect(htmlTemplateDevDependencies).toBeEmpty()
  })
})
