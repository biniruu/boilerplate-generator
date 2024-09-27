import getTypescriptCommands from '@generators/command/typescript';
import stateManager from '@store/state';
import { options } from 'tests/configOptions.test';

test('should return empty arrays when all options are false', () => {
  const { typescriptDevDependencies } = getTypescriptCommands();

  expect(typescriptDevDependencies).toBeEmpty();
});

test('should return empty arrays when one of JS Libraries is selected', () => {
  stateManager.setState({
    ...options,
    next: true,
    typescript: true,
  });
  const { typescriptDevDependencies } = getTypescriptCommands();

  expect(typescriptDevDependencies).toBeEmpty();
});

test('should return empty arrays when Gatsby.js is selected', () => {
  stateManager.setState({
    ...options,
    gatsby: true,
    typescript: true,
  });
  const { typescriptDevDependencies } = getTypescriptCommands();

  expect(typescriptDevDependencies).toBeEmpty();
});

test('should return empty arrays when Wordpress is selected', () => {
  stateManager.setState({
    ...options,
    wordpress: true,
    typescript: true,
  });
  const { typescriptDevDependencies } = getTypescriptCommands();

  expect(typescriptDevDependencies).toBeEmpty();
});

test('should return empty arrays when TypeScript is not selected', () => {
  stateManager.setState({
    ...options,
    javascript: true,
  });
  const { typescriptDevDependencies } = getTypescriptCommands();

  expect(typescriptDevDependencies).toBeEmpty();
});

test('should return dependencies for TypeScript', () => {
  stateManager.setState({
    ...options,
    typescript: true,
  });
  const { typescriptDevDependencies } = getTypescriptCommands();

  expect(typescriptDevDependencies).toEqual(['typescript']);
});
