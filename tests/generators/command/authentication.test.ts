import getAuthenticationCommands from '@generators/command/authentication'
import { configOptions } from 'tests/configOptions.test'

test('should return empty arrays when all options are false', () => {
  const { authenticationDependencies, authenticationDevDependencies } = getAuthenticationCommands(configOptions)

  expect(authenticationDependencies).toBeEmpty()
  expect(authenticationDevDependencies).toBeEmpty()
})

test('should return dependencies for bcrypt.js', () => {
  configOptions.bcrypt = true
  configOptions.typescript = true

  const { authenticationDependencies, authenticationDevDependencies } = getAuthenticationCommands(configOptions)

  const dependencies = ['bcryptjs']
  expect(authenticationDependencies).toIncludeSameMembers(dependencies)

  const devDependencies = ['@types/bcryptjs']
  expect(authenticationDevDependencies).toIncludeSameMembers(devDependencies)
})

test('should return dependencies for NextAuth.js', () => {
  configOptions.next = true
  configOptions.nextAuth = true

  const { authenticationDependencies } = getAuthenticationCommands(configOptions)

  const dependencies = ['next-auth']
  expect(authenticationDependencies).toIncludeSameMembers(dependencies)
})
