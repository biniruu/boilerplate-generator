import {
  isCondition,
  isConfig,
  isDynamicTabValue,
  isFile,
  isHtmlButtonElement,
  isHtmlInputElement,
  isOption,
  isTab,
} from '@utils/typeGuards';

test(`should be true if the 'element' property of isHtmlInputElement is an instance of HTMLInputElement`, () => {
  const element = document.createElement('input');

  expect(isHtmlInputElement(element)).toBe(true);
});
test(`should be false if the 'element' property of isHtmlInputElement is not an instance of HTMLInputElement`, () => {
  const element = document.createElement('div');

  expect(isHtmlInputElement(element)).toBe(false);
});

test(`should be true if the 'element' property of isHtmlButtonElement is an instance of HTMLButtonElement`, () => {
  const element = document.createElement('button');

  expect(isHtmlButtonElement(element)).toBe(true);
});
test(`should be false if the 'element' property of isHtmlButtonElement is not an instance of HTMLButtonElement`, () => {
  const element = document.createElement('div');

  expect(isHtmlButtonElement(element)).toBe(false);
});

test(`should be true if the 'value' property of isTab belongs to Tab type`, () => {
  const value = 'terminal';

  expect(isTab(value)).toBe(true);
});
test(`should be false if the 'value' property of isTab doesn't belong to Tab type`, () => {
  const value = 'vscode';

  expect(isTab(value)).toBe(false);
});

test(`should be true if the 'value' property of isConfig belongs to ConfigTab type`, () => {
  const value = 'babel';

  expect(isConfig(value)).toBe(true);
});
test(`should be false if the 'value' property of isConfig doesn't belong to ConfigTab type`, () => {
  const value = 'terminal';

  expect(isConfig(value)).toBe(false);
});

test(`should be true if the 'value' property of isFile belongs to FileTab type`, () => {
  const value = 'pug-file';

  expect(isFile(value)).toBe(true);
});
test(`should be false if the 'value' property of isFile doesn't belong to FileTab type`, () => {
  const value = 'terminal';

  expect(isFile(value)).toBe(false);
});

test(`should be true if the 'value' property of isOption belongs to Option type`, () => {
  const value = 'axios';

  expect(isOption(value)).toBe(true);
});
test(`should be false if the 'value' property of isOption doesn't belong to Option type`, () => {
  const value = 'terminal';

  expect(isOption(value)).toBe(false);
});

test(`should be true if the 'value' property of isCondition belongs to Condition type`, () => {
  const value = 'hasBabel';

  expect(isCondition(value)).toBe(true);
});
test(`should be false if the 'value' property of isCondition doesn't belong to Condition type`, () => {
  const value = 'terminal';

  expect(isCondition(value)).toBe(false);
});

test(`should be true if the 'value' property of isDynamicTabValue belongs to DynamicTabValueList type`, () => {
  const value = 'next-layout-file';

  expect(isDynamicTabValue(value)).toBe(true);
});
test(`should be false if the 'value' property of isDynamicTabValue doesn't belong to DynamicTabValueList type`, () => {
  const value = 'terminal';

  expect(isDynamicTabValue(value)).toBe(false);
});
