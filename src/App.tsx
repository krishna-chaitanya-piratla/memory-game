import React from 'react';
import { observer } from 'mobx-react-lite';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { AppContainer, AppHeader, MainContent, Button } from './styles/AppStyles';
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

  const handleStartGame = () => {
    gameStore.startGame();
  };

  const handleEndGame = () => {
    gameStore.endGame();
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
          {!gameStore.gameStarted ? (
            <>
              <DifficultySlider value={gameStore.difficultyIndex} onChange={handleSliderChange} />
              <Button onClick={handleStartGame}>Start Game</Button>
            </>
          ) : (
            <>
              <Game size={gameStore.difficultyValue} />
              <Button onClick={handleEndGame}>End Game</Button>
            </>
          )}
        </MainContent>
      </AppContainer>
    </ThemeProvider>
  );
});

export default App;
