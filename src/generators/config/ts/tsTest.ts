import getCertainConditions from '@utils/certainConditions';
import convertToJson from '@utils/convertToJson';

const getTsTest = () => {
  const { hasNext } = getCertainConditions();

  const config = {
    ...(hasNext && {
      compilerOptions: {
        jsx: 'react-jsx',
      },
    }),
    extends: './tsconfig.json',
  };
  const result = convertToJson(config);

  return result;
};

export default getTsTest;
