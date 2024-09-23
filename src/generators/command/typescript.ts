import getCertainConditions from '@utils/certainConditions';
import type { SelectOptions } from '_types';

const getTypescriptCommands = (configOptions: SelectOptions) => {
  const { hasTypescript, hasJsLibs, hasGatsby, hasWordpress } = getCertainConditions(configOptions);

  const typescriptDevDependencies: string[] = [];
  const libsContainTs = hasJsLibs || hasGatsby || hasWordpress;

  if (hasTypescript) {
    !libsContainTs && typescriptDevDependencies.push('typescript');
  }

  return { typescriptDevDependencies };
};

export default getTypescriptCommands;
