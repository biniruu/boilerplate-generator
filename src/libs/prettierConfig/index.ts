import config from '@data/prettier/prettier.json'

const data: { [key: string]: unknown } = {
  tailwind: await import('@data/prettier/tailwind.json'),
}

const mergeConfigs = (acc: { [key: string]: unknown }, option: string, currentData: { [key: string]: unknown }) => {
  if (Object.hasOwn(acc, option)) {
    if (Array.isArray(currentData[option])) {
      acc[option] = [...(acc[option] as string[]), ...(currentData[option] as string[])]
    } else {
      const temp = Object.assign({}, acc[option], currentData[option])
      acc[option] = temp
    }
  } else {
    acc[option] = currentData[option]
  }
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
