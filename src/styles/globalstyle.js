import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }

  body {
    position: relative;
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
  }
`;
