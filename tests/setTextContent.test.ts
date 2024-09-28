import { objOptions } from '@data/options';
import { stateOptions } from '@store/state';
import type { SelectOptions } from '_types';

export const options = stateOptions.getState();

interface Params {
  generateConfig?: ((param: SelectOptions) => string) | (() => string);
  content?: string;
}

export const setTextContent = ({ generateConfig, content }: Params) => {
  if (!elemCode) {
    throw new Error('elemCode is not defined');
  }
  if (generateConfig) {
    elemCode.textContent = generateConfig(options);

    return;
  }
  if (content) {
    elemCode.textContent = content;
  }
};

export let elemCode: HTMLElement | null;

beforeEach(() => {
  document.body.innerHTML = `<code id="code" />`;
  elemCode = document.querySelector<HTMLElement>('#code');

  stateOptions.setState(objOptions);
});
