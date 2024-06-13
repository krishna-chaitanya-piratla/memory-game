import styled from 'styled-components';
import { Slider, Box } from '@mui/material';

export const DifficultySliderContainer = styled(Box)`
  width: 50%;
  margin: 20px 0;
`;

export const CustomSlider = styled(Slider)`
  color: ${({ theme }) => theme.darkMode ? 'var(--dark-mode-slider-color)' : 'var(--light-mode-slider-color)'};

  .MuiSlider-thumb {
    background-color: ${({ theme }) => theme.darkMode ? 'var(--dark-mode-thumb-color)' : 'var(--light-mode-thumb-color)'};
    border: 2px solid ${({ theme }) => theme.darkMode ? 'var(--dark-mode-thumb-border-color)' : 'var(--light-mode-thumb-border-color)'}; /* Custom border color */
    &:hover,
    &:focus,
    &.Mui-focusVisible {
      box-shadow: none; /* Remove default shadow */
    }
  }

  .MuiSlider-track {
    background-color: ${({ theme }) => theme.darkMode ? 'var(--dark-mode-track-color)' : 'var(--light-mode-track-color)'};
    border: 2px solid ${({ theme }) => theme.darkMode ? 'var(--dark-mode-track-border-color)' : 'var(--light-mode-track-border-color)'}; /* Custom border color */
  }

  .MuiSlider-rail {
    background-color: ${({ theme }) => theme.darkMode ? 'var(--dark-mode-rail-color)' : 'var(--light-mode-rail-color)'};
  }

  .MuiSlider-markLabel {
    color: ${({ theme }) => theme.darkMode ? 'var(--dark-mode-mark-label-color)' : 'var(--light-mode-mark-label-color)'};
  }
`;
