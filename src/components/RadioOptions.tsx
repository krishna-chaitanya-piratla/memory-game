import React from 'react';
import { observer } from 'mobx-react-lite';
import { FormControl, FormControlLabel, RadioGroup, Radio, Typography } from '@mui/material';
import { RadioContainer, StyledRadio, StyledFormControlLabel, StyledTypography } from '../styles/RadioOptions';
import { useStore } from '../store/StoreProvider';

const options = [
  { value: 'numbers', label: 'Numbers' },
  { value: 'characters', label: 'Characters' },
  { value: 'emoticons', label: 'Icons' },
];

const RadioOptions: React.FC<{ selectedOption: string; onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }> = observer(({ selectedOption, onChange }) => {
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
});

export default RadioOptions;
