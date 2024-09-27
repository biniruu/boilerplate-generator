import getCertainConditions from '@utils/certainConditions';

const getCssInJsCommands = () => {
  const { hasStyledComponents, hasTypescript } = getCertainConditions();

  const cssInJsDependencies: string[] = [];
  const cssInJsDevDependencies: string[] = [];

  /**
   * styled-components
   * {@link https://styled-components.com}
   */
  if (hasStyledComponents) {
    cssInJsDependencies.push('styled-components');
    hasTypescript && cssInJsDevDependencies.push('@types/styled-components');
  }

  return {
    cssInJsDependencies,
    cssInJsDevDependencies,
  };
};

export default getCssInJsCommands;
