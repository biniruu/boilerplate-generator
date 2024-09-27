import getCertainConditions from '@utils/certainConditions';

const getTypescriptCommands = () => {
  const { hasTypescript, hasJsLibs, hasGatsby, hasWordpress } = getCertainConditions();

  const typescriptDevDependencies: string[] = [];
  const libsContainTs = hasJsLibs || hasGatsby || hasWordpress;

  if (hasTypescript) {
    !libsContainTs && typescriptDevDependencies.push('typescript');
  }

  return { typescriptDevDependencies };
};

export default getTypescriptCommands;
