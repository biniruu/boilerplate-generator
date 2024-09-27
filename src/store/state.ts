import { objOptions } from '@data/options';
import type { SelectOptions } from '_types';

import StateManager from './stateManager';

const initialState: SelectOptions = { ...objOptions };
const stateManager = new StateManager<SelectOptions>(initialState);

export default stateManager;
