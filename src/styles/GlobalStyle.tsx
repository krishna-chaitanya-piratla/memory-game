import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ theme: { darkMode: boolean } }>`
  :root {
    --light-mode-bg-color: hsl(43deg 73% 44%);
    --light-mode-text-color: hsl(0deg 0% 7%);
    --dark-mode-bg-color: hsl(0deg 0% 7%);
    --dark-mode-text-color: hsl(43deg 73% 44%);
    --dark-mode-icon-active-color: hsl(43deg 73% 44%);
    --dark-mode-icon-inactive-color: #aaa;
    --light-mode-icon-active-color: hsl(35deg 100% 16%);
    --header-text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);

    --dark-mode-slider-color: hsl(0deg 0% 50%);
    --light-mode-slider-color: hsl(43deg 73% 44%);
    --dark-mode-thumb-color: var(--light-mode-bg-color);
    --light-mode-thumb-color: var(--dark-mode-bg-color);
    --dark-mode-thumb-border-color: var(--light-mode-bg-color);
    --light-mode-thumb-border-color: var(--dark-mode-bg-color);
    --dark-mode-track-color: var(--light-mode-bg-color);
    --light-mode-track-color: var(--dark-mode-bg-color);
    --dark-mode-track-border-color: var(--light-mode-bg-color);
    --light-mode-track-border-color: var(--dark-mode-bg-color);
    --dark-mode-rail-color: #333;
    --light-mode-rail-color: #ccc;
    --dark-mode-mark-label-color: var(--dark-mode-text-color);
    --light-mode-mark-label-color: var(--light-mode-text-color);
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
    background-color: ${({ theme }) => theme.darkMode ? 'var(--dark-mode-bg-color)' : 'var(--light-mode-bg-color)'};
    color: ${({ theme }) => theme.darkMode ? 'var(--dark-mode-text-color)' : 'var(--light-mode-text-color)'};
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
