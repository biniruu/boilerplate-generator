import { objOptions } from '@data/options';
import type { SelectOptions } from '_types';

import StateManager from './stateManager';

const initialOptionsState = { ...objOptions };

export const stateOptions = new StateManager<SelectOptions>(initialOptionsState);
