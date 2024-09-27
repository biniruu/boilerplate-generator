import { objOptions } from '@data/options';
import stateManager from '@store/state';
import type { SelectOptions } from '_types';

export const options = stateManager.getState();

const jsLibs = ['next', 'nuxt', 'react', 'vue'];
export const setHasJsLibs = (selectOptions?: SelectOptions) => {
  const currentOptions = selectOptions || stateManager.getState();
  jsLibs.forEach(item => (currentOptions[item as keyof typeof currentOptions] = true));
  stateManager.setState(currentOptions);
};

beforeEach(() => {
  stateManager.setState(objOptions);
});
