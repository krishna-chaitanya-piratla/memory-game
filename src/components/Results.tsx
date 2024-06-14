import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store/StoreProvider';
import { ResultsTable, ResultsRow, ResultsHeader, ResultsCell } from '../styles/Results';

const Results: React.FC = observer(() => {
  const { gameStore } = useStore();

  const formatTimeAgo = (startTime: number) => {
    const now = Date.now();
    const diff = now - startTime;
    const minutes = Math.floor(diff / 60000);
    return `${minutes} minute(s) ago`;
  };

  return (
    <ResultsTable>
      <thead>
        <ResultsRow>
          <ResultsHeader>Time Ago</ResultsHeader>
          <ResultsHeader>Turns</ResultsHeader>
          <ResultsHeader>Time</ResultsHeader>
          <ResultsHeader>Difficulty</ResultsHeader>
          <ResultsHeader>Status</ResultsHeader>
        </ResultsRow>
      </thead>
      <tbody>
        {gameStore.results.slice().reverse().map((result, index) => (
          <ResultsRow key={index}>
            <ResultsCell>{formatTimeAgo(result.startTime)}</ResultsCell>
            <ResultsCell>{result.turns}</ResultsCell>
            <ResultsCell>{result.time}</ResultsCell>
            <ResultsCell>{result.difficulty}</ResultsCell>
            <ResultsCell>{result.status ? '✔️' : '❌'}</ResultsCell>
          </ResultsRow>
        ))}
      </tbody>
    </ResultsTable>
  );
});

export default Results;
