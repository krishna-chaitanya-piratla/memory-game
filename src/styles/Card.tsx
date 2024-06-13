import styled from 'styled-components';

export const CardContainer = styled.div<{ isVisible: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.0625rem solid #ccc;
  border-radius: 0.5rem;
  background-color: ${({ isVisible }) => (isVisible ? '#fff' : '#ccc')};
  cursor: pointer;
  user-select: none;
  font-size: 2rem;
  color: ${({ isVisible }) => (isVisible ? '#333' : 'transparent')};
  box-shadow: ${({ isVisible }) => (isVisible ? '0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)' : 'none')};
`;
