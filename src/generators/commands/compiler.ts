import type { SelectOptions } from '_types'

const getCompilerCommands = (configOptions: SelectOptions) => {
  const hasBabel = configOptions.babel
  const hasWordpress = configOptions.wordpress

  const compilerDependencies: string[] = []
  const compilerDevDependencies: string[] = []

  /**
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
    if (!hasWordpress) {
      compilerDevDependencies.push(
        '@babel/node',
        '@babel/plugin-transform-modules-commonjs',
        '@babel/plugin-transform-runtime',
        '@babel/preset-env',
      )
    }
    compilerDevDependencies.push('@babel/core')
  }

  return {
    compilerDependencies,
    compilerDevDependencies,
  }
}

export default getCompilerCommands
