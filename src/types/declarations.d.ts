declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.module.css' {
  const classes: Record<string, string>;
  export default classes;
}

declare module '@store/state' {
  import type { DynamicTabValueList, SelectOptions } from '_types';

  type Listener = () => void;

  class StateManager<T> {
    private state: T;
    private listeners: Listener[];

    constructor(initialState: T);

    getState(): T;
    setState(newState: T): void;
    subscribe(listener: Listener): void;
    unsubscribe(listener: Listener): void;
    private notifyListeners(): void;
  }

  export const stateOptions: StateManager<SelectOptions>;
  export const stateTabs: StateManager<DynamicTabValueList>;
}
