import getCertainConditions from '@utils/certainConditions';

import getTsBuild from './tsBuild';
import getTsConfig from './tsConfig';
import getTsDefault from './tsDefault';
import getTsNode from './tsNode';
import getTsTest from './tsTest';

const tsNode = getTsNode();

const generateTypescriptConfigs = () => {
  const { hasGatsby, hasReact } = getCertainConditions();
  const hasDefaultConfig = !hasGatsby || !hasReact;

  const tsDefaultConfig = getTsDefault();

  const tsBuild = getTsBuild();
  const tsConfig = hasDefaultConfig ? getTsConfig() : tsDefaultConfig;
  const tsDefault = tsDefaultConfig;
  const tsTest = getTsTest();

  // These will become individual files:
  // tsBuild - tsconfig.build.json
  // tsConfig - tsconfig.json
  // tsDefault - tsconfig.default.json
  // tsNode - tsconfig.node.json
  // tsTest - tsconfig.test.json
  return { tsBuild, tsConfig, tsDefault, tsNode, tsTest };
};

export default generateTypescriptConfigs;
