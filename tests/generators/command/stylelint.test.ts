import getStylelintCommands from '@generators/command/stylelint';
import { configOptions } from 'tests/configOptions.test';

test('should return an empty array when all options are false', () => {
  const { stylelintDevDependencies } = getStylelintCommands(configOptions);

  expect(stylelintDevDependencies).toBeEmpty();
});

const dependencies = ['stylelint', 'stylelint-config-standard', 'stylelint-order'];
test('should return dependencies for Stylelint', () => {
  configOptions.stylelint = true;

  const { stylelintDevDependencies } = getStylelintCommands(configOptions);

  expect(stylelintDevDependencies).toIncludeSameMembers(dependencies);
});

test('should return dependencies for Stylelint with SCSS', () => {
  configOptions.stylelint = true;
  configOptions.scss = true;

  const { stylelintDevDependencies } = getStylelintCommands(configOptions);

  expect(stylelintDevDependencies).toIncludeSameMembers([
    'stylelint-config-standard-scss',
    'stylelint-scss',
    ...dependencies,
  ]);
});
