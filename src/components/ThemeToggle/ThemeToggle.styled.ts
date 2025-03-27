import { styled } from "styled-components";

const ToggleButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const themeToggleStyled = {
    ToggleButton,
}