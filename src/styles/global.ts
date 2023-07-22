import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        font-family: "Inter",system-ui, sans-serif;
        overflow-y: hidden

        
    }

    html, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;

        a {
            text-decoration: none;
            color: inherit;
        }
  }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyles;
