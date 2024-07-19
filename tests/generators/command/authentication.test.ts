import getAuthenticationCommands from '@generators/command/authentication'

import { configOptions } from './configOptions.test'

describe('Generate command for authentication', () => {
  test('should generate command for bcrypt.js', () => {
    configOptions.bcrypt = true
    configOptions.typescript = true

    const { authenticationDependencies, authenticationDevDependencies } = getAuthenticationCommands(configOptions)

    expect(authenticationDependencies).toEqual(['bcryptjs'])
    expect(authenticationDevDependencies).toEqual(['@types/bcryptjs'])
  })

  test('should generate command for NextAuth.js', () => {
    configOptions.next = true
    configOptions.nextAuth = true

    const { authenticationDependencies } = getAuthenticationCommands(configOptions)

    expect(authenticationDependencies).toEqual(['next-auth'])
  })

  test('should generate an empty array when all options in configOptions are false', () => {
    const { authenticationDependencies, authenticationDevDependencies } = getAuthenticationCommands(configOptions)

    expect(authenticationDependencies).toBeEmpty()
    expect(authenticationDevDependencies).toBeEmpty()
  })
})