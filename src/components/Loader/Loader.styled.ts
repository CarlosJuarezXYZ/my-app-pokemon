import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Pokeball = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: white;
  border: 4px solid black;
  position: relative;
  overflow: hidden;
  animation: ${spin} 1s linear infinite;

  &::before {
    content: "";
    width: 100%;
    height: 50%;
    background-color: red;
    position: absolute;
    top: 0;
    left: 0;
  }

  &::after {
    content: "";
    width: 20px;
    height: 20px;
    background-color: white;
    border: 4px solid black;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
`;

export const LoaderStyled = {
  LoaderContainer,
  Pokeball,
};
