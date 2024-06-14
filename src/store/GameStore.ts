import { makeAutoObservable } from 'mobx';

class GameStore {
  difficulty = 6; // Default to Normal difficulty
  difficultyValues = [2, 3, 6, 10, 18, 32]; // Mapping array for difficulty levels
  cardStates: { [key: number]: boolean } = {}; // Map to store visibility state of cards
  cardValues: string[] = []; // Store card values
  gameStarted = false;
  gameVisible = false;
  selectedOption = 'numbers'; // Default selected option
  turns = 0; // Count of turns
  flippedCards: number[] = []; // Store indices of currently flipped cards

  // Lists of values for the game
  static emoticons_list = [
    '😀', '😢', '🚀', '👍', '👎', '💥', '🔥', '🎉', '❤️', '💔', 
    '🌟', '⭐️', '⚡️', '💧', '🍎', '🍌', '🍒', '🎈', '🎁', '🎨',
    '🎵', '🎤', '🎬', '🏆', '🏀', '⚽️', '🚗', '✈️', '🏡', '⌛️',
    '📚', '💡'
  ];
  static numbers_list = Array.from({ length: 100 }, (_, i) => i.toString());
  static characters_list = [
    ..."abcdefghijklmnopqrstuvwxyz".split(''), 
    ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
  ];

  constructor() {
    makeAutoObservable(this);
  }

  setDifficulty(value: number) {
    this.difficulty = value;
    this.resetCardStates(); // Reset card states when difficulty changes
  }

  setSelectedOption(value: string) {
    this.selectedOption = value;
  }

  revealCard(index: number) {
    if (this.flippedCards.length < 2 && !this.cardStates[index]) {
      this.cardStates[index] = true;
      this.flippedCards.push(index);

      if (this.flippedCards.length === 2) {
        const [firstIndex, secondIndex] = this.flippedCards;
        if (this.cardValues[firstIndex] !== this.cardValues[secondIndex]) {
          setTimeout(() => {
            this.closeCard(firstIndex);
            this.closeCard(secondIndex);
            this.flippedCards = [];
            this.turns++;
          }, 1000); // Add a delay before flipping back
        } else {
          this.flippedCards = [];
          this.turns++;
        }
      }
    }
  }

  closeCard(index: number) {
    this.cardStates[index] = false;
  }

  resetCardStates() {
    this.cardStates = {}; // Reset visibility states
    this.flippedCards = [];
    this.turns = 0; // Reset turns
  }

  shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  generateCardValues() {
    let values: string[] = [];
    const size = this.difficulty * 2; // Number of cards to generate

    switch (this.selectedOption) {
      case 'emoticons':
        values = this.shuffleArray([...GameStore.emoticons_list]).slice(0, size / 2);
        break;
      case 'numbers':
        values = this.shuffleArray([...GameStore.numbers_list]).slice(0, size / 2);
        break;
      case 'characters':
        values = this.shuffleArray([...GameStore.characters_list]).slice(0, size / 2);
        break;
      default:
        values = this.shuffleArray([...GameStore.numbers_list]).slice(0, size / 2);
    }

    this.cardValues = [...values, ...values].sort(() => Math.random() - 0.5); // Duplicate and shuffle the array
  }

  startGame() {
    this.generateCardValues();
    this.resetCardStates();
    this.gameStarted = true;
    this.gameVisible = true;
  }

  endGame() {
    this.gameVisible = false;
  }

  get difficultyIndex() {
    return this.difficultyValues.indexOf(this.difficulty);
  }

  get difficultyValue() {
    return this.difficultyValues[this.difficultyIndex];
  }

  isCardVisible(index: number) {
    return this.cardStates[index] || false;
  }

  calculateGridDimensions(numCards: number) {
    const sqrt = Math.sqrt(numCards);
    const rows = Math.ceil(sqrt); // Use ceiling to ensure all cards fit
    const cols = Math.ceil(numCards / rows); // Ensure enough columns to fit all cards
    return { rows, cols };
  }

  calculateCardSizeInPx(rows: number, cols: number, maxContainerHeight: number, maxContainerWidth: number, gap: number) {
    let cardSize = 150; // Initial card size in px

    while ((cardSize * rows + gap * (rows - 1) > maxContainerHeight) || (cardSize * cols + gap * (cols - 1) > maxContainerWidth)) {
      cardSize *= 0.9; // Reduce size by 10%
    }

    return cardSize;
  }

  pxToRem(px: number, rootSize: number) {
    return px / rootSize;
  }
}

export default GameStore;
