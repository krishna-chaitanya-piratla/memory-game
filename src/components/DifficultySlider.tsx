import React from 'react';
import { Typography } from '@mui/material';
import { DifficultySliderContainer, CustomSlider } from '../styles/DifficultySlider';
import { useStore } from '../store/StoreProvider';

const difficultyMarks = [
  { value: 0, label: 'Very Easy' },
  { value: 1, label: 'Easy' },
  { value: 2, label: 'Normal' },
  { value: 3, label: 'Hard' },
  { value: 4, label: 'Ultra Hard' },
  { value: 5, label: 'Is this for real?!' },
];

const DifficultySlider: React.FC<{ value: number; onChange: (event: Event, newValue: number | number[]) => void }> = ({ value, onChange }) => {
  const { gameStore } = useStore();

  const getNumberOfCards = (value: number) => {
    const difficultyValue = gameStore.difficultyValues[value];
    return `${difficultyValue * 2} cards`;
  };

  return (
    <DifficultySliderContainer>
      <Typography variant="h6" gutterBottom>
        Select Difficulty
      </Typography>
      <CustomSlider
        value={value}
        onChange={onChange}
        step={1}
        marks={difficultyMarks}
        min={0}
        max={5}
        valueLabelDisplay="auto"
        valueLabelFormat={getNumberOfCards}
      />
    </DifficultySliderContainer>
  );
};

export default DifficultySlider;
