import styled, { keyframes, css } from 'styled-components';

const fadeInKeyframes = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOutKeyframes = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const fadeInAnimation = css`
  animation: ${fadeInKeyframes} 0.5s ease-in-out;
`;

const fadeOutAnimation = css`
  animation: ${fadeOutKeyframes} 0.5s ease-in-out;
`;

export const AppContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
`;

export const AppHeader = styled.header`
  font-size: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.25rem 0;
  position: relative;

  h1 {
    text-shadow: var(--header-text-shadow);
  }
`;

export const MainContent = styled.main<{ fadeIn: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.25rem;
  ${({ fadeIn }) => (fadeIn ? fadeInAnimation : fadeOutAnimation)}
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: inherit;
  color: ${({ theme }) => theme.darkMode ? 'var(--dark-mode-text-color)' : 'var(--primary-text-color)'};
  border: ${({ theme }) => theme.darkMode ? '1px solid var(--primary-bg-color)' : '1px solid var(--dark-mode-bg-color)'};
  border-radius: 0.375rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.darkMode ? 'var(--primary-text-color)' : 'var(--dark-mode-text-color)'};
    background-color: ${({ theme }) => theme.darkMode ? 'var(--primary-bg-color)' : 'var(--dark-mode-bg-color)'};
  }
`;
