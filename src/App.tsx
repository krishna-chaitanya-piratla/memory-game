import React from 'react';
import { observer } from 'mobx-react-lite';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { AppContainer, AppHeader, MainContent } from './styles/AppStyles';
import Head from './components/Head';
import Toggle from './components/Toggle';
import { useStore } from './store/StoreProvider';

const App: React.FC = observer(() => {
  const { appStore } = useStore();

  const theme = {
    darkMode: appStore.darkMode,
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <AppContainer>
        <Head />
        <AppHeader>
          <h1>Memory Game</h1>
          <Toggle />
        </AppHeader>
        <MainContent>
          {/* Additional elements will go here */}
        </MainContent>
      </AppContainer>
    </ThemeProvider>
  );
});

export default App;
