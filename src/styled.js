import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  word-break: break-word;
  font-family: "Lato", sans-serif;
  background-color: ${({theme}) => theme.colors.backgroundColor};
}

`;
