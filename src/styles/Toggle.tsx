import styled from 'styled-components';
import { Switch } from '@mui/material';

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
`;

export const StyledSwitch = styled(Switch)`
  /* Add custom styles here */
  .MuiSwitch-switchBase.Mui-checked {
    color: #4caf50; /* Checked color */
  }
  .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
    background-color: #4caf50; /* Checked background color */
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
  margin: 0 8px;
`;
