import React from 'react';
import { observer } from 'mobx-react-lite';
import { ToggleContainer, StyledSwitch, IconWrapper } from '../styles/Toggle';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useStore } from '../store/StoreProvider';

const Toggle: React.FC = observer(() => {
  const { appStore } = useStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    appStore.setDarkMode(event.target.checked);
  };

  return (
    <ToggleContainer>
      <IconWrapper>
        <LightModeIcon />
      </IconWrapper>
      <StyledSwitch checked={appStore.darkMode} onChange={handleChange} />
      <IconWrapper>
        <DarkModeIcon />
      </IconWrapper>
    </ToggleContainer>
  );
});

export default Toggle;
