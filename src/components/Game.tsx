import React, { useState, useEffect } from 'react';
import { GameContainer } from '../styles/Game';
import Card from './Card';
import { useStore } from '../store/StoreProvider';

const Game: React.FC = () => {
  const { appStore, gameStore } = useStore();
  const { rows, cols } = gameStore.calculateGridDimensions(gameStore.cardValues.length);

  const [cardSize, setCardSize] = useState(9.375); // Default card size in rem

  useEffect(() => {
    const rootSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const maxContainerHeight = window.innerHeight * 0.6 - 32; // 60% of viewport height in px minus padding
    const maxContainerWidth = window.innerWidth * 0.8 - 32; // 80% of viewport width in px minus padding
    const gap = 16; // Gap between cards in px
    const calculatedSizeInPx = gameStore.calculateCardSizeInPx(rows, cols, maxContainerHeight, maxContainerWidth, gap);
    const calculatedSizeInRem = gameStore.pxToRem(calculatedSizeInPx, rootSize);
    setCardSize(calculatedSizeInRem);
  }, [rows, cols, gameStore]);

  return (
    <GameContainer rows={rows} columns={cols} cardSize={cardSize} theme={{ darkMode: appStore.darkMode }}>
      {gameStore.cardValues.map((value, index) => (
        <Card key={index} index={index} value={value} />
      ))}
    </GameContainer>
  );
};

export default Game;
