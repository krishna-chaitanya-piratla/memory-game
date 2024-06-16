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
import Results from './components/Results';
import { useStore } from './store/StoreProvider';

const App: React.FC = observer(() => {
  const { appStore, gameStore } = useStore();
  const [view, setView] = useState<'home' | 'game' | 'results'>(gameStore.view);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransition = (newView: 'home' | 'game' | 'results') => {
    setIsTransitioning(true);
    setTimeout(() => {
      setView(newView);
      setIsTransitioning(false);
    }, 500); // Duration of the fade-out animation
  };

  useEffect(() => {
    if (gameStore.view !== view && !isTransitioning) {
      handleTransition(gameStore.view);
    }
  }, [gameStore.view]);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    gameStore.setDifficulty(gameStore.difficultyValues[newValue as number]);
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    gameStore.setSelectedOption((event.target as HTMLInputElement).value);
  };

  const handleStartGame = () => {
    handleTransition('game');
    setTimeout(() => {
      gameStore.startGame();
    }, 500); // Start the game after the fade-out completes
  };

  const handleEndGame = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      gameStore.endGame(false); // Pass false to indicate game ended without revealing all pairs
      setView('results');
      setIsTransitioning(false);
    }, 500); // End the game after the fade-out completes
  };

  const handleHomeClick = () => {
    handleTransition('home');
    setTimeout(() => {
      gameStore.showHome();
    }, 500); // Navigate to home after the fade-out completes
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
        <MainContent fadeIn={!isTransitioning}>
          {view === 'home' && (
            <>
              <DifficultySlider value={gameStore.difficultyIndex} onChange={handleSliderChange} />
              <RadioOptions selectedOption={gameStore.selectedOption} onChange={handleOptionChange} />
              <Button onClick={handleStartGame}>Start Game</Button>
            </>
          )}
          {view === 'game' && (
            <>
              <Game />
              <Button onClick={handleEndGame}>End Game</Button>
            </>
          )}
          {view === 'results' && (
            <>
              <Results />
              <Button onClick={handleHomeClick}>Home</Button>
            </>
          )}
        </MainContent>
      </AppContainer>
    </ThemeProvider>
  );
});

export default App;
