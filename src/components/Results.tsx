import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store/StoreProvider';
import { ResultsContainer, ResultsTable, ResultsRow, ResultsCell, Button } from '../styles/Results';

const Results: React.FC = observer(() => {
  const { gameStore } = useStore();

  const getTimeAgo = (timestamp: number) => {
    const secondsAgo = Math.floor((Date.now() - timestamp) / 1000);
    const minutesAgo = Math.floor(secondsAgo / 60);
    return `${minutesAgo} minutes ago`;
  };

  const handleHomeClick = () => {
    gameStore.gameStarted = false;
  };

  return (
    <ResultsContainer>
      <ResultsTable>
        <thead>
          <ResultsRow>
            <ResultsCell>Time Ago</ResultsCell>
            <ResultsCell>Turns</ResultsCell>
            <ResultsCell>Duration</ResultsCell>
            <ResultsCell>Difficulty</ResultsCell>
            <ResultsCell>Status</ResultsCell>
          </ResultsRow>
        </thead>
        <tbody>
          {[...gameStore.results].reverse().map((result, index) => (
            <ResultsRow key={index}>
              <ResultsCell>{getTimeAgo(result.startTime)}</ResultsCell>
              <ResultsCell>{result.turns}</ResultsCell>
              <ResultsCell>{result.time}</ResultsCell>
              <ResultsCell>{result.difficulty}</ResultsCell>
              <ResultsCell>{result.status ? '✅' : '❌'}</ResultsCell>
            </ResultsRow>
          ))}
        </tbody>
      </ResultsTable>
      <Button onClick={handleHomeClick}>Home</Button>
    </ResultsContainer>
  );
});

export default Results;
