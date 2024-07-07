import generatePugConfig from '@generators/config/pug'
import type { Tab } from '_types'

const generateFile = (tab: Tab) => {
  // TODO: Make sure that it uses dynamic import
  const config = {
    'pug-file': generatePugConfig(),
  }

  return config[tab as keyof typeof config]
}

export default generateFile
