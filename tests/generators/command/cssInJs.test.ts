import getCssInJsCommands from '@generators/command/cssInJs';
import stateManager from '@store/state';
import { options } from 'tests/configOptions.test';

test('should return an empty array when all options are false', () => {
  const { cssInJsDevDependencies } = getCssInJsCommands();

  expect(cssInJsDevDependencies).toBeEmpty();
});

test('should return dependencies for styled-components', () => {
  stateManager.setState({
    ...options,
    styledComponents: true,
  });
  const { cssInJsDependencies } = getCssInJsCommands();

  expect(cssInJsDependencies).toEqual(['styled-components']);
});

test('should return dependencies for styled-components with TypeScript', () => {
  stateManager.setState({
    ...options,
    styledComponents: true,
    typescript: true,
  });
  const { cssInJsDependencies, cssInJsDevDependencies } = getCssInJsCommands();

  expect(cssInJsDependencies).toEqual(['styled-components']);
  expect(cssInJsDevDependencies).toEqual(['@types/styled-components']);
});
