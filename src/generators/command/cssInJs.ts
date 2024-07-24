import getCertainConditions from '@utils/certainConditions'
import type { SelectOptions } from '_types'

const getCssInJsCommands = (configOptions: SelectOptions) => {
  const { hasStyledComponents, hasTypescript } = getCertainConditions(configOptions)

  const cssInJsDependencies: string[] = []
  const cssInJsDevDependencies: string[] = []

  /**
   * styled-components
   * {@link https://styled-components.com}
   */
  if (hasStyledComponents) {
    cssInJsDependencies.push('styled-components')
    hasTypescript && cssInJsDevDependencies.push('@types/styled-components')
  }

  return {
    cssInJsDependencies,
    cssInJsDevDependencies,
  }
}

export default getCssInJsCommands
