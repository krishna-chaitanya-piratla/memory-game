import styled from 'styled-components';

export const CardContainer = styled.div<{ isVisible: boolean }>`
  width: 100px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: ${({ isVisible }) => (isVisible ? '#fff' : '#ccc')};
  cursor: pointer;
  user-select: none;
  font-size: 2rem;
  color: ${({ isVisible }) => (isVisible ? '#333' : 'transparent')};
  box-shadow: ${({ isVisible }) => (isVisible ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none')};
`;
