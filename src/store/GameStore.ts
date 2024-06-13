import { makeAutoObservable } from 'mobx';

class GameStore {
  difficulty = 6; // Default to Normal difficulty

  difficultyValues = [2, 3, 6, 10, 18, 32]; // Mapping array for difficulty levels

  constructor() {
    makeAutoObservable(this);
  }

  setDifficulty(value: number) {
    this.difficulty = value;
  }

  get difficultyIndex() {
    return this.difficultyValues.indexOf(this.difficulty);
  }

  get difficultyValue() {
    return this.difficultyValues[this.difficultyIndex];
  }
}

export default GameStore;
