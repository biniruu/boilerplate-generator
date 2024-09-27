import getJestConfig from '@generators/config/jest/jest';
import getJestSetup from '@generators/config/jest/jestSetup';
import stateManager from '@store/state';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

describe('For jest.config.ts', () => {
  it('should return the configuration that has no selected options', () => {
    setTextContent({ generateConfig: getJestConfig });

    expect(elemCode?.textContent).toMatchSnapshot();
  });

  it('should return the configuration with TypeScript', () => {
    stateManager.setState({
      ...options,
      typescript: true,
    });

    setTextContent({ generateConfig: getJestConfig });

    expect(elemCode?.textContent).toMatchSnapshot();
  });

  it('should return the configuration with Lodash', () => {
    stateManager.setState({
      ...options,
      lodash: true,
    });

    setTextContent({ generateConfig: getJestConfig });

    expect(elemCode?.textContent).toMatchSnapshot();
  });

  it('should return the configuration with Next.js', () => {
    stateManager.setState({
      ...options,
      next: true,
    });

    setTextContent({ generateConfig: getJestConfig });

    expect(elemCode?.textContent).toMatchSnapshot();
  });

  it('should return the configuration with Next.js and TypeScript', () => {
    stateManager.setState({
      ...options,
      next: true,
      typescript: true,
    });

    setTextContent({ generateConfig: getJestConfig });

    expect(elemCode?.textContent).toMatchSnapshot();
  });

  it('should return the configuration with Vue.js', () => {
    stateManager.setState({
      ...options,
      next: true,
    });

    setTextContent({ generateConfig: getJestConfig });

    expect(elemCode?.textContent).toMatchSnapshot();
  });

  it('should return the configuration with Jest HTML Reporters', () => {
    stateManager.setState({
      ...options,
      jestHtmlReporters: true,
    });

    setTextContent({ generateConfig: getJestConfig });

    expect(elemCode?.textContent).toMatchSnapshot();
  });
});

test('should return the jest.setup.ts', () => {
  setTextContent({ content: getJestSetup() });

  expect(elemCode?.textContent).toMatchSnapshot();
});
