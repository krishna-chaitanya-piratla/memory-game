import React, { useRef, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { CardContainer, CardInner, CardFront, CardBack, CardValue } from '../styles/Card';
import { useStore } from '../store/StoreProvider';

interface CardProps {
  value: string;
  index: number;
}

const Card: React.FC<CardProps> = observer(({ value, index }) => {
  const { gameStore } = useStore();
  const isVisible = gameStore.isCardVisible(index);
  const valueRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const containerWidth = entry.contentRect.width;
        const fontSize = containerWidth / 2; // Adjust the divisor to fit your needs
        if (valueRef.current) {
          valueRef.current.style.fontSize = `${fontSize}px`;
        }
      }
    });

    if (valueRef.current) {
      resizeObserver.observe(valueRef.current);
    }

    return () => {
      if (valueRef.current) {
        resizeObserver.unobserve(valueRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    gameStore.revealCard(index);
  };

  return (
    <CardContainer onClick={handleClick}>
      <CardInner isVisible={isVisible}>
        <CardFront>
          <CardValue ref={valueRef}>{value}</CardValue>
        </CardFront>
        <CardBack />
      </CardInner>
    </CardContainer>
  );
});

export default Card;
