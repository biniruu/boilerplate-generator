import getValidationCommands from '@generators/command/validation';
import { stateOptions } from '@store/state';
import { options } from 'tests/options.test';

test('should return an empty array when all options are false', () => {
  const { validationDependencies } = getValidationCommands();

  expect(validationDependencies).toBeEmpty();
});

test('should return dependencies for Joi', () => {
  stateOptions.setState({
    ...options,
    joi: true,
  });
  const { validationDependencies } = getValidationCommands();

  expect(validationDependencies).toEqual(['joi']);
});

test('should return dependencies for React Hook Form', () => {
  stateOptions.setState({
    ...options,
    reactHookForm: true,
  });
  const { validationDependencies } = getValidationCommands();

  expect(validationDependencies).toEqual(['react-hook-form']);
});
