type Listener = () => void;

class StateManager<T> {
  private state: T;
  private listeners: Listener[] = [];

  constructor(initialState: T) {
    this.state = initialState;
  }

  getState(): T {
    return this.state;
  }
  setState(newState: T) {
    this.state = newState;
    this.notifyListeners();
  }
  subscribe(listener: Listener) {
    this.listeners.push(listener);
  }
  unsubscribe(listener: Listener) {
    this.listeners = this.listeners.filter(l => l !== listener);
  }
  private notifyListeners() {
    this.listeners.forEach(listener => listener());
  }
}

export default StateManager;
