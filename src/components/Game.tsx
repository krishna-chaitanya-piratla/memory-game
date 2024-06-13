import React, { useState, useEffect } from 'react';
import { GameContainer } from '../styles/Game';
import Card from './Card';
import { useStore } from '../store/StoreProvider';

interface GameProps {
  size: number;
}

const generateCardValues = (size: number): string[] => {
  const values = [];
  for (let i = 0; i < size; i++) {
    const value = String.fromCharCode(65 + i); // Generate A, B, C, etc.
    values.push(value, value);
  }
  return values.sort(() => Math.random() - 0.5); // Shuffle the array
};

const calculateGridDimensions = (numCards: number) => {
  const sqrt = Math.sqrt(numCards);
  const rows = Math.ceil(sqrt); // Use ceiling to ensure all cards fit
  const cols = Math.ceil(numCards / rows); // Ensure enough columns to fit all cards
  return { rows, cols };
};

const calculateCardSize = (rows: number, cols: number, maxContainerHeight: number, maxContainerWidth: number) => {
  let cardSize = 150; // Initial card size
  const padding = 32; // Total padding (16px on each side)
  
  while ((cardSize * rows + padding * (rows - 1) > maxContainerHeight) || (cardSize * cols + padding * (cols - 1) > maxContainerWidth)) {
    cardSize *= 0.9; // Reduce size by 10%
  }
  
  return cardSize;
};

const Game: React.FC<GameProps> = ({ size }) => {
  const { appStore } = useStore();
  const cardValues = generateCardValues(size);
  const { rows, cols } = calculateGridDimensions(cardValues.length);

  const [cardSize, setCardSize] = useState(150); // Default card size

  useEffect(() => {
    const maxContainerHeight = window.innerHeight * 0.6; // 60% of viewport height
    const maxContainerWidth = window.innerWidth * 0.6; // 60% of viewport width
    const calculatedSize = calculateCardSize(rows, cols, maxContainerHeight, maxContainerWidth);
    setCardSize(calculatedSize);
  }, [rows, cols]);

  return (
    <GameContainer rows={rows} columns={cols} cardSize={cardSize} theme={{ darkMode: appStore.darkMode }}>
      {cardValues.map((value, index) => (
        <Card key={index} value={value} isVisible={false} />
      ))}
    </GameContainer>
  );
};

export default Game;
