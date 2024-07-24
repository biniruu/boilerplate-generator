import getJsRuntimeCommands from '@generators/command/jsRuntime'
import { configOptions } from 'tests/configOptions.test'

describe('JavaScript Runtime', () => {
  test('should return an empty value when all options are false', () => {
    const { jsRuntimeDevDependencies } = getJsRuntimeCommands(configOptions)

    expect(jsRuntimeDevDependencies).toBeEmpty()
  })
})
