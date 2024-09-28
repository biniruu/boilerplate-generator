import { objOptions } from '@data/options';
import { stateOptions } from '@store/state';
import type { SelectOptions } from '_types';

export const options = stateOptions.getState();

const jsLibs = ['next', 'nuxt', 'react', 'vue'];
export const setHasJsLibs = (selectOptions?: SelectOptions) => {
  const currentOptions = selectOptions || stateOptions.getState();
  jsLibs.forEach(item => (currentOptions[item as keyof typeof currentOptions] = true));
  stateOptions.setState(currentOptions);
};

beforeEach(() => {
  stateOptions.setState(objOptions);
});
