import styled from 'styled-components';

export const GameContainer = styled.div<{ rows: number; columns: number; cardSize: number; theme: { darkMode: boolean } }>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, ${({ cardSize }) => cardSize}rem);
  grid-template-rows: repeat(${({ rows }) => rows}, ${({ cardSize }) => cardSize}rem);
  gap: var(--gap-size);
  justify-content: center;
  align-items: center;
  margin: 1.25rem;
  border: var(--border-width) solid ${({ theme }) => theme.darkMode ? 'var(--dark-mode-text-color)' : 'var(--primary-text-color)'};
  padding: var(--padding-size);
  border-radius: var(--border-radius);
  max-height: 60vh;
  max-width: 80vw;
  overflow: hidden;
`;
