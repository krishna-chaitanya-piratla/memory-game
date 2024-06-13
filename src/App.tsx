import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { AppContainer, AppHeader, MainContent } from './styles/AppStyles';
import Head from './components/Head';
import Toggle from './components/Toggle';

const App: React.FC = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <Head />
      <AppHeader>
        <h1>Memory Game</h1>
        <Toggle />
      </AppHeader>
      <MainContent>
        {/* Additional elements will go here */}
      </MainContent>
    </AppContainer>
  );
};

export default App;
