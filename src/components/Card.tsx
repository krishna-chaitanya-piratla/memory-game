import React from 'react';
import { observer } from 'mobx-react-lite';
import { CardContainer } from '../styles/Card';
import { useStore } from '../store/StoreProvider';

interface CardProps {
  value: string;
  index: number;
}

const Card: React.FC<CardProps> = observer(({ value, index }) => {
  const { gameStore } = useStore();
  const isVisible = gameStore.isCardVisible(index);

  const handleClick = () => {
    if (!isVisible) {
      gameStore.revealCard(index);
    }
  };

  return (
    <CardContainer isVisible={isVisible} onClick={handleClick}>
      {value}
    </CardContainer>
  );
});

export default Card;
