import generateCommand from '@generators/command';
import generateConfig from '@generators/config';
import generateFile from '@generators/file';
import generateReadme from '@generators/readme';
import { getButtonElem } from '@utils/getElements';
import { isConfig, isFile, isTab } from '@utils/typeGuards';
import type { Tab } from '_types';

import { getActivatedTab } from './tabController';

export const switchTab = (tab: Tab) => {
  if (isConfig(tab)) {
    return generateConfig(tab);
  }
  if (isFile(tab)) {
    return generateFile(tab);
  }
  if (tab === 'terminal') {
    return generateCommand();
  }
  if (tab === 'readme') {
    return generateReadme();
  }
  return '';
};

export const reloadEditor = () => {
  const elemCurrentTab = getActivatedTab();
  const value = elemCurrentTab?.value;
  if (value && isTab(value)) {
    provideConfig(value);
  }
};

// Show code and commands to the code windows
export const provideConfig = (tab: Tab) => {
  const elemCode = document.querySelector<HTMLElement>('#code');
  if (elemCode) {
    elemCode.textContent = switchTab(tab);
  }
};

export const showReadme = () => {
  getButtonElem('readme-tab')?.click();
  provideConfig('readme');
};
