import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px 'Arial', sans-serif;
    background: #e8e9e3;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }
`;