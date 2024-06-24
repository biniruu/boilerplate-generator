import config from '@data/jest/jest.json'
import mergeConfigs from '@utils/mergeConfigs'

type Syntax = 'typescript' | 'javascript'

const data: { [key: string]: unknown } = {
  typescript: await import('@data/jest/jest-ts.json'),
}

const transform = {
  typescript: {
    transform: {
      '^.+\\.(ts|tsx)$': [
        'ts-jest',
        {
          tsconfig: './tsconfig.test.json',
        },
      ],
    },
  },
  javascript: {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
  },
}

const addTransform = (config: { [key: string]: unknown }, selectedVal: Syntax) => {
  return { ...config, ...transform[selectedVal] }
}

const getJestConfig = (selectedVal: Syntax) => {
  if (selectedVal === 'typescript') {
    const newConfig = { ...config }
    mergeConfigs(newConfig, 'preset', data[selectedVal] as { [key: string]: unknown })

    return addTransform(newConfig, selectedVal)
  }

  return addTransform(config, selectedVal)
}

export default getJestConfig
