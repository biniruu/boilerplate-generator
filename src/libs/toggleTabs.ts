import dynamicTabList from '@data/dynamicTabList';
import { stateOptions, stateTabs } from '@store/state';
import { getButtonElem } from '@utils/getElements';
import type { DynamicTabValueList } from '_types';

import { getCurrentTablinkElems } from './tabController';

const lints = ['eslint', 'prettier', 'stylelint'];

const toggleTabs = (tab: DynamicTabValueList, isChecked: boolean) => {
  if (tab === 'javascript') {
    removeTabs('typescript');
  } else if (tab === 'typescript') {
    addTabs(tab);
  } else {
    isChecked ? addTabs(tab) : removeTabs(tab);
  }
};
// TODO: Handle ts-node
const toggleTsTabs = (action: 'add' | 'remove') => {
  const tabs = ['ts-default', 'ts-build'] as const;
  tabs.forEach(tab => (action === 'add' ? createTabs(tab) : removeTabs(tab)));
};

const removeTabs = (tab: DynamicTabValueList) => {
  const element = getButtonElem(tab);
  element && element.remove();
  removeAdditionalTabs(tab);
};
const removeAdditionalTabs = (tab: DynamicTabValueList) => {
  switch (tab) {
    case 'typescript':
      toggleTsTabs('remove');
      break;
    case 'jest':
      removeTabs('jest-setup');
      removeTabs('ts-test');
      break;
    default:
      // When a lint tab is removed, remove the corresponding ignore tab as well
      lints.includes(tab) && removeTabs(`${tab}-ignore` as DynamicTabValueList);
  }
};

const addTabs = (tab: DynamicTabValueList) => {
  createTabs(tab);
  addAdditionalTabs(tab);
};
const addAdditionalTabs = (tab: DynamicTabValueList) => {
  switch (tab) {
    case 'typescript':
      toggleTsTabs('add');
      break;
    case 'jest':
      createTabs('jest-setup');
      createTabs('ts-test');
      break;
    default:
      // When a lint tab is created, create the corresponding ignore tab as well
      lints.includes(tab) && createTabs(`${tab}-ignore` as DynamicTabValueList);
  }
};
export const createTabs = (tab: DynamicTabValueList) => {
  const tabName = generateTabName(tab);
  if (!tabName || hasSameTabElem(tab)) {
    return;
  }

  // Update the tab state
  stateTabs.setState(tab);

  const dynamicTabsElem = document.querySelector<HTMLDivElement>('#dynamic-tabs');
  const fragment = document.querySelector<HTMLTemplateElement>('#tab');
  const instance = fragment && document.importNode(fragment.content, true).querySelector<HTMLButtonElement>('.tablink');
  if (instance) {
    instance.textContent = tabName;
    instance.id = `${tab}-tab`;
    instance.value = tab;
    dynamicTabsElem?.appendChild(instance);
  }
};
const hasSameTabElem = (tab: DynamicTabValueList) =>
  Array.from(getCurrentTablinkElems()).some(elem => elem.value === tab);

export const updateTabName = () => {
  const elemTabsWrapper = document.querySelector<HTMLDivElement>('#dynamic-tabs');
  const elemTabs = elemTabsWrapper && elemTabsWrapper.querySelectorAll<HTMLButtonElement>('.tablink');
  elemTabs &&
    elemTabs.forEach(elemTab => {
      const { value } = elemTab;
      const tabName = generateTabName(value as DynamicTabValueList);
      if (tabName) {
        elemTab.textContent = tabName;
      }
    });
};
stateOptions.subscribe(updateTabName);

const generateTabName = (tab: DynamicTabValueList) => {
  const currentTab = dynamicTabList[tab];
  if (!currentTab) {
    return;
  }
  const { value } = currentTab;

  // Set a file extension according to syntax
  if ('ext' in currentTab) {
    const { js, ts } = currentTab.ext;

    return `${value}${stateOptions.getState().typescript ? ts : js}`;
  }
  return value;
};

export default toggleTabs;
