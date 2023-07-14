import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        font-family: "Inter",system-ui, sans-serif;
        overflow-y: hidden

        
    }

    html, body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
  }

    button {
        cursor: pointer;
    }
`;
