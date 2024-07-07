import type { SelectOptions, Tab } from '_types'

import getDeclarationsFile from './declarations'
import getLayoutFile from './layout'
import getPugFile from './pug'
import getReactQueryProviderFile from './reactQueryProvider'
import getSocketFile from './socket'
import getSwrProviderFile from './swrProvider'
import getTailwindFile from './tailwind'
import getTypeGuardFile from './typeGuard'

const generateFile = (tab: Tab, configOptions: SelectOptions) => {
  // TODO: Make sure that it uses dynamic import
  const config = {
    'pug-file': getPugFile(),
    'next-layout-file': getLayoutFile(configOptions),
    'socket-file': getSocketFile(),
    'swr-file': getSwrProviderFile(configOptions),
    'tailwind-file': getTailwindFile(),
    'tanstack-query-file': getReactQueryProviderFile(configOptions),
    'type-guards-file': getTypeGuardFile(),
    'typescript-file': getDeclarationsFile(),
  }

  return config[tab as keyof typeof config]
}

export default generateFile
