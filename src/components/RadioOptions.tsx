import React from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio, Typography } from '@mui/material';
import { RadioContainer, StyledRadio, StyledFormControlLabel, StyledTypography } from '../styles/RadioOptions';

const options = [
  { value: 'numbers', label: 'Numbers' },
  { value: 'characters', label: 'Characters' },
  { value: 'icons', label: 'Icons' },
];

const RadioOptions: React.FC<{ selectedOption: string; onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }> = ({ selectedOption, onChange }) => {
  return (
    <RadioContainer>
      <FormControl component="fieldset">
        <StyledTypography variant="h6" gutterBottom>
          Select Card Type
        </StyledTypography>
        <RadioGroup row value={selectedOption} onChange={onChange}>
          {options.map((option) => (
            <StyledFormControlLabel key={option.value} value={option.value} control={<StyledRadio />} label={option.label} />
          ))}
        </RadioGroup>
      </FormControl>
    </RadioContainer>
  );
};

export default RadioOptions;
