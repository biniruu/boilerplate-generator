import getCertainConditions from '@utils/certainConditions';

const getAuthenticationCommands = () => {
  const { hasBcrypt, hasNextAuth, hasTypescript } = getCertainConditions();

  const authenticationDependencies: string[] = [];
  const authenticationDevDependencies: string[] = [];

  /**
   * bcryptjs (bcrypt.js)
   * {@link https://github.com/dcodeIO/bcrypt.js#readme}
   */
  if (hasBcrypt) {
    authenticationDependencies.push('bcryptjs');
    hasTypescript && authenticationDevDependencies.push('@types/bcryptjs');
  }
  /**
   * next-auth (NextAuth.js)
   * {@link https://next-auth.js.org}
   */
  if (hasNextAuth) {
    authenticationDependencies.push('next-auth');
  }

  return {
    authenticationDependencies,
    authenticationDevDependencies,
  };
};

export default getAuthenticationCommands;
