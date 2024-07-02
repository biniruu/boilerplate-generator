import type { SelectOptions } from '_types'

const getAuthenticationCommands = (configOptions: SelectOptions) => {
  const hasBcrypt = configOptions.bcrypt
  const hasNext = configOptions.next
  const hasNextAuth = configOptions.nextAuth
  const hasTypescript = configOptions.typescript

  const authenticationDependencies: string[] = []
  const authenticationDevDependencies: string[] = []

  if (hasBcrypt) {
    if (hasTypescript) {
      authenticationDevDependencies.push('@types/bcryptjs')
    }
    authenticationDependencies.push('bcryptjs')
  }
  if (hasNextAuth && hasNext) {
    authenticationDependencies.push('next-auth@beta')
  }

  return {
    authenticationDependencies,
    authenticationDevDependencies,
  }
}

export default getAuthenticationCommands
