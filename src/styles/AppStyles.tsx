import styled from 'styled-components';

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

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: var(--padding-size);
`;
