import getWebFrameworkCommands from '@generators/command/webFramework'
import { configOptions } from 'tests/configOptions.test'

test('should return empty arrays when all options are false', () => {
  const { webFrameworkDependencies, webFrameworkDevDependencies } = getWebFrameworkCommands(configOptions)

  expect(webFrameworkDependencies).toBeEmpty()
  expect(webFrameworkDevDependencies).toBeEmpty()
})

test('should return dependencies for Express.js', () => {
  configOptions.express = true

  const { webFrameworkDependencies } = getWebFrameworkCommands(configOptions)

  expect(webFrameworkDependencies).toIncludeSameMembers(['body-parser', 'cors', 'express'])
})

test('should return dependencies for Express.js with TypeScript', () => {
  configOptions.express = true
  configOptions.typescript = true

  const { webFrameworkDependencies, webFrameworkDevDependencies } = getWebFrameworkCommands(configOptions)

  expect(webFrameworkDependencies).toIncludeSameMembers(['body-parser', 'cors', 'express'])
  expect(webFrameworkDevDependencies).toIncludeSameMembers(['@types/body-parser', '@types/cors', '@types/express'])
})

test('should return dependencies for Next.js', () => {
  configOptions.next = true

  const { webFrameworkDependencies } = getWebFrameworkCommands(configOptions)

  expect(webFrameworkDependencies).toEqual(['react-refresh'])
})

test('should return dependencies for React.js', () => {
  configOptions.react = true

  const { webFrameworkDependencies } = getWebFrameworkCommands(configOptions)

  expect(webFrameworkDependencies).toIncludeSameMembers(['react-refresh', 'react-router-dom'])
})

test('should return dependencies for Nuxt.js', () => {
  configOptions.nuxt = true

  const { webFrameworkDevDependencies } = getWebFrameworkCommands(configOptions)

  expect(webFrameworkDevDependencies).toEqual(['volar-service-vetur'])
})

test('should return dependencies for Nuxt.js with TypeScript', () => {
  configOptions.nuxt = true
  configOptions.typescript = true

  const { webFrameworkDevDependencies } = getWebFrameworkCommands(configOptions)

  expect(webFrameworkDevDependencies).toIncludeSameMembers(['volar-service-vetur', 'vue-tsc'])
})

test('should return dependencies for three.js', () => {
  configOptions.three = true

  const { webFrameworkDependencies } = getWebFrameworkCommands(configOptions)

  expect(webFrameworkDependencies).toEqual(['three'])
})

test('should return dependencies for three.js with TypeScript', () => {
  configOptions.three = true
  configOptions.typescript = true

  const { webFrameworkDependencies, webFrameworkDevDependencies } = getWebFrameworkCommands(configOptions)

  expect(webFrameworkDependencies).toEqual(['three'])
  expect(webFrameworkDevDependencies).toEqual(['@types/three'])
})
