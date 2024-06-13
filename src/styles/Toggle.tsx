import styled from 'styled-components';
import { Switch } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 1.25rem;
  transform: translateY(-50%);
`;

export const StyledSwitch = styled(Switch)`
  /* Add custom styles here */
  .MuiSwitch-switchBase.Mui-checked {
    color: var(--dark-mode-icon-active-color); /* Checked color */
  }
  .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
    background-color: hsl(43deg 73% 44%); /* Checked background color */
  }
  .MuiSwitch-switchBase {
    color: #ccc; /* Unchecked color */
  }
  .MuiSwitch-track {
    background-color: #ccc; /* Unchecked background color */
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
`;

export const StyledLightModeIcon = styled(LightModeIcon)<{ active: boolean }>`
  color: ${({ active }) => (active ? 'var(--light-mode-icon-active-color)' : 'var(--dark-mode-icon-inactive-color)')};
`;

export const StyledDarkModeIcon = styled(DarkModeIcon)<{ active: boolean }>`
  color: ${({ active }) => (active ? 'var(--dark-mode-icon-active-color)' : 'var(--dark-mode-icon-inactive-color)')};
`;
