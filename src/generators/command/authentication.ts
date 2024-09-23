import getCertainConditions from '@utils/certainConditions';
import type { SelectOptions } from '_types';

const getAuthenticationCommands = (configOptions: SelectOptions) => {
  const { hasBcrypt, hasNextAuth, hasTypescript } = getCertainConditions(configOptions);

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
