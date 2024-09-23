import getCertainConditions from '@utils/certainConditions';
import type { SelectOptions } from '_types';

const getStateManagementCommands = (configOptions: SelectOptions) => {
  const { hasRecoil } = getCertainConditions(configOptions);

  const stateManagementDependencies: string[] = [];

  /**
   * recoil (Recoil)
   * {@link https://recoiljs.org}
   */
  if (hasRecoil) {
    stateManagementDependencies.push('recoil');
  }

  return {
    stateManagementDependencies,
  };
};

export default getStateManagementCommands;
