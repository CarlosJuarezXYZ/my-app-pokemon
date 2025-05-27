import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{ themeMode: string }>`
  header {
    background: ${(props) =>
      props.themeMode === "light"
        ? "linear-gradient(135deg, #ffffff, #A5D8FF)"
        : "linear-gradient(135deg, #1A2A3A, #3C5A80)"};
    padding: 15px 10px;
  display: flex;
  justify-content: start;
  align-items: center;
  top: 0;
  left: 0;
  border: ${(props) =>
      props.themeMode === "light"
        ? "1px solid #A5D8FF"
        : "1px solid #3C5A80"};
  }

  a {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${(props) => (props.themeMode === "light" ? "#1E2E3A" : "#E0E0E0")};
    transition: all 0.3s ease;

    &:hover {
      color: ${(props) =>
        props.themeMode === "light" ? "#0B5ED7" : "#A5C1FF"};
      text-decoration: underline;
    }
  }

  body {
    background-color: ${(props) =>
      props.themeMode === "light" ? "#F0F8FF" : "#162C45"};
    color: ${(props) => (props.themeMode === "light" ? "#333" : "#E0E0E0")};
    transition: all 0.3s ease-in-out;
  }
`;

export default GlobalStyle;
