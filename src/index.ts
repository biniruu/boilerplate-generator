import { showReadme } from '@libs/editorController';
import { handleOptions } from '@libs/optionController';
import { handleTab } from '@libs/tabController';
import stateManager from '@store/state';
import copyToClipboard from '@utils/copyToClipboard';
import { getButtonElem } from '@utils/getElements';
import { isHtmlButtonElement, isHtmlInputElement, isOption } from '@utils/typeGuards';

import './style.css';
import { isTab } from './utils/typeGuards';

const options = stateManager.getState();

const elemCode = document.querySelector<HTMLElement>('#code');

// Copy code to clipboard
const elemCopyBtn = getButtonElem('btn-copy');
elemCopyBtn?.addEventListener('click', () => void copyToClipboard(elemCode?.textContent ?? ''));

// Handle click inputs and tabs
const handleEvent = (e: MouseEvent | Event) => {
  const target = e.target;
  if (isHtmlButtonElement(target)) {
    const { value } = target;
    isTab(value) && handleTab(target, value);

    return;
  }
  if (isHtmlInputElement(target)) {
    const { value, checked: isChecked } = target;
    isOption(value) && handleOptions(value, isChecked);
    // Update the value in store
    stateManager.setState({ ...options, [value]: !options[value as keyof typeof options] });
  }
};

// Use handleEvent as an event listeners
const elemTabs = document.querySelector<HTMLDivElement>('#tabs-wrapper');
elemTabs?.addEventListener('click', handleEvent, { passive: true });
const form = document.querySelector<HTMLFormElement>('#options');
form?.addEventListener('change', handleEvent, { passive: true });

// Init content
const initContents = () => {
  const syntax = document.querySelector<HTMLInputElement>('input[name=syntax]:checked')?.value;
  const jsLib = document.querySelector<HTMLInputElement>('input[name=js-lib]:checked')?.value;
  if (syntax && isOption(syntax)) {
    options[syntax] = true;
  }
  if (jsLib && isOption(jsLib)) {
    options[jsLib] = true;
  }
  showReadme();
};
window.onload = initContents;
