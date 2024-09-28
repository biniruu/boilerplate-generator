import getStateManagementCommands from '@generators/command/stateManagement';
import { stateOptions } from '@store/state';
import { options } from 'tests/options.test';

test('should return an empty array when all options are false', () => {
  const { stateManagementDependencies } = getStateManagementCommands();

  expect(stateManagementDependencies).toBeEmpty();
});

test('should return dependencies for Recoil', () => {
  stateOptions.setState({
    ...options,
    recoil: true,
  });
  const { stateManagementDependencies } = getStateManagementCommands();

  expect(stateManagementDependencies).toEqual(['recoil']);
});
