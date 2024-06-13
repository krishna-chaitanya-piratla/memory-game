import styled from 'styled-components';

export const GameContainer = styled.div<{ rows: number; columns: number; cardSize: number; theme: { darkMode: boolean } }>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, ${({ cardSize }) => cardSize}px);
  grid-template-rows: repeat(${({ rows }) => rows}, ${({ cardSize }) => cardSize}px);
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin: 20px;
  border: 2px solid ${({ theme }) => theme.darkMode ? 'var(--dark-mode-text-color)' : 'var(--primary-text-color)'}; /* Conditional border color */
  padding: 16px;
  border-radius: 8px;
  max-height: 60vh; /* Max height 60% of viewport height */
  max-width: 60vw; /* Max width 60% of viewport width */
  overflow: hidden; /* Hide overflow to avoid scroll */
`;
