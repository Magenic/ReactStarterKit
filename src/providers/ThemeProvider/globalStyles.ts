import {createGlobalStyle} from 'styled-components/macro';

// theme is also fully typed
const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }


 
  body {
    height: 100%;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.color.background.app};

    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  #root {
    /* Custom Styles */
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  img{
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
`;

export default GlobalStyles;
