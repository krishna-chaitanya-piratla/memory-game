import { makeAutoObservable } from 'mobx';

class AppStore {
  darkMode = false;

  constructor() {
    makeAutoObservable(this);
  }

  setDarkMode(value: boolean) {
    this.darkMode = value;
  }
}

export default AppStore;
