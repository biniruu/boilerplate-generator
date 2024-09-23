import convertToString from '@utils/convertToString';

const generateVolarConfig = () => {
  const config = {
    services: ['replace services'],
  };

  const code = `module.exports = ${convertToString(config)}`;
  const result = code.replace(`'replace services'`, `require('volar-service-vetur').create()`);

  return result;
};

export default generateVolarConfig;
