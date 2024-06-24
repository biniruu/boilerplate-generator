import config from '@data/stylelint/stylelint.json'
import mergeConfigs from '@utils/mergeConfigs'

const data: { [key: string]: unknown } = {
  postcss: await import('@data/stylelint/postcss.json'),
  scss: await import('@data/stylelint/scss.json'),
}

const getStylelintConfig = (selectedVal?: string[]) => {
  if (selectedVal?.length) {
    const newConfig = { ...config }
    const mergedConfig = selectedVal.reduce((acc, curr) => {
      if (!Object.hasOwn(data, curr)) {
        return acc
      }

      const item = data[curr] as { [key: string]: unknown }
      const currentData = item.default as { [key: string]: unknown }

      for (const option in currentData) {
        mergeConfigs(acc, option, currentData)
      }

      return acc
    }, newConfig)

    return mergedConfig
  }

  return config
}

export default getStylelintConfig
