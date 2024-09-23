import getAuthenticationCommands from '@generators/command/authentication';
import { configOptions } from 'tests/configOptions.test';

test('should return empty arrays when all options are false', () => {
  const { authenticationDependencies, authenticationDevDependencies } = getAuthenticationCommands(configOptions);

  expect(authenticationDependencies).toBeEmpty();
  expect(authenticationDevDependencies).toBeEmpty();
});

test('should return dependencies for bcrypt.js', () => {
  const { authenticationDependencies, authenticationDevDependencies } = getAuthenticationCommands({
    ...configOptions,
    bcrypt: true,
    typescript: true,
  });

  const dependencies = ['bcryptjs'];
  expect(authenticationDependencies).toIncludeSameMembers(dependencies);

  const devDependencies = ['@types/bcryptjs'];
  expect(authenticationDevDependencies).toIncludeSameMembers(devDependencies);
});

test('should return dependencies for NextAuth.js', () => {
  const { authenticationDependencies } = getAuthenticationCommands({ ...configOptions, next: true, nextAuth: true });

  const dependencies = ['next-auth'];
  expect(authenticationDependencies).toIncludeSameMembers(dependencies);
});
