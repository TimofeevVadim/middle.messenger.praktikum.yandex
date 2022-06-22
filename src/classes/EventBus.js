export default class EventBus {
  constructor() {
    this.listeners = {};
  }

  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event) {
    if (!this.listeners[event]) {
      throw new Error(`No events: ${event}`);
    }
  }

  emit(event, ...args) {
    if (!this.listeners[event]) {
      throw new Event(`No events: ${event}`);
    }

    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}
