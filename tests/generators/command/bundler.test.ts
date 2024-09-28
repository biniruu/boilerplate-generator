import getBundlerCommands from '@generators/command/bundler';
import { stateOptions } from '@store/state';
import { options } from 'tests/options.test';

test('should return empty arrays when all options are false', () => {
  const { bundlerDependencies, bundlerDevDependencies } = getBundlerCommands();

  expect(bundlerDependencies).toBeEmpty();
  expect(bundlerDevDependencies).toBeEmpty();
});

test('should return dependencies for Vite', () => {
  stateOptions.setState({
    ...options,
    vite: true,
  });
  const { bundlerDependencies, bundlerDevDependencies } = getBundlerCommands();

  const dependencies = ['vite'];
  expect(bundlerDependencies).toIncludeSameMembers(dependencies);

  const devDependencies = ['vite-plugin-dts'];
  expect(bundlerDevDependencies).toIncludeSameMembers(devDependencies);
});

test('should return dependencies for Vite with TypeScript', () => {
  stateOptions.setState({
    ...options,
    vite: true,
    typescript: true,
  });
  const { bundlerDependencies, bundlerDevDependencies } = getBundlerCommands();

  const dependencies = ['vite'];
  expect(bundlerDependencies).toIncludeSameMembers(dependencies);

  const devDependencies = ['vite-tsconfig-paths', 'vite-plugin-dts'];
  expect(bundlerDevDependencies).toIncludeSameMembers(devDependencies);
});

test('should return dependencies for Vite with React.js and TypeScript', () => {
  stateOptions.setState({
    ...options,
    vite: true,
    react: true,
    typescript: true,
  });
  const { bundlerDependencies, bundlerDevDependencies } = getBundlerCommands();

  expect(bundlerDependencies).toBeEmpty();

  const devDependencies = ['vite-tsconfig-paths', 'vite-plugin-dts'];
  expect(bundlerDevDependencies).toIncludeSameMembers(devDependencies);
});

const devDependenciesWithoutThree = ['html-webpack-plugin', 'mini-css-extract-plugin', 'workbox-webpack-plugin'];

test('should return dependencies for Webpack', () => {
  stateOptions.setState({
    ...options,
    webpack: true,
  });
  const { bundlerDevDependencies } = getBundlerCommands();

  expect(bundlerDevDependencies).toIncludeAllMembers([
    '@swc/html',
    'source-map-loader',
    'style-loader',
    'webpack',
    'webpack-cli',
    'webpack-dev-server',
    'webpack-merge',
    'copy-webpack-plugin',
    'mini-css-extract-plugin',
    'workbox-webpack-plugin',
  ]);
});

test('should return dependencies for Webpack with Three.js', () => {
  stateOptions.setState({
    ...options,
    webpack: true,
    three: true,
  });
  const { bundlerDevDependencies } = getBundlerCommands();

  expect(bundlerDevDependencies).not.toIncludeAllMembers(devDependenciesWithoutThree);
});

test('should return dependencies for Webpack with Next.js', () => {
  stateOptions.setState({
    ...options,
    webpack: true,
    next: true,
  });
  const { bundlerDevDependencies } = getBundlerCommands();

  const devDependencies = ['source-map-loader'];
  expect(bundlerDevDependencies).toEqual(devDependencies);
});

test('should return dependencies for Webpack with SCSS', () => {
  stateOptions.setState({
    ...options,
    webpack: true,
    scss: true,
  });
  const { bundlerDevDependencies } = getBundlerCommands();

  expect(bundlerDevDependencies).toContain('sass-loader');
});

test('should return dependencies for Webpack with TypeScript', () => {
  stateOptions.setState({
    ...options,
    webpack: true,
    typescript: true,
  });
  const { bundlerDevDependencies } = getBundlerCommands();

  const devDependencies = ['@types/webpack', 'ts-loader'];
  expect(bundlerDevDependencies).toIncludeAllMembers(devDependencies);
});

test('should return dependencies for Webpack with TypeScript and SCSS', () => {
  stateOptions.setState({
    ...options,
    webpack: true,
    typescript: true,
    scss: true,
  });
  const { bundlerDevDependencies } = getBundlerCommands();

  const devDependencies = ['@types/webpack', 'ts-loader', 'sass-loader'];
  expect(bundlerDevDependencies).toIncludeAllMembers(devDependencies);
});

test('should return dependencies for esbuild', () => {
  stateOptions.setState({
    ...options,
    esbuild: true,
  });
  const { bundlerDevDependencies } = getBundlerCommands();

  const devDependencies = ['esbuild'];
  expect(bundlerDevDependencies).toIncludeSameMembers(devDependencies);
});

test('should return dependencies for esbuild with Jest', () => {
  stateOptions.setState({
    ...options,
    esbuild: true,
    jest: true,
  });

  const { bundlerDevDependencies } = getBundlerCommands();

  const devDependencies = ['esbuild', 'esbuild-jest'];
  expect(bundlerDevDependencies).toIncludeSameMembers(devDependencies);
});
