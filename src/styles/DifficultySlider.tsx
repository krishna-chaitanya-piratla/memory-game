import styled from 'styled-components';
import { Slider, Box } from '@mui/material';

export const DifficultySliderContainer = styled(Box)`
  width: 50%;
  margin: 20px 0;
`;

export const CustomSlider = styled(Slider)`
  .MuiSlider-markLabel {
    color: ${({ theme }) => theme.darkMode ? 'var(--dark-mode-text-color)' : 'var(--primary-text-color)'};
  }
`;
