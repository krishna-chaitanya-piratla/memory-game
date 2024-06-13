import React from 'react';
import { ToggleContainer, StyledSwitch, IconWrapper } from '../styles/Toggle';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Toggle: React.FC = () => {
  return (
    <ToggleContainer>
      <IconWrapper>
        <LightModeIcon />
      </IconWrapper>
      <StyledSwitch />
      <IconWrapper>
        <DarkModeIcon />
      </IconWrapper>
    </ToggleContainer>
  );
};

export default Toggle;
