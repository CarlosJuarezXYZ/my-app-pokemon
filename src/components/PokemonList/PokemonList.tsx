import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import {
  fetchPokemonByType,
  selectTypePokemonList,
} from "../../redux/slices/pokemonSlice";
import { pokemonListStyles } from "./PokemonList.styled";
import { PokemonInterface } from "../../domain/pokemon";
import { useNavigate } from "react-router-dom";

const {
  CarouselContainer,
  StyledCarousel,
  PokemonCard,
  PokemonImage,
  PokemonName,
} = pokemonListStyles;

interface ListPokemonProps {
  type: string;
}

const ListPokemon: React.FC<ListPokemonProps> = ({ type }) => {
  const dispatch = useDispatch<AppDispatch>();
  const pokemons = useSelector((state: RootState) =>
    selectTypePokemonList(state, type)
  );
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPokemonByType(type));
  }, [dispatch, type]);

  const handlePokemonClick = (name: string) => {
    navigate(`/detail/${name}`);
  };

  return (
    <CarouselContainer>
      <h2 style={{ textAlign: "center" }}>{type.toUpperCase()}</h2>
      <StyledCarousel
        dots={false}
        variableWidth={false}
        arrows={true}
        slidesToShow={4}
        slidesToScroll={1}
        responsive={[
          {
            breakpoint: 1024,
            settings: { slidesToShow: 3, slidesToScroll: 1 },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 2, slidesToScroll: 1 },
          },
          {
            breakpoint: 480,
            settings: { slidesToShow: 2, slidesToScroll: 1 },
          },
        ]}
      >
        {pokemons.map((pokemon: PokemonInterface) => (
          <div key={pokemon.name} onClick={() => handlePokemonClick(pokemon.name)}>
            <PokemonCard>
              <PokemonImage src={pokemon.image} alt={pokemon.name} />
              <PokemonName>{pokemon.name}</PokemonName>
            </PokemonCard>
          </div>
        ))}
      </StyledCarousel>
    </CarouselContainer>
  );
};

export default ListPokemon;
