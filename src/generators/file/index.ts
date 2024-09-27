import files from '@data/files';
import type { FileTab, ObjFileTab } from '_types';

import getDeclarationsFile from './declarations';
import getLayoutFile from './layout';
import getPugFile from './pug';
import getReactQueryProviderFile from './reactQueryProvider';
import getSocketFile from './socket';
import getSwrProviderFile from './swrProvider';
import getTailwindFile from './tailwind';
import getTypeGuardFile from './typeGuard';

const generateFile = (tab: FileTab) => {
  const values = [
    getPugFile(),
    getLayoutFile(),
    getSocketFile(),
    getSwrProviderFile(),
    getTailwindFile(),
    getReactQueryProviderFile(),
    getTypeGuardFile(),
    getDeclarationsFile(),
  ];
  const config = files.reduce((acc, curr, idx) => {
    acc[curr] = values[idx];

    return acc;
  }, {} as ObjFileTab);

  return config[tab];
};

export default generateFile;
