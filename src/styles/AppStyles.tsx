import styled from 'styled-components';

export const AppContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;

export const AppHeader = styled.header`
    font-size: 2.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 0;
    background-color: #282c34;
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const MainContent = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px;
`;
