import type { SelectOptions } from '_types'

const getAuthenticationCommands = (configOptions: SelectOptions) => {
  const hasBcrypt = configOptions.bcrypt
  const hasNext = configOptions.next
  const hasNextAuth = configOptions.nextAuth
  const hasTypescript = configOptions.typescript

  const authenticationDependencies: string[] = []
  const authenticationDevDependencies: string[] = []

  /**
   * bcryptjs (bcrypt.js)
   * {@link https://github.com/dcodeIO/bcrypt.js#readme}
   */
  if (hasBcrypt) {
    if (hasTypescript) {
      authenticationDevDependencies.push('@types/bcryptjs')
    }
    authenticationDependencies.push('bcryptjs')
  }
  /**
   * next-auth (NextAuth.js)
   * {@link https://next-auth.js.org}
   */
  if (hasNextAuth && hasNext) {
    authenticationDependencies.push('next-auth')
  }

  return {
    authenticationDependencies,
    authenticationDevDependencies,
  }
}

export default getAuthenticationCommands
