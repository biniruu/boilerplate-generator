import getCssInJsCommands from '@generators/command/cssInJs'

import { configOptions } from './configOptions.test'

describe('CSS in JS', () => {
  test('should return empty values when all options are false', () => {
    const { cssInJsDevDependencies } = getCssInJsCommands(configOptions)

    expect(cssInJsDevDependencies).toBeEmpty()
  })
})
