import type { SelectOptions, Tab } from '_types'

import getLayoutFile from './layout'
import getPugFile from './pug'

const generateFile = (tab: Tab, configOptions: SelectOptions) => {
  // TODO: Make sure that it uses dynamic import
  const config = {
    'pug-file': getPugFile(),
    'next-layout-file': getLayoutFile(configOptions),
  }

  return config[tab as keyof typeof config]
}

export default generateFile
