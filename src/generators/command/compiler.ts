import getCertainConditions from '@utils/certainConditions';
import type { SelectOptions } from '_types';

const getCompilerCommands = (configOptions: SelectOptions) => {
  const { hasBabel, hasWordpress } = getCertainConditions(configOptions);

  const compilerDevDependencies: string[] = [];

  /**
   * Babel
   *
   * @babel/core
   * {@link https://babel.dev/docs/babel-core}
   *
   * @babel/node
   * {@link https://babel.dev/docs/babel-node}
   *
   * @babel/plugin-transform-modules-commonjs
   * {@link https://babel.dev/docs/babel-plugin-transform-modules-commonjs}
   *
   * @babel/plugin-transform-runtime
   * {@link https://babel.dev/docs/babel-plugin-transform-runtime}
   *
   * @babel/preset-env
   * {@link https://babel.dev/docs/babel-preset-env}
   */
  if (hasBabel) {
    compilerDevDependencies.push('@babel/core');
    !hasWordpress &&
      compilerDevDependencies.push(
        '@babel/node',
        '@babel/plugin-transform-modules-commonjs',
        '@babel/plugin-transform-runtime',
        '@babel/preset-env',
      );
  }

  return {
    compilerDevDependencies,
  };
};

export default getCompilerCommands;
