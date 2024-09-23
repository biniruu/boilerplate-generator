import generateCommand from '@generators/command';
import generateConfig from '@generators/config';
import generateFile from '@generators/file';
import generateReadme from '@generators/readme';
import { getButtonElem } from '@utils/getElements';
import { isConfig, isFile, isTab } from '@utils/typeGuards';
import type { SelectOptions, Tab } from '_types';

import { getActivatedTab } from './tabController';

export const switchTab = (tab: Tab, options: SelectOptions) => {
  if (isConfig(tab)) {
    return generateConfig(tab, options);
  }
  if (isFile(tab)) {
    return generateFile(tab, options);
  }
  if (tab === 'terminal') {
    return generateCommand(options);
  }
  if (tab === 'readme') {
    return generateReadme(options);
  }
  return '';
};

export const reloadEditor = (options: SelectOptions) => {
  const elemCurrentTab = getActivatedTab();
  const value = elemCurrentTab?.value;
  if (value && isTab(value)) {
    provideConfig(value, options);
  }
};

// Show code and commands to the code windows
export const provideConfig = (tab: Tab, options: SelectOptions) => {
  const elemCode = document.querySelector<HTMLElement>('#code');
  if (elemCode) {
    elemCode.textContent = switchTab(tab, options);
  }
};

export const showReadme = (options: SelectOptions) => {
  getButtonElem('readme-tab')?.click();
  provideConfig('readme', options);
};
