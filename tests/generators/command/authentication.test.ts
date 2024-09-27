import getAuthenticationCommands from '@generators/command/authentication';
import stateManager from '@store/state';
import { options } from 'tests/options.test';

test('should return empty arrays when all options are false', () => {
  const { authenticationDependencies, authenticationDevDependencies } = getAuthenticationCommands();

  expect(authenticationDependencies).toBeEmpty();
  expect(authenticationDevDependencies).toBeEmpty();
});

test('should return dependencies for bcrypt.js', () => {
  stateManager.setState({
    ...options,
    bcrypt: true,
    typescript: true,
  });
  const { authenticationDependencies, authenticationDevDependencies } = getAuthenticationCommands();

  const dependencies = ['bcryptjs'];
  expect(authenticationDependencies).toIncludeSameMembers(dependencies);

  const devDependencies = ['@types/bcryptjs'];
  expect(authenticationDevDependencies).toIncludeSameMembers(devDependencies);
});

test('should return dependencies for NextAuth.js', () => {
  stateManager.setState({
    ...options,
    next: true,
    nextAuth: true,
  });
  const { authenticationDependencies } = getAuthenticationCommands();

  const dependencies = ['next-auth'];
  expect(authenticationDependencies).toIncludeSameMembers(dependencies);
});
