import { createGlobalStyle } from "styled-components";
import background from "./images/background.jpg"

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    #root {
    min-height: 100vh;
    font-family: 'Lato', sans-serif;
    background: url("${background}") center no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    
    }

    button {
    cursor: pointer;
    }
`;