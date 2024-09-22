import getTypescriptCommands from '@generators/command/typescript'
import { configOptions } from 'tests/configOptions.test'

test('should return empty arrays when all options are false', () => {
  const { typescriptDevDependencies } = getTypescriptCommands(configOptions)

  expect(typescriptDevDependencies).toBeEmpty()
})

test('should return empty arrays when one of JS Libraries is selected', () => {
  const { typescriptDevDependencies } = getTypescriptCommands({
    ...configOptions,
    next: true,
    typescript: true,
  })

  expect(typescriptDevDependencies).toBeEmpty()
})

test('should return empty arrays when Gatsby.js is selected', () => {
  const { typescriptDevDependencies } = getTypescriptCommands({
    ...configOptions,
    gatsby: true,
    typescript: true,
  })

  expect(typescriptDevDependencies).toBeEmpty()
})

test('should return empty arrays when Wordpress is selected', () => {
  const { typescriptDevDependencies } = getTypescriptCommands({
    ...configOptions,
    wordpress: true,
    typescript: true,
  })

  expect(typescriptDevDependencies).toBeEmpty()
})

test('should return empty arrays when TypeScript is not selected', () => {
  const { typescriptDevDependencies } = getTypescriptCommands({
    ...configOptions,
    javascript: true,
  })

  expect(typescriptDevDependencies).toBeEmpty()
})

test('should return dependencies for TypeScript', () => {
  const { typescriptDevDependencies } = getTypescriptCommands({
    ...configOptions,
    typescript: true,
  })

  expect(typescriptDevDependencies).toEqual(['typescript'])
})
