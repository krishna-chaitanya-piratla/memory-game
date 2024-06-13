import { makeAutoObservable } from 'mobx';

class AppStore {
  darkMode = true;

  constructor() {
    makeAutoObservable(this);
  }

  setDarkMode(value: boolean) {
    this.darkMode = value;
  }
}

export default AppStore;
