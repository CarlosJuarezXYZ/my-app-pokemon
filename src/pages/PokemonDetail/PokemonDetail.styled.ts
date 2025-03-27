import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
`;

const Card = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #333;
  transition: color 0.3s;

  &:hover {
    color: #d32f2f;
  }
`;

export const PokemonDetailStyled = {
  Container,
  Card,
  BackButton,
};
