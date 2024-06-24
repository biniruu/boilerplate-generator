import config from '@data/postcss/postcss.json'
import mergeConfigs from '@utils/mergeConfigs'

const data: { [key: string]: unknown } = {
  tailwind: await import('@data/postcss/tailwind.json' /* webpackChunkName: "postcss-tailwind" */),
}

const getPostcssConfig = (selectedVal?: string[]) => {
  const newConfig = { ...config }

  selectedVal?.length &&
    selectedVal.forEach(val => {
      if (val === 'tailwind') {
        mergeConfigs(newConfig, 'plugins', data[val] as { [key: string]: unknown })
      }
    })

  return newConfig
}

export default getPostcssConfig
