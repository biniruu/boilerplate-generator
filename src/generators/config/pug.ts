import convertToJson from '@utils/convertToJson';

const generatePugConfig = () => {
  const pugLint = {
    disallowAttributeTemplateString: true,
  };

  const result = convertToJson(pugLint);

  return result;
};

export default generatePugConfig;
