import { isTab } from '@utils/typeGuards';
import type { Tab } from '_types';

import { provideConfig } from './editorController';

export const handleTab = (target: HTMLButtonElement, value: Tab) => {
  // Remove 'active' class from the previous activated tab
  const elemCurrentTab = getActivatedTab();
  elemCurrentTab?.classList.remove('active');
  // Add 'active' class to the clicked tab
  target.classList.add('active');
  isTab(value) && provideConfig(value);
};

export const getCurrentTablinkElems = () => document.querySelectorAll<HTMLButtonElement>('.tablink');

export const getActivatedTab = () => {
  const elemCurrentTab = Array.from(getCurrentTablinkElems()).find(tab => tab.classList.contains('active'));

  return elemCurrentTab;
};
