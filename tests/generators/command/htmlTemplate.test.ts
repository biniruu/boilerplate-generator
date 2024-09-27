import getHtmlTemplateCommands from '@generators/command/htmlTemplate';
import stateManager from '@store/state';
import { options } from 'tests/configOptions.test';

test('should return empty arrays when all options are false', () => {
  const { htmlTemplateDependencies, htmlTemplateDevDependencies } = getHtmlTemplateCommands();

  expect(htmlTemplateDependencies).toBeEmpty();
  expect(htmlTemplateDevDependencies).toBeEmpty();
});

test('should return dependencies for EJS', () => {
  stateManager.setState({
    ...options,
    ejs: true,
  });
  const { htmlTemplateDependencies, htmlTemplateDevDependencies } = getHtmlTemplateCommands();

  expect(htmlTemplateDependencies).toEqual(['ejs']);
  expect(htmlTemplateDevDependencies).toBeEmpty();
});

test('should return dependencies for EJS with TypeScript', () => {
  stateManager.setState({
    ...options,
    ejs: true,
    typescript: true,
  });
  const { htmlTemplateDependencies, htmlTemplateDevDependencies } = getHtmlTemplateCommands();

  expect(htmlTemplateDependencies).toEqual(['ejs']);
  expect(htmlTemplateDevDependencies).toEqual(['@types/ejs']);
});

test('should return dependencies for Pug', () => {
  stateManager.setState({
    ...options,
    pug: true,
  });
  const { htmlTemplateDependencies, htmlTemplateDevDependencies } = getHtmlTemplateCommands();

  expect(htmlTemplateDependencies).toEqual(['pug']);
  expect(htmlTemplateDevDependencies).toEqual(['pug-lint']);
});
