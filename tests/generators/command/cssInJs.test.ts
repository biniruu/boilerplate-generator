import getCssInJsCommands from '@generators/command/cssInJs';
import { configOptions } from 'tests/configOptions.test';

test('should return an empty array when all options are false', () => {
  const { cssInJsDevDependencies } = getCssInJsCommands(configOptions);

  expect(cssInJsDevDependencies).toBeEmpty();
});

test('should return dependencies for styled-components', () => {
  configOptions.styledComponents = true;

  const { cssInJsDependencies } = getCssInJsCommands(configOptions);

  expect(cssInJsDependencies).toEqual(['styled-components']);
});

test('should return dependencies for styled-components with TypeScript', () => {
  configOptions.styledComponents = true;
  configOptions.typescript = true;

  const { cssInJsDependencies, cssInJsDevDependencies } = getCssInJsCommands(configOptions);

  expect(cssInJsDependencies).toEqual(['styled-components']);
  expect(cssInJsDevDependencies).toEqual(['@types/styled-components']);
});
