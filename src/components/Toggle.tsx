import React from 'react';
import { observer } from 'mobx-react-lite';
import { ToggleContainer, StyledSwitch, IconWrapper, StyledLightModeIcon, StyledDarkModeIcon } from '../styles/Toggle';
import { useStore } from '../store/StoreProvider';

const Toggle: React.FC = observer(() => {
  const { appStore } = useStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    appStore.setDarkMode(event.target.checked);
  };

  return (
    <ToggleContainer>
      <IconWrapper>
        <StyledLightModeIcon active={!appStore.darkMode} />
      </IconWrapper>
      <StyledSwitch checked={appStore.darkMode} onChange={handleChange} />
      <IconWrapper>
        <StyledDarkModeIcon active={appStore.darkMode} />
      </IconWrapper>
    </ToggleContainer>
  );
});

export default Toggle;
