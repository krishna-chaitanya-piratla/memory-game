import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { AppContainer, AppHeader } from './styles/AppStyles';

const App: React.FC = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <AppHeader>
        <h1>Memory Game</h1>
      </AppHeader>
    </AppContainer>
  );
};

export default App;
