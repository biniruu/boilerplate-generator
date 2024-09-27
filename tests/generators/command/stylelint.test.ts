import getStylelintCommands from '@generators/command/stylelint';
import stateManager from '@store/state';
import { options } from 'tests/configOptions.test';

test('should return an empty array when all options are false', () => {
  const { stylelintDevDependencies } = getStylelintCommands();

  expect(stylelintDevDependencies).toBeEmpty();
});

const dependencies = ['stylelint', 'stylelint-config-standard', 'stylelint-order'];
test('should return dependencies for Stylelint', () => {
  stateManager.setState({
    ...options,
    stylelint: true,
  });
  const { stylelintDevDependencies } = getStylelintCommands();

  expect(stylelintDevDependencies).toIncludeSameMembers(dependencies);
});

test('should return dependencies for Stylelint with SCSS', () => {
  stateManager.setState({
    ...options,
    stylelint: true,
    scss: true,
  });
  const { stylelintDevDependencies } = getStylelintCommands();

  expect(stylelintDevDependencies).toIncludeSameMembers([
    'stylelint-config-standard-scss',
    'stylelint-scss',
    ...dependencies,
  ]);
});
