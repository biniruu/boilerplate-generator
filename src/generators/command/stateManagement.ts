import getCertainConditions from '@utils/certainConditions';

const getStateManagementCommands = () => {
  const { hasRecoil } = getCertainConditions();

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
