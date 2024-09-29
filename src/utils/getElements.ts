import type { Option } from '_types';

export const getOptionElem = (id: Option) => document.querySelector<HTMLInputElement>(`#${id}`);

export const getButtonElem = (id: string) => document.querySelector<HTMLButtonElement>(`#${id}-tab`);
