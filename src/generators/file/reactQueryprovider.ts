import getCertainConditions from '@utils/certainConditions'
import type { SelectOptions } from '_types'

const getReactQueryProviderFile = (configOptions: SelectOptions) => {
  const { hasNext } = getCertainConditions(configOptions)

  const client =
    hasNext &&
    `'use client'

`

  const file = `${client || ''}import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PropsWithChildren, useState } from 'react'

function ReactQueryProvider({ children }: PropsWithChildren) {
  const [client] = useState(new QueryClient())

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default ReactQueryProvider`

  return file
}

export default getReactQueryProviderFile
