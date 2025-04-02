import { FC } from "react";
import ListPokemon from "../../components/PokemonList/PokemonList";
import SearchPokemon from "../../components/SearchPokemon/SearchPokemon";
import { InitStyled } from "./Init.styled";
import { typePokemon } from "./pokemon-type";

const { Container, SearchContainer, ListContainer } = InitStyled;

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
