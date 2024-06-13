import React from 'react';
import { GameContainer } from '../styles/Game';
import Card from './Card';

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

const Game: React.FC<GameProps> = ({ size }) => {
  const cardValues = generateCardValues(size);
  const columns = Math.ceil(Math.sqrt(size * 2)); // Calculate columns based on number of cards

  return (
    <GameContainer columns={columns}>
      {cardValues.map((value, index) => (
        <Card key={index} value={value} isVisible={false} />
      ))}
    </GameContainer>
  );
};

export default Game;
