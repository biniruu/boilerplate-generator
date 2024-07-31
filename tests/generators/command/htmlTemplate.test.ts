import getHtmlTemplateCommands from '@generators/command/htmlTemplate'
import { configOptions } from 'tests/configOptions.test'

test('should return empty arrays when all options are false', () => {
  const { htmlTemplateDependencies, htmlTemplateDevDependencies } = getHtmlTemplateCommands(configOptions)

  expect(htmlTemplateDependencies).toBeEmpty()
  expect(htmlTemplateDevDependencies).toBeEmpty()
})

test('should return dependencies for EJS', () => {
  configOptions.ejs = true

  const { htmlTemplateDependencies, htmlTemplateDevDependencies } = getHtmlTemplateCommands(configOptions)

  expect(htmlTemplateDependencies).toEqual(['ejs'])
  expect(htmlTemplateDevDependencies).toBeEmpty()
})

test('should return dependencies for EJS with TypeScript', () => {
  configOptions.ejs = true
  configOptions.typescript = true

  const { htmlTemplateDependencies, htmlTemplateDevDependencies } = getHtmlTemplateCommands(configOptions)

  expect(htmlTemplateDependencies).toEqual(['ejs'])
  expect(htmlTemplateDevDependencies).toEqual(['@types/ejs'])
})

test('should return dependencies for Pug', () => {
  configOptions.pug = true

  const { htmlTemplateDependencies, htmlTemplateDevDependencies } = getHtmlTemplateCommands(configOptions)

  expect(htmlTemplateDependencies).toEqual(['pug'])
  expect(htmlTemplateDevDependencies).toEqual(['pug-lint'])
})
