import { SelectOptions } from '_types'

const getCompilerCommands = (configOptions: SelectOptions) => {
  const hasBabel = configOptions.babel
  const hasWordpress = configOptions.wordpress

  const compilerDependencies: string[] = []
  const compilerDevDependencies: string[] = []

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
