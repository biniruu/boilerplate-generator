import { getOptionElem } from '@utils/getElements';
import type { JsLib } from '_types';

interface State {
  precedingOption: JsLib;
}

let state: State = {
  precedingOption: 'nothing',
};
export const setState = (newState: State) => {
  state = { ...state, ...newState };
};

const toggleOptionState = (option: JsLib) => {
  switch (option) {
    case 'react':
      controlReact();
      break;
    case 'nuxt':
      controlNuxt();
      break;

    default:
      console.error('Option not found');
      break;
  }
  // TODO: Ensure that the 'vite' option remains checked if it was already checked before this function is invoked
  state.precedingOption === 'react' && controlVite();
  setState({ precedingOption: option });
};

const controlReact = () => {
  const elemVite = getOptionElem('vite');
  !isChecked(elemVite) && toggleChecked(elemVite);
  toggleDisabled(elemVite);
};
const controlVite = () => {
  const elemVite = getOptionElem('vite');
  isDisabled(elemVite) && toggleDisabled(elemVite);
  toggleChecked(elemVite);
};
const controlNuxt = () => {
  // TODO: Make sure that Tanstack Query will be compatible with Nuxt.js
  const options = [
    'immer',
    'nextAuth',
    'reactHookForm',
    'reactInfiniteScroller',
    'reactJoyride',
    'recoil',
    'swr',
    'tanstackQuery',
    'vite',
  ] as const;
  options.forEach(option => toggleDisabled(getOptionElem(option)));
};

const toggleChecked = (element: HTMLInputElement | null) => element?.click();
const toggleDisabled = (element: HTMLInputElement | null) => {
  if (element) {
    element.disabled = !element.disabled;
  }
};

const isChecked = (element: HTMLInputElement | null) => {
  if (element) {
    return element.checked;
  }
  console.error('Element not found');
};
const isDisabled = (element: HTMLInputElement | null) => {
  if (element) {
    return element.disabled;
  }
  console.error('Element not found');
};

export default toggleOptionState;
