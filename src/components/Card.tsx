import React from 'react';
import { CardContainer } from '../styles/Card';

interface CardProps {
  value: string;
  isVisible: boolean;
}

const Card: React.FC<CardProps> = ({ value, isVisible }) => {
  return <CardContainer isVisible={isVisible}>{value}</CardContainer>;
};

export default Card;
