import React from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio, Typography } from '@mui/material';
import styled from 'styled-components';

const RadioContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const options = [
  { value: 'numbers', label: 'Numbers' },
  { value: 'characters', label: 'Characters' },
  { value: 'icons', label: 'Icons' },
];

const RadioOptions: React.FC<{ selectedOption: string; onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }> = ({ selectedOption, onChange }) => {
  return (
    <RadioContainer>
      <FormControl component="fieldset">
        <Typography variant="h6" gutterBottom>
          Select Card Type
        </Typography>
        <RadioGroup row value={selectedOption} onChange={onChange}>
          {options.map((option) => (
            <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
          ))}
        </RadioGroup>
      </FormControl>
    </RadioContainer>
  );
};

export default RadioOptions;
