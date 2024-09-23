import getCssFrameworkCommands from '@generators/command/cssFramework';
import { configOptions, setHasJsLibs } from 'tests/configOptions.test';

it('should return an empty array when all options are false', () => {
  const { cssFrameworkDevDependencies } = getCssFrameworkCommands(configOptions);

  expect(cssFrameworkDevDependencies).toBeEmpty();
});

describe('When PostCSS is selected', () => {
  it('should return dependencies for PostCSS with Gatsby.js', () => {
    configOptions.postcss = true;
    configOptions.gatsby = true;

    const { cssFrameworkDevDependencies } = getCssFrameworkCommands(configOptions);

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
    configOptions.postcss = true;

    const { cssFrameworkDevDependencies } = getCssFrameworkCommands(configOptions);

    expect(cssFrameworkDevDependencies).toIncludeSameMembers(['postcss', ...devDependenciesWithoutGatsby]);
  });

  it('should return dependencies for PostCSS with JavaScript Libraries but should exclude Gatsby.js', () => {
    configOptions.postcss = true;

    const { cssFrameworkDevDependencies } = getCssFrameworkCommands(configOptions);

    expect(cssFrameworkDevDependencies).toIncludeSameMembers(['postcss', ...devDependenciesWithoutGatsby]);
  });

  it('should return dependencies for PostCSS without JavaScript Libraries but should exclude Gatsby.js', () => {
    configOptions.postcss = true;
    setHasJsLibs();

    const { cssFrameworkDevDependencies } = getCssFrameworkCommands(configOptions);

    expect(cssFrameworkDevDependencies).toIncludeSameMembers(['postcss-jsx', ...devDependenciesWithoutGatsby]);
  });

  it('should return dependencies for PostCSS with SCSS but should exclude Gatsby.js and JavaScript Libraries', () => {
    configOptions.postcss = true;
    configOptions.scss = true;

    const { cssFrameworkDevDependencies } = getCssFrameworkCommands(configOptions);

    expect(cssFrameworkDevDependencies).toIncludeSameMembers([
      'postcss',
      'postcss-scss',
      ...devDependenciesWithoutGatsby,
    ]);
  });
});

test('should return dependencies for SCSS', () => {
  configOptions.scss = true;

  const { cssFrameworkDevDependencies } = getCssFrameworkCommands(configOptions);

  expect(cssFrameworkDevDependencies).toEqual(['sass']);
});

test('should return dependencies for Tailwind CSS', () => {
  configOptions.tailwind = true;

  const { cssFrameworkDevDependencies } = getCssFrameworkCommands(configOptions);

  expect(cssFrameworkDevDependencies).toEqual(['tailwindcss']);
});
