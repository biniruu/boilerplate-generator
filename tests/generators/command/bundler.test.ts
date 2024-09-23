import getBundlerCommands from '@generators/command/bundler';
import { configOptions } from 'tests/configOptions.test';

test('should return empty arrays when all options are false', () => {
  const { bundlerDependencies, bundlerDevDependencies } = getBundlerCommands(configOptions);

  expect(bundlerDependencies).toBeEmpty();
  expect(bundlerDevDependencies).toBeEmpty();
});

test('should return dependencies for Vite', () => {
  configOptions.vite = true;

  const { bundlerDependencies, bundlerDevDependencies } = getBundlerCommands(configOptions);

  const dependencies = ['vite'];
  expect(bundlerDependencies).toIncludeSameMembers(dependencies);

  const devDependencies = ['vite-plugin-dts'];
  expect(bundlerDevDependencies).toIncludeSameMembers(devDependencies);
});

test('should return dependencies for Vite with TypeScript', () => {
  configOptions.vite = true;
  configOptions.typescript = true;

  const { bundlerDependencies, bundlerDevDependencies } = getBundlerCommands(configOptions);

  const dependencies = ['vite'];
  expect(bundlerDependencies).toIncludeSameMembers(dependencies);

  const devDependencies = ['vite-tsconfig-paths', 'vite-plugin-dts'];
  expect(bundlerDevDependencies).toIncludeSameMembers(devDependencies);
});

test('should return dependencies for Vite with React.js and TypeScript', () => {
  configOptions.vite = true;
  configOptions.react = true;
  configOptions.typescript = true;

  const { bundlerDependencies, bundlerDevDependencies } = getBundlerCommands(configOptions);

  expect(bundlerDependencies).toBeEmpty();

  const devDependencies = ['vite-tsconfig-paths', 'vite-plugin-dts'];
  expect(bundlerDevDependencies).toIncludeSameMembers(devDependencies);
});

const devDependenciesWithoutThree = ['html-webpack-plugin', 'mini-css-extract-plugin', 'workbox-webpack-plugin'];

test('should return dependencies for Webpack', () => {
  configOptions.webpack = true;

  const { bundlerDevDependencies } = getBundlerCommands(configOptions);

  expect(bundlerDevDependencies).toIncludeAllMembers(devDependenciesWithoutThree);
});

test('should return dependencies for Webpack with Three.js', () => {
  configOptions.webpack = true;
  configOptions.three = true;

  const { bundlerDevDependencies } = getBundlerCommands(configOptions);

  expect(bundlerDevDependencies).not.toIncludeAllMembers(devDependenciesWithoutThree);
});

test('should return dependencies for Webpack with Next.js', () => {
  configOptions.webpack = true;
  configOptions.next = true;

  const { bundlerDevDependencies } = getBundlerCommands(configOptions);

  const devDependencies = ['source-map-loader'];
  expect(bundlerDevDependencies).toEqual(devDependencies);
});

test('should return dependencies for Webpack with SCSS', () => {
  configOptions.webpack = true;
  configOptions.scss = true;

  const { bundlerDevDependencies } = getBundlerCommands(configOptions);

  expect(bundlerDevDependencies).toContain('sass-loader');
});

test('should return dependencies for Webpack with TypeScript', () => {
  configOptions.webpack = true;
  configOptions.typescript = true;

  const { bundlerDevDependencies } = getBundlerCommands(configOptions);

  const devDependencies = ['@types/webpack', 'ts-loader'];
  expect(bundlerDevDependencies).toIncludeAllMembers(devDependencies);
});

test('should return dependencies for Webpack with TypeScript and SCSS', () => {
  configOptions.webpack = true;
  configOptions.typescript = true;
  configOptions.scss = true;

  const { bundlerDevDependencies } = getBundlerCommands(configOptions);

  const devDependencies = ['@types/webpack', 'ts-loader', 'sass-loader'];
  expect(bundlerDevDependencies).toIncludeAllMembers(devDependencies);
});

test('should return dependencies for esbuild', () => {
  configOptions.esbuild = true;

  const { bundlerDevDependencies } = getBundlerCommands(configOptions);

  const devDependencies = ['esbuild'];
  expect(bundlerDevDependencies).toIncludeSameMembers(devDependencies);
});

test('should return dependencies for esbuild with Jest', () => {
  configOptions.esbuild = true;
  configOptions.jest = true;

  const { bundlerDevDependencies } = getBundlerCommands(configOptions);

  const devDependencies = ['esbuild', 'esbuild-jest'];
  expect(bundlerDevDependencies).toIncludeSameMembers(devDependencies);
});
