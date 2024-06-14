import styled from 'styled-components';

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const ResultsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
`;

export const ResultsRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.darkMode ? 'var(--dark-mode-text-color)' : 'var(--light-mode-text-color)'};
`;

export const ResultsCell = styled.td`
  padding: 0.5rem 1rem;
  text-align: center;
  color: ${({ theme }) => theme.darkMode ? 'var(--dark-mode-text-color)' : 'var(--light-mode-text-color)'};
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: inherit;
  color: ${({ theme }) => theme.darkMode ? 'var(--dark-mode-text-color)' : 'var(--light-mode-text-color)'};
  border: ${({ theme }) => theme.darkMode ? '1px solid var(--light-mode-bg-color)' : '1px solid var(--dark-mode-bg-color)'};
  border-radius: 0.375rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.darkMode ? 'var(--light-mode-text-color)' : 'var(--dark-mode-text-color)'};
    background-color: ${({ theme }) => theme.darkMode ? 'var(--light-mode-bg-color)' : 'var(--dark-mode-bg-color)'};
  }
`;
