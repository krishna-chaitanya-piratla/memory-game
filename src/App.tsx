import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { AppContainer, AppHeader } from './styles/AppStyles';
import { Helmet } from 'react-helmet';

const App: React.FC = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/wotfard"
          rel="stylesheet"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap" 
          rel="stylesheet" 
        />
      </Helmet>
      <AppHeader>
        <h1>Memory Game</h1>
      </AppHeader>
    </AppContainer>
  );
};

export default App;
