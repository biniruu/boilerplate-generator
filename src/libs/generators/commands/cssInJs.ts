import { SelectOptions } from '_types'

const getCssInJsCommands = (configOptions: SelectOptions) => {
  const hasStyledComponents = configOptions.styledComponents
  const hasTypescript = configOptions.typescript

  const cssInJsDependencies: string[] = []
  const cssInJsDevDependencies: string[] = []

  if (hasStyledComponents) {
    if (hasTypescript) {
      cssInJsDevDependencies.push('@types/styled-components')
    }
    cssInJsDependencies.push('styled-components')
  }

  return {
    cssInJsDependencies,
    cssInJsDevDependencies,
  }
}

export default getCssInJsCommands
