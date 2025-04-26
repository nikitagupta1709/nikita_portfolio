// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background: ${({ theme }) => theme.background};
    background-blend-mode: ${({ theme }) => theme.backgroundBlend};
    color: ${({ theme }) => theme.text};
    transition: all 0.4s ease-in-out;
  }

  h1, h2, h3 {
    font-weight: 600;
  }

  p {
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    transition: color 0.2s;
  }

  a:hover {
    color: #ff4c60;
  }

  button, input, textarea {
    font-family: inherit;
  }
`;

export default GlobalStyles;
