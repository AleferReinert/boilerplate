import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-display: swap;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        src: url('/fonts/poppins-v20-latin-300.woff2') format('woff2');
    }
    @font-face {
        font-display: swap; 
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        src: url('/fonts/poppins-v20-latin-regular.woff2') format('woff2');
    }
    @font-face {
    font-display: swap; 
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/poppins-v20-latin-500.woff2') format('woff2'); 
    }
    @font-face {
        font-display: swap;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        src: url('/fonts/poppins-v20-latin-600.woff2') format('woff2');
    }

    ${({ theme }) => css`
      html {
        font-size: 62.5%;
      }

      body {
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
        background-color: ${theme.colors.lightBg};
        overflow-x: hidden;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        &::before,
        &::after {
          box-sizing: inherit;
        }
      }

      button {
        cursor: pointer;
        border: 0;
        font-family: inherit;
      }

      label {
        cursor: pointer;
      }

      button:focus,
      svg:focus {
        outline: none;
      }
    `}    
`

export default GlobalStyles
