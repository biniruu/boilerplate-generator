import { objOptions } from '@data/options';
import type { SelectOptions } from '_types';

export let configOptions: SelectOptions;

const jsLibs = ['next', 'nuxt', 'react', 'vue'];
export const setHasJsLibs = (selectOptions?: SelectOptions) => {
  const options = selectOptions || configOptions;
  jsLibs.forEach(item => (options[item as keyof typeof options] = true));
};

beforeEach(() => {
  configOptions = { ...objOptions };
});
