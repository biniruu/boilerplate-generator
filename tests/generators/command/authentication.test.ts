import getAuthenticationCommands from '@generators/command/authentication'

import { configOptions } from './configOptions.test'

describe('Generate command for authentication', () => {
  test('should generate command for bcrypt.js', () => {
    configOptions.bcrypt = true
    configOptions.typescript = true

    const { authenticationDependencies, authenticationDevDependencies } = getAuthenticationCommands(configOptions)

    const dependencies = ['bcryptjs']
    expect(authenticationDependencies).toIncludeSameMembers(dependencies)

    const devDependencies = ['@types/bcryptjs']
    expect(authenticationDevDependencies).toIncludeSameMembers(devDependencies)
  })

  test('should generate command for NextAuth.js', () => {
    configOptions.next = true
    configOptions.nextAuth = true

    const { authenticationDependencies } = getAuthenticationCommands(configOptions)

    const dependencies = ['next-auth']
    expect(authenticationDependencies).toIncludeSameMembers(dependencies)
  })

  test('should generate an empty array when all options in configOptions are false', () => {
    const { authenticationDependencies, authenticationDevDependencies } = getAuthenticationCommands(configOptions)

    expect(authenticationDependencies).toBeEmpty()
    expect(authenticationDevDependencies).toBeEmpty()
  })
})
