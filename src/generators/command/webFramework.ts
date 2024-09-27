import getCertainConditions from '@utils/certainConditions';

const getWebFrameworkCommands = () => {
  const { hasExpress, hasNext, hasNuxt, hasReact, hasThree, hasTypescript, hasVue } = getCertainConditions();

  const webFrameworkDependencies: string[] = [];
  const webFrameworkDevDependencies: string[] = [];

  /**
   * body-parser
   * {@link https://github.com/expressjs/body-parser#readme}
   *
   * cors
   * {@link https://github.com/expressjs/cors#readme}
   *
   * express (Express)
   * {@link https://expressjs.com}
   */
  if (hasExpress) {
    webFrameworkDependencies.push('body-parser', 'cors', 'express');
    hasTypescript && webFrameworkDevDependencies.push('@types/body-parser', '@types/cors', '@types/express');
  }
  /**
   * react-router-dom (React Router DOM)
   * {@link https://reactrouter.com/en/main}
   */
  if (hasReact) {
    webFrameworkDependencies.push('react-router-dom');
  }
  /**
   * react-refresh
   * {@link https://www.npmjs.com/package/react-refresh}
   */
  if (hasNext || hasReact) {
    webFrameworkDependencies.push('react-refresh');
  }
  /**
   * volar-service-vetur
   * {@link https://github.com/volarjs/services/tree/master/packages/vetur#volar-service-vetur}
   *
   * vue-tsc
   * {@link https://github.com/vuejs/language-tools/tree/master/packages/tsc#vue-tsc}
   * {@link https://github.com/vuejs/language-tools#readme}
   */
  if (hasNuxt || hasVue) {
    webFrameworkDevDependencies.push('volar-service-vetur');
    hasTypescript && webFrameworkDevDependencies.push('vue-tsc');
  }
  /**
   * three (three.js)
   * {@link https://threejs.org}
   */
  if (hasThree) {
    webFrameworkDependencies.push('three');
    hasTypescript && webFrameworkDevDependencies.push('@types/three');
  }

  return {
    webFrameworkDependencies,
    webFrameworkDevDependencies,
  };
};

export default getWebFrameworkCommands;
