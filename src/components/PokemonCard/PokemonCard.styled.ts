import { styled } from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  width: 100%;
  max-width: 180px;
  margin: auto;

  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 445px) {
  max-width: 210px;
  }
`;

const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const PokemonName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  text-transform: capitalize;
`;

export const PokemonCardStyled = {
  CardContainer,
  PokemonImage,
  PokemonName,
};
