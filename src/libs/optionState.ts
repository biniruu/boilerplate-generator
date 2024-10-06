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

// FIXME: Match these items with corresponding elements' ids (e.g. nextAuth -> next-auth)
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
] as const;

const toggleOptionState = (option: JsLib) => {
  // TODO: Add other radio button options
  switch (option) {
    case 'react':
      controlReact('on');
      break;
    case 'nuxt':
      controlNuxt('on');
      break;
    default:
      console.error('Option not found');
  }
  // TODO: Ensure that the 'vite' option remains checked if it was already checked before this function is invoked
  state.precedingOption === 'react' && controlReact('off');
  state.precedingOption === 'nuxt' && controlNuxt('off');
  setState({ precedingOption: option });
};

const controlReact = (toggle: 'on' | 'off') => {
  const elemVite = getOptionElem('vite');
  if (!elemVite) {
    return;
  }
  if (toggle === 'on') {
    !isChecked(elemVite) && toggleChecked(elemVite);
    setDisabled(elemVite);

    return;
  }
  toggleChecked(elemVite);
  setEnabled(elemVite);
};
const controlNuxt = (toggle: 'on' | 'off') => {
  // TODO: Make sure that Tanstack Query will be compatible with Nuxt.js
  optionsForNuxt.forEach(option => {
    const elem = getOptionElem(option);
    if (!elem) {
      return;
    }
    if (toggle === 'on') {
      isChecked(elem) && toggleChecked(elem);
      setDisabled(elem);

      return;
    }
    setEnabled(elem);
  });
};

const toggleChecked = (element: HTMLInputElement) => element?.click();
const setEnabled = (element: HTMLInputElement) => element.removeAttribute('disabled');
const setDisabled = (element: HTMLInputElement) => element.setAttribute('disabled', '');

const isChecked = (element: HTMLInputElement) => element.checked;

export default toggleOptionState;
