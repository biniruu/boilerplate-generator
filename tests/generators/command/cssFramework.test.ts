import getCssFrameworkCommands from '@generators/command/cssFramework';
import stateManager from '@store/state';
import { options, setHasJsLibs } from 'tests/options.test';

it('should return an empty array when all options are false', () => {
  const { cssFrameworkDevDependencies } = getCssFrameworkCommands();

  expect(cssFrameworkDevDependencies).toBeEmpty();
});

describe('When PostCSS is selected', () => {
  it('should return dependencies for PostCSS with Gatsby.js', () => {
    stateManager.setState({
      ...options,
      postcss: true,
      gatsby: true,
    });
    const { cssFrameworkDevDependencies } = getCssFrameworkCommands();

    expect(cssFrameworkDevDependencies).toEqual(['postcss-html']);
  });

  const devDependenciesWithoutGatsby = [
    'cssnano',
    'postcss-flexbugs-fixes',
    'postcss-hexrgba',
    'postcss-html',
    'postcss-loader',
    'postcss-normalize',
    'postcss-preset-env',
    'postcss-syntax',
  ];

  it('should return dependencies for PostCSS without Gatsby.js and JavaScript Libraries', () => {
    stateManager.setState({
      ...options,
      postcss: true,
    });
    const { cssFrameworkDevDependencies } = getCssFrameworkCommands();

    expect(cssFrameworkDevDependencies).toIncludeSameMembers(['postcss', ...devDependenciesWithoutGatsby]);
  });

  it('should return dependencies for PostCSS with JavaScript Libraries but should exclude Gatsby.js', () => {
    stateManager.setState({
      ...options,
      postcss: true,
    });
    const { cssFrameworkDevDependencies } = getCssFrameworkCommands();

    expect(cssFrameworkDevDependencies).toIncludeSameMembers(['postcss', ...devDependenciesWithoutGatsby]);
  });

  it('should return dependencies for PostCSS without JavaScript Libraries but should exclude Gatsby.js', () => {
    stateManager.setState({
      ...options,
      postcss: true,
    });
    setHasJsLibs();
    const { cssFrameworkDevDependencies } = getCssFrameworkCommands();

    expect(cssFrameworkDevDependencies).toIncludeSameMembers(['postcss-jsx', ...devDependenciesWithoutGatsby]);
  });

  it('should return dependencies for PostCSS with SCSS but should exclude Gatsby.js and JavaScript Libraries', () => {
    stateManager.setState({
      ...options,
      postcss: true,
      scss: true,
    });
    const { cssFrameworkDevDependencies } = getCssFrameworkCommands();

    expect(cssFrameworkDevDependencies).toIncludeSameMembers([
      'postcss',
      'postcss-scss',
      'sass',
      ...devDependenciesWithoutGatsby,
    ]);
  });
});

test('should return dependencies for SCSS', () => {
  stateManager.setState({
    ...options,
    scss: true,
  });
  const { cssFrameworkDevDependencies } = getCssFrameworkCommands();

  expect(cssFrameworkDevDependencies).toEqual(['sass']);
});

test('should return dependencies for Tailwind CSS', () => {
  stateManager.setState({
    ...options,
    tailwind: true,
  });
  const { cssFrameworkDevDependencies } = getCssFrameworkCommands();

  expect(cssFrameworkDevDependencies).toEqual(['tailwindcss']);
});
