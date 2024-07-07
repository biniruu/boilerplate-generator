import type { SelectOptions, Tab } from '_types'

import getLayoutFile from './layout'
import getPugFile from './pug'
import getReactQueryProviderFile from './reactQueryprovider'
import getSwrProviderFile from './swrProvider'
import getTailwindFile from './tailwind'

const generateFile = (tab: Tab, configOptions: SelectOptions) => {
  // TODO: Make sure that it uses dynamic import
  const config = {
    'pug-file': getPugFile(),
    'next-layout-file': getLayoutFile(configOptions),
    'tailwind-file': getTailwindFile(),
    'tanstack-query-file': getReactQueryProviderFile(configOptions),
    'swr-file': getSwrProviderFile(configOptions),
  }

  return config[tab as keyof typeof config]
}

export default generateFile
