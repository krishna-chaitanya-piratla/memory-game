import styled from 'styled-components';

export const GameContainer = styled.div<{ rows: number; columns: number; cardSize: number; theme: { darkMode: boolean } }>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, ${({ cardSize }) => cardSize}rem);
  grid-template-rows: repeat(${({ rows }) => rows}, ${({ cardSize }) => cardSize}rem);
  gap: 0.5rem; /* Ensure there's a gap between cards */
  justify-content: center;
  align-items: center;
  margin: 1.25rem;
  border: 1px solid ${({ theme }) => theme.darkMode ? 'var(--dark-mode-text-color)' : 'var(--light-mode-text-color)'};
  padding: 0.5rem;
  border-radius: 1rem;
  max-height: 60vh;
  max-width: 80vw;
  overflow: hidden;
`;

export const GameInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const InfoItem = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.darkMode ? 'var(--dark-mode-text-color)' : 'var(--light-mode-text-color)'};
  margin-left: 2rem;
  margin-right: 2rem;
`;
