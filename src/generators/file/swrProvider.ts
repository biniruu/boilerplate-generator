import getCertainConditions from '@utils/certainConditions';

const getSwrProviderFile = () => {
  const { hasNext } = getCertainConditions();

  const client =
    hasNext &&
    `'use client'

`;

  const file = `${client || ''}import { PropsWithChildren } from 'react'
import { SWRConfig } from 'swr'

const SWRProvider = ({ children }: PropsWithChildren) => {
  return <SWRConfig>{children}</SWRConfig>
}

export default SWRProvider`;

  return file;
};

export default getSwrProviderFile;
