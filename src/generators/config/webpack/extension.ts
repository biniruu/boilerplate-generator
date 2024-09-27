import getCertainConditions from '@utils/certainConditions';

const getExtension = () => {
  const { hasTypescript } = getCertainConditions();

  return hasTypescript ? 'ts' : 'js';
};

export default getExtension;
