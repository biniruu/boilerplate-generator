import { objOptions } from '@data/options';
import type { DynamicTabValueList, SelectOptions } from '_types';

import StateManager from './stateManager';

const initialOptionsState = { ...objOptions };
const initialTabsState = 'typescript';

export const stateOptions = new StateManager<SelectOptions>(initialOptionsState);

export const stateTabs = new StateManager<DynamicTabValueList>(initialTabsState);
