import getJsRuntimeCommands from '@generators/command/jsRuntime';
import { stateOptions } from '@store/state';
import { options } from 'tests/options.test';

test('should return an empty array when all options are false', () => {
  const { jsRuntimeDevDependencies } = getJsRuntimeCommands();

  expect(jsRuntimeDevDependencies).toBeEmpty();
});

test('should return dependencies for Node.js', () => {
  stateOptions.setState({
    ...options,
    typescript: true,
  });
  const { jsRuntimeDevDependencies } = getJsRuntimeCommands();

  expect(jsRuntimeDevDependencies).toIncludeSameMembers(['@types/node', 'tsconfig-paths', 'ts-node', 'ts-node-dev']);
});

test('should return dependencies for Node.js with Next.js', () => {
  stateOptions.setState({
    ...options,
    typescript: true,
    next: true,
  });
  const { jsRuntimeDevDependencies } = getJsRuntimeCommands();

  expect(jsRuntimeDevDependencies).toIncludeSameMembers(['@types/node', 'ts-node']);
});

test('should return dependencies for Node.js with React.js and Vite', () => {
  stateOptions.setState({
    ...options,
    typescript: true,
    react: true,
    vite: true,
  });
  const { jsRuntimeDevDependencies } = getJsRuntimeCommands();

  expect(jsRuntimeDevDependencies).toIncludeSameMembers(['@types/node', 'ts-node', 'ts-node-dev']);
});

test('should return dependencies for Webpack', () => {
  stateOptions.setState({
    ...options,
    typescript: true,
    webpack: true,
  });
  const { jsRuntimeDevDependencies } = getJsRuntimeCommands();

  expect(jsRuntimeDevDependencies).toIncludeSameMembers(['tsconfig-paths', 'ts-node', 'ts-node-dev']);
});
