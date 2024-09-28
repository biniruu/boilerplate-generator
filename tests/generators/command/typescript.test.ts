import getTypescriptCommands from '@generators/command/typescript';
import { stateOptions } from '@store/state';
import { options } from 'tests/options.test';

test('should return empty arrays when all options are false', () => {
  const { typescriptDevDependencies } = getTypescriptCommands();

  expect(typescriptDevDependencies).toBeEmpty();
});

test('should return empty arrays when one of JS Libraries is selected', () => {
  stateOptions.setState({
    ...options,
    next: true,
    typescript: true,
  });
  const { typescriptDevDependencies } = getTypescriptCommands();

  expect(typescriptDevDependencies).toBeEmpty();
});

test('should return empty arrays when Gatsby.js is selected', () => {
  stateOptions.setState({
    ...options,
    gatsby: true,
    typescript: true,
  });
  const { typescriptDevDependencies } = getTypescriptCommands();

  expect(typescriptDevDependencies).toBeEmpty();
});

test('should return empty arrays when Wordpress is selected', () => {
  stateOptions.setState({
    ...options,
    wordpress: true,
    typescript: true,
  });
  const { typescriptDevDependencies } = getTypescriptCommands();

  expect(typescriptDevDependencies).toBeEmpty();
});

test('should return empty arrays when TypeScript is not selected', () => {
  stateOptions.setState({
    ...options,
    javascript: true,
  });
  const { typescriptDevDependencies } = getTypescriptCommands();

  expect(typescriptDevDependencies).toBeEmpty();
});

test('should return dependencies for TypeScript', () => {
  stateOptions.setState({
    ...options,
    typescript: true,
  });
  const { typescriptDevDependencies } = getTypescriptCommands();

  expect(typescriptDevDependencies).toEqual(['typescript']);
});
