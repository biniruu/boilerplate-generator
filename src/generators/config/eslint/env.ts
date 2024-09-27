import getCertainConditions from '@utils/certainConditions';

const getEnv = () => {
  const { hasJest } = getCertainConditions();

  const env = {
    browser: true,
    es6: true,
    node: true,
  };
  const result = hasJest ? { ...env, 'jest/globals': true } : env;

  return result;
};

export default getEnv;
