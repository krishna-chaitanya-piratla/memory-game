import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { AppContainer, AppHeader, MainContent, Button } from './styles/AppStyles';
import Head from './components/Head';
import Toggle from './components/Toggle';
import Game from './components/Game';
import DifficultySlider from './components/DifficultySlider';
import RadioOptions from './components/RadioOptions';
import { useStore } from './store/StoreProvider';

const App: React.FC = observer(() => {
  const { appStore, gameStore } = useStore();
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 500); // Ensure fadeIn is true after the fade-out completes
    return () => clearTimeout(timer); // Clean up timeout on component unmount
  }, [gameStore.gameVisible]);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    gameStore.setDifficulty(gameStore.difficultyValues[newValue as number]);
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    gameStore.setSelectedOption((event.target as HTMLInputElement).value);
  };

  const handleStartGame = () => {
    setFadeIn(false);
    setTimeout(() => {
      gameStore.startGame();
      setFadeIn(true);
    }, 500); // Start the game after the fade-out completes
  };

  const handleEndGame = () => {
    setFadeIn(false);
    setTimeout(() => {
      gameStore.endGame();
      setFadeIn(true);
    }, 500); // End the game after the fade-out completes
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
        <MainContent fadeIn={fadeIn}>
          {!gameStore.gameVisible ? (
            <>
              <DifficultySlider value={gameStore.difficultyIndex} onChange={handleSliderChange} />
              <RadioOptions selectedOption={gameStore.selectedOption} onChange={handleOptionChange} />
              <Button onClick={handleStartGame}>Start Game</Button>
            </>
          ) : (
            <>
              <Game />
              <Button onClick={handleEndGame}>End Game</Button>
            </>
          )}
        </MainContent>
      </AppContainer>
    </ThemeProvider>
  );
});

export default App;
