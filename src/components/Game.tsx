import React, { useState, useEffect } from 'react';
import { GameContainer } from '../styles/Game';
import Card from './Card';
import { useStore } from '../store/StoreProvider';

interface GameProps {
  size: number;
}

const calculateGridDimensions = (numCards: number) => {
  const sqrt = Math.sqrt(numCards);
  const rows = Math.ceil(sqrt); // Use ceiling to ensure all cards fit
  const cols = Math.ceil(numCards / rows); // Ensure enough columns to fit all cards
  return { rows, cols };
};

const calculateCardSizeInPx = (rows: number, cols: number, maxContainerHeight: number, maxContainerWidth: number, gap: number) => {
  let cardSize = 150; // Initial card size in px

  while ((cardSize * rows + gap * (rows - 1) > maxContainerHeight) || (cardSize * cols + gap * (cols - 1) > maxContainerWidth)) {
    cardSize *= 0.9; // Reduce size by 10%
  }

  return cardSize;
};

const pxToRem = (px: number, rootSize: number) => px / rootSize;

const Game: React.FC<GameProps> = ({ size }) => {
  const { appStore, gameStore } = useStore();
  const { rows, cols } = calculateGridDimensions(gameStore.cardValues.length);

  const [cardSize, setCardSize] = useState(9.375); // Default card size in rem

  useEffect(() => {
    const rootSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const maxContainerHeight = window.innerHeight * 0.6 - 32; // 60% of viewport height in px minus padding
    const maxContainerWidth = window.innerWidth * 0.8 - 32; // 80% of viewport width in px minus padding
    const gap = 16; // Gap between cards in px
    const calculatedSizeInPx = calculateCardSizeInPx(rows, cols, maxContainerHeight, maxContainerWidth, gap);
    const calculatedSizeInRem = pxToRem(calculatedSizeInPx, rootSize);
    setCardSize(calculatedSizeInRem);
  }, [rows, cols]);

  return (
    <GameContainer rows={rows} columns={cols} cardSize={cardSize} theme={{ darkMode: appStore.darkMode }}>
      {gameStore.cardValues.map((value, index) => (
        <Card key={index} index={index} value={value} />
      ))}
    </GameContainer>
  );
};

export default Game;
