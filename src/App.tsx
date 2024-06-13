import React from 'react';
import { observer } from 'mobx-react-lite';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { AppContainer, AppHeader, MainContent } from './styles/AppStyles';
import Head from './components/Head';
import Toggle from './components/Toggle';
import Game from './components/Game';
import DifficultySlider from './components/DifficultySlider';
import { useStore } from './store/StoreProvider';

const App: React.FC = observer(() => {
  const { appStore, gameStore } = useStore();

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    gameStore.setDifficulty(gameStore.difficultyValues[newValue as number]);
  };

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
          <DifficultySlider value={gameStore.difficultyIndex} onChange={handleSliderChange} />
          <Game size={gameStore.difficultyValue} /> {/* Adjust the size based on difficulty */}
        </MainContent>
      </AppContainer>
    </ThemeProvider>
  );
});

export default App;
