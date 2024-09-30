import dynamicTabList from '@data/dynamicTabList';
import { stateOptions, stateTabs } from '@store/state';
import { getButtonElem } from '@utils/getElements';
import type { DynamicTabValueList } from '_types';

import { getCurrentTablinkElems } from './tabController';

// <Always showed>
//
// .gitignore
// package.json
// terminal
//
// <For ESLint>
//
// .eslintrc.js
// .eslintignore
//
// <For Prettier>
//
// .prettierrc
// .prettierignore
//
// <For Stylelint>
//
// .stylelintrc.js
// .stylelintignore
//
// gatsby-config.ts
//
// <For Gatsby.js>
//
// gatsby-config.ts
//
// <For Jest>
//
// jest.config.ts
// jest.setup.ts
//
// <For Markdownlint>
//
// markdownlint.json
//
// <For Next.js>
//
// next.config.ts
//
// [with tanstack query or swr]
// layout.tsx
// reactQueryProvider.tsx
// swrProvider.tsx
//
// <For Nodemon>
//
// nodemon.json
//
// <For npm>
//
// .npmrc
//
// <For Nuxt.js>
//
// nuxt.config.ts
// volar.config.cjs
//
// <For React.js>
// @desc In this repository, a React.js is served using Vite, so it always includes a Vite configuration.
//
// vite.config.ts
//
// <For PostCSS>
//
// postcss.config.js
//
// <For Pug>
//
// home.pug
// pug-lintrc.json
//
// [with tanstack query or swr]
// layout.tsx
// reactQueryProvider.tsx
// swrProvider.tsx
//
// <For Socket.io>
//
// socket.d.ts
//
// <For Tailwind CSS>
//
// style.css
// tailwind.config.js
//
// <For TypeScript>
//
// declarations.d.ts
// tsconfig.json
// tsconfig.build.json
// tsconfig.default.json
// tsconfig.node.json
// tsconfig.test.json
// typeGuards.ts
//
// <For Vanilla.js>
//
// .babelrc
//
// <For Vite>
// A vite configuration is for a React.js project for now.
//
// vite.config.ts
//
// <For Webpack>
//
// webpack.config.ts

const lints = ['eslint', 'prettier', 'stylelint'];

// TODO: Update tsconfig file toggling process when switching between TypeScript and JavaScript options
const toggleTabs = (tab: DynamicTabValueList, isChecked: boolean) => {
  if (tab === 'javascript') {
    removeTabs('typescript');

    return;
  }
  if (tab === 'typescript') {
    addNewTabs(tab);

    return;
  }
  isChecked ? addNewTabs(tab) : removeTabs(tab);
};

// TODO: Add jest.setup.ts process
const removeTabs = (tab: DynamicTabValueList) => {
  const element = getButtonElem(tab);
  element && element.remove();
  removeAdditionalTabs(tab);
};
const removeAdditionalTabs = (tab: DynamicTabValueList) => {
  if (tab === 'typescript') {
    toggleTsTabs('remove');

    return;
  }
  if (tab === 'jest') {
    removeTabs('jest-setup');

    return;
  }
  // When a lint tab is removed, remove the corresponding ignore tab as well
  lints.includes(tab) && removeTabs(`${tab}-ignore` as DynamicTabValueList);
};

const addNewTabs = (tab: DynamicTabValueList) => {
  createTab(tab);
  addAdditionalTabs(tab);
};
const addAdditionalTabs = (tab: DynamicTabValueList) => {
  if (tab === 'typescript') {
    toggleTsTabs('add');

    return;
  }
  if (tab === 'jest') {
    createTab('jest-setup');

    return;
  }
  // When a lint tab is created, create the corresponding ignore tab as well
  lints.includes(tab) && createTab(`${tab}-ignore` as DynamicTabValueList);
};

const toggleTsTabs = (action: 'add' | 'remove') => {
  if (action === 'add') {
    createTab('ts-default' as DynamicTabValueList);
    createTab('ts-build' as DynamicTabValueList);
    // TODO: Add if statement for typescript-node
    // createTab('ts-test' as DynamicTabValueList);
    // createTab(`${tab}-node` as DynamicTabValueList);

    return;
  }
  removeTabs('ts-default' as DynamicTabValueList);
  removeTabs('ts-build' as DynamicTabValueList);
  // TODO: Add if statement for typescript-node
  // removeTabs('ts-test' as DynamicTabValueList);
  // removeTabs(`${tab}-node` as DynamicTabValueList);
};

export const createTab = (tab: DynamicTabValueList) => {
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
  const elemOptions = document.querySelectorAll<HTMLInputElement>('input:checked');
  elemOptions.forEach(elemOptions => {
    const { value } = elemOptions;
    const tabName = generateTabName(value as DynamicTabValueList);
    const elemTab = getButtonElem(value);
    if (tabName && elemTab) {
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

  if ('ext' in currentTab) {
    const { js, ts } = currentTab.ext;

    return `${value}${stateOptions.getState().typescript ? ts : js}`;
  }
  return value;
};

export default toggleTabs;
