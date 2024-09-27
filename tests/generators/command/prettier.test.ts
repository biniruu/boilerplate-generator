import getPrettierCommands from '@generators/command/prettier';
import stateManager from '@store/state';
import { options } from 'tests/options.test';

test('should return an empty array when all options are false', () => {
  const { prettierDevDependencies } = getPrettierCommands();

  expect(prettierDevDependencies).toBeEmpty();
});

test('should return dependencies for Prettier', () => {
  stateManager.setState({
    ...options,
    prettier: true,
  });
  const { prettierDevDependencies } = getPrettierCommands();

  expect(prettierDevDependencies).toEqual(['prettier']);
});

test('should return dependencies for Prettier with Pug', () => {
  stateManager.setState({
    ...options,
    prettier: true,
    pug: true,
  });
  const { prettierDevDependencies } = getPrettierCommands();

  expect(prettierDevDependencies).toIncludeSameMembers(['prettier', '@prettier/plugin-pug']);
});

test('should return dependencies for Prettier with Tailwind', () => {
  stateManager.setState({
    ...options,
    prettier: true,
    tailwind: true,
  });
  const { prettierDevDependencies } = getPrettierCommands();

  expect(prettierDevDependencies).toIncludeSameMembers(['prettier', 'prettier-plugin-tailwindcss']);
});
