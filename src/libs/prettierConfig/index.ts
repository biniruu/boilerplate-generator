import config from '@data/prettier/prettier.json'
import mergeConfigs from '@utils/mergeConfigs'

const data: { [key: string]: unknown } = {
  tailwind: await import('@data/prettier/tailwind.json'),
}

const getPrettierConfig = (hasTailwind?: boolean) => {
  if (hasTailwind) {
    const tailwindData = data.tailwind as { [key: string]: unknown }
    const defaultData = tailwindData.default as { [key: string]: unknown }
    const newConfig = { ...config }

    for (const option in defaultData) {
      mergeConfigs(newConfig, option, defaultData)
    }

    return newConfig
  }

  return config
}

export default getPrettierConfig
