import getCertainConditions from '@utils/certainConditions';
import convertToJson from '@utils/convertToJson';
import type { SelectOptions } from '_types';

const generateNodemonConfig = (configOptions: SelectOptions) => {
  const { hasTypescript } = getCertainConditions(configOptions);

  const config = {
    env: {
      NODE_ENV: 'development',
    },
    exec: hasTypescript ? 'ts-node ./src/index.ts' : './src/index.js',
    ...(hasTypescript && {
      execMap: {
        ts: 'ts-node',
      },
      ext: 'ts',
    }),
    ignore: ['.git', '.github', '.idea', '.vscode', 'node_modules'],
    verbose: true,
    watch: ['src'],
  };

  const result = convertToJson(config);

  return result;
};

export default generateNodemonConfig;
