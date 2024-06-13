import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ theme: { darkMode: boolean } }>`
  :root {
    --primary-bg-color: hsl(43deg 73% 44%);
    --primary-text-color: hsl(0deg 0% 7%);
    --dark-mode-bg-color: hsl(0deg 0% 7%);
    --dark-mode-text-color: hsl(43deg 73% 44%);
    --dark-mode-icon-active-color: hsl(43deg 73% 44%);
    --dark-mode-icon-inactive-color: #aaa;
    --light-mode-icon-active-color: hsl(35deg 100% 16%);
    --header-text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
    /* Add more variables as needed */
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.darkMode ? 'var(--dark-mode-bg-color)' : 'var(--primary-bg-color)'};
    color: ${({ theme }) => theme.darkMode ? 'var(--dark-mode-text-color)' : 'var(--primary-text-color)'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
  }

  h1 {
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 300;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }
`;

export default GlobalStyle;
