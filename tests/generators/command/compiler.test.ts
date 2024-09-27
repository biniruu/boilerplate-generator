import getCompilerCommands from '@generators/command/compiler';
import stateManager from '@store/state';
import { options } from 'tests/options.test';

test('should return an empty array when all options are false', () => {
  const { compilerDevDependencies } = getCompilerCommands();

  expect(compilerDevDependencies).toBeEmpty();
});

const devDependenciesWithoutWordpress = [
  '@babel/node',
  '@babel/plugin-transform-modules-commonjs',
  '@babel/plugin-transform-runtime',
  '@babel/preset-env',
];

test('should return dependencies for Babel', () => {
  stateManager.setState({
    ...options,
    babel: true,
  });
  const { compilerDevDependencies } = getCompilerCommands();

  expect(compilerDevDependencies).toIncludeSameMembers(['@babel/core', ...devDependenciesWithoutWordpress]);
});

test('should return dependencies for Babel with Wordpress', () => {
  stateManager.setState({
    ...options,
    babel: true,
    wordpress: true,
  });
  const { compilerDevDependencies } = getCompilerCommands();

  expect(compilerDevDependencies).toIncludeSameMembers(['@babel/core']);
});
