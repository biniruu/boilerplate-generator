import getCertainConditions from '@utils/certainConditions';

const getHtmlTemplateCommands = () => {
  const { hasEjs, hasPug, hasTypescript } = getCertainConditions();

  const htmlTemplateDependencies: string[] = [];
  const htmlTemplateDevDependencies: string[] = [];

  /**
   * ejs (EJS)
   * {@link https://ejs.co}
   */
  if (hasEjs) {
    htmlTemplateDependencies.push('ejs');
    hasTypescript && htmlTemplateDevDependencies.push('@types/ejs');
  }
  /**
   * pug (Pug)
   * {@link https://pugjs.org/api/getting-started.html}
   *
   * pug-lint
   * {@link https://github.com/pugjs/pug-lint#pug-lint}
   */
  if (hasPug) {
    htmlTemplateDependencies.push('pug');
    htmlTemplateDevDependencies.push('pug-lint');
  }

  return {
    htmlTemplateDependencies,
    htmlTemplateDevDependencies,
  };
};

export default getHtmlTemplateCommands;
