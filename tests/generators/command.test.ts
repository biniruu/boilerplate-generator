import { objOptions } from '@data/options'
import getAuthenticationCommands from '@generators/command/authentication'
import type { SelectOptions } from '_types'

describe('Generate commands', () => {
  describe('getAuthenticationCommands function', () => {
    let configOptions: SelectOptions

    beforeEach(() => {
      configOptions = { ...objOptions }
    })

    test('should generate command for bcrypt.js', () => {
      configOptions.bcrypt = true
      configOptions.typescript = true

      const { authenticationDependencies, authenticationDevDependencies } = getAuthenticationCommands(configOptions)

      expect(authenticationDependencies).toContain('bcryptjs')
      expect(authenticationDevDependencies).toContain('@types/bcryptjs')
    })

    test('should generate command for NextAuth.js', () => {
      configOptions.next = true
      configOptions.nextAuth = true

      const { authenticationDependencies } = getAuthenticationCommands(configOptions)

      expect(authenticationDependencies).toContain('next-auth')
    })
  })
})
