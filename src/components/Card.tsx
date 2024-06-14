import React from 'react';
import { observer } from 'mobx-react-lite';
import { CardContainer, CardInner, CardFront, CardBack } from '../styles/Card';
import { useStore } from '../store/StoreProvider';

interface CardProps {
  value: string;
  index: number;
}

const Card: React.FC<CardProps> = observer(({ value, index }) => {
  const { gameStore } = useStore();
  const isVisible = gameStore.isCardVisible(index);

  const handleClick = () => {
    gameStore.revealCard(index);
  };

  return (
    <CardContainer onClick={handleClick}>
      <CardInner isVisible={isVisible}>
        <CardFront>{value}</CardFront>
        <CardBack />
      </CardInner>
    </CardContainer>
  );
});

export default Card;
