import getJestConfig from './jest';
import getJestSetup from './jestSetup';

const generateJestConfigs = () => {
  const jestConfig = getJestConfig();
  const jestSetup = getJestSetup();

  return { jestConfig, jestSetup };
};

export default generateJestConfigs;
