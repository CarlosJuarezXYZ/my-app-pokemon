import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{ themeMode: string }>`
  body {
    background-color: ${(props) =>
      props.themeMode === "light" ? "#F0F8FF" : "#1E1E1E"};
    color: ${(props) => (props.themeMode === "light" ? "#333" : "#E0E0E0")};
    transition: all 0.3s ease-in-out;
  }
`;

export default GlobalStyle;