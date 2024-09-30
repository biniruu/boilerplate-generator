import dynamicTabList from '@data/dynamicTabList';
import { createTabs } from '@libs/toggleTabs';

test('should create a tab element using a template element with given data through the parameter', async () => {
  // Insert elements into the DOM for testing
  document.body.innerHTML = `
      <template id="tab">
        <button class="tablink" type="button"></button>
      </template>
      <div id="dynamic-tabs"></div>`;

  const tab = 'eslint';
  await createTabs(tab);

  const dynamicTabsElem = document.querySelector<HTMLDivElement>('#dynamic-tabs');
  const createdTab = dynamicTabsElem && dynamicTabsElem.querySelector<HTMLButtonElement>('#eslint-tab');
  expect(createdTab).not.toBeNull();
  expect(createdTab && createdTab.textContent).toBe(dynamicTabList[tab].value);
  expect(createdTab && createdTab.id).toBe(`${tab}-tab`);
  expect(createdTab && createdTab.value).toBe(tab);
});
