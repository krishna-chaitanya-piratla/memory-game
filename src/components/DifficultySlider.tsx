import React from 'react';
import { Slider, Typography, Box } from '@mui/material';
import styled from 'styled-components';

const difficultyMarks = [
  { value: 0, label: 'Very Easy' },
  { value: 1, label: 'Easy' },
  { value: 2, label: 'Normal' },
  { value: 3, label: 'Hard' },
  { value: 4, label: 'Ultra Hard' },
  { value: 5, label: 'Is this for real?!' },
];

const DifficultySliderContainer = styled(Box)`
  width: 50%;
  margin: 20px 0;
`;

const DifficultySlider: React.FC<{ value: number; onChange: (event: Event, newValue: number | number[]) => void }> = ({ value, onChange }) => {
  return (
    <DifficultySliderContainer>
      <Typography variant="h6" gutterBottom>
        Select Difficulty
      </Typography>
      <Slider
        value={value}
        onChange={onChange}
        step={1}
        marks={difficultyMarks}
        min={0}
        max={5}
        valueLabelDisplay="auto"
      />
    </DifficultySliderContainer>
  );
};

export default DifficultySlider;
