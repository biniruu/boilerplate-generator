import getJestConfig from '@generators/config/jest/jest';
import getJestSetup from '@generators/config/jest/jestSetup';
import { stateOptions } from '@store/state';

import { elemCode, options, setTextContent } from '../../setTextContent.test';

describe('For jest.config.ts', () => {
  it('should return the configuration that has no selected options', () => {
    setTextContent({ generateConfig: getJestConfig });

    expect(elemCode?.textContent).toMatchSnapshot();
  });

  it('should return the configuration with TypeScript', () => {
    stateOptions.setState({
      ...options,
      typescript: true,
    });

    setTextContent({ generateConfig: getJestConfig });

    expect(elemCode?.textContent).toMatchSnapshot();
  });

  it('should return the configuration with Lodash', () => {
    stateOptions.setState({
      ...options,
      lodash: true,
    });

    setTextContent({ generateConfig: getJestConfig });

    expect(elemCode?.textContent).toMatchSnapshot();
  });

  it('should return the configuration with Next.js', () => {
    stateOptions.setState({
      ...options,
      next: true,
    });

    setTextContent({ generateConfig: getJestConfig });

    expect(elemCode?.textContent).toMatchSnapshot();
  });

  it('should return the configuration with Next.js and TypeScript', () => {
    stateOptions.setState({
      ...options,
      next: true,
      typescript: true,
    });

    setTextContent({ generateConfig: getJestConfig });

    expect(elemCode?.textContent).toMatchSnapshot();
  });

  it('should return the configuration with Vue.js', () => {
    stateOptions.setState({
      ...options,
      next: true,
    });

    setTextContent({ generateConfig: getJestConfig });

    expect(elemCode?.textContent).toMatchSnapshot();
  });

  it('should return the configuration with Jest HTML Reporters', () => {
    stateOptions.setState({
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
