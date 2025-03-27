import { FC } from "react";
import ListPokemon from "../../components/PokemonList/PokemonList";
import SearchPokemon from "../../components/SearchPokemon/SearchPokemon";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

const SearchContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;

  input {
    width: 100%;
    padding: 10px 15px;
    font-size: 16px;
    border: 2px solid #ddd;
    border-radius: 20px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    outline: none;
    transition: all 0.3s ease-in-out;

    &:focus {
      border-color: #ff5722;
      box-shadow: 2px 2px 10px rgba(255, 87, 34, 0.3);
    }
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  margin-top: 20px;
`;

const typePokemon = [
  { id: 1, type: "fire" },
  { id: 2, type: "water" },
  { id: 3, type: "electric" },
  { id: 4, type: "dragon" },
  { id: 5, type: "ghost" },
];

const Init: FC = () => {
  return (
    <Container>
      <SearchContainer>
        <SearchPokemon />
      </SearchContainer>
      <h1>Pokémons</h1>
      <ListContainer>
        {typePokemon.map((type) => (
          <ListPokemon key={type.id} type={type.type} />
        ))}
      </ListContainer>
    </Container>
  );
};

export default Init;
