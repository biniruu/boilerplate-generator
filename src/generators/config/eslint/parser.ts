import getCertainConditions from '@utils/certainConditions';

const mergeParser = () => {
  const { hasTypescript } = getCertainConditions();

  return hasTypescript ? '@typescript-eslint/parser' : '@babel/eslint-parser';
};

export default mergeParser;
