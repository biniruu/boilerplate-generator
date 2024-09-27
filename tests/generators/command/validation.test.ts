import getValidationCommands from '@generators/command/validation';
import stateManager from '@store/state';
import { options } from 'tests/configOptions.test';

test('should return an empty array when all options are false', () => {
  const { validationDependencies } = getValidationCommands();

  expect(validationDependencies).toBeEmpty();
});

test('should return dependencies for Joi', () => {
  stateManager.setState({
    ...options,
    joi: true,
  });
  const { validationDependencies } = getValidationCommands();

  expect(validationDependencies).toEqual(['joi']);
});

test('should return dependencies for React Hook Form', () => {
  stateManager.setState({
    ...options,
    reactHookForm: true,
  });
  const { validationDependencies } = getValidationCommands();

  expect(validationDependencies).toEqual(['react-hook-form']);
});
