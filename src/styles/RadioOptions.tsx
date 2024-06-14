import styled from 'styled-components';
import { Radio, FormControlLabel, Typography } from '@mui/material';

export const RadioContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const StyledRadio = styled(Radio)`
  color: ${({ theme }) => theme.darkMode ? 'var(--dark-mode-text-color)' : 'var(--light-mode-text-color)'};

  &.Mui-checked {
    color: ${({ theme }) => theme.darkMode ? 'var(--dark-mode-text-color)' : 'var(--light-mode-text-color)'};
  }

  .MuiSvgIcon-root {
    fill: ${({ theme }) => theme.darkMode ? 'var(--dark-mode-text-color)' : 'var(--light-mode-text-color)'};
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  .MuiFormControlLabel-label {
    color: ${({ theme }) => theme.darkMode ? 'var(--dark-mode-text-color)' : 'var(--light-mode-text-color)'};
  }
`;

export const StyledTypography = styled(Typography)`
  color: ${({ theme }) => theme.darkMode ? 'var(--dark-mode-text-color)' : 'var(--light-mode-text-color)'};
`;
