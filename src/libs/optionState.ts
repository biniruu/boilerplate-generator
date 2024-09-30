import { getOptionElem } from '@utils/getElements';
import type { JsLib } from '_types';

interface State {
  precedingOption: JsLib;
}

let state: State = {
  precedingOption: 'nothing',
};
// TODO: Convert this into store
export const setState = (newState: State) => {
  state = { ...state, ...newState };
};

const optionsForNuxt = [
  'immer',
  'nextAuth',
  'reactHookForm',
  'reactInfiniteScroller',
  'reactJoyride',
  'recoil',
  'swr',
  'tanstackQuery',
  'vite',
  'postcss',
] as const;

const toggleOptionState = (option: JsLib) => {
  // TODO: Add other radio button options
  switch (option) {
    case 'react':
      controlReact();
      break;
    case 'nuxt':
      controlNuxt('on');
      break;
    default:
      console.error('Option not found');
  }
  // TODO: Ensure that the 'vite' option remains checked if it was already checked before this function is invoked
  state.precedingOption === 'react' && controlVite();
  state.precedingOption === 'nuxt' && controlNuxt('off');
  setState({ precedingOption: option });
};

const controlReact = () => {
  const elemVite = getOptionElem('vite');
  if (elemVite) {
    !isChecked(elemVite) && toggleChecked(elemVite);
    toggleDisabled(elemVite);
  }
};
const controlVite = () => {
  const elemVite = getOptionElem('vite');
  if (elemVite) {
    toggleDisabled(elemVite);
    toggleChecked(elemVite);
  }
};
const controlNuxt = (toggle: 'on' | 'off') => {
  // TODO: Make sure that Tanstack Query will be compatible with Nuxt.js
  optionsForNuxt.forEach(option => {
    const elem = getOptionElem(option);
    if (elem) {
      toggle === 'on' ? setDisabled(elem) : setEnabled(elem);
    }
  });
};

const toggleChecked = (element: HTMLInputElement) => element?.click();
const toggleDisabled = (element: HTMLInputElement) => {
  isDisabled(element) ? setEnabled(element) : setDisabled(element);
};
const setEnabled = (element: HTMLInputElement) => element.removeAttribute('disabled');
const setDisabled = (element: HTMLInputElement) => element.setAttribute('disabled', '');

const isChecked = (element: HTMLInputElement) => element.checked;
const isDisabled = (element: HTMLInputElement) => element.disabled === true;

export default toggleOptionState;
