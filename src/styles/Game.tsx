import styled from 'styled-components';

export const GameContainer = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;
