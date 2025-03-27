import React, { useEffect, useState, useRef, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Input, Spin, Row, Col } from "antd";
import { AppDispatch } from "../../redux/store";
import {
  fetchAllPokemons,
  selectAllPokemons,
} from "../../redux/slices/pokemonSlice";
import { SearchPokemonStyled } from "./SearchPokemon.styled";
import { PokemonInterface } from "../../domain/pokemon";
import { useNavigate } from "react-router-dom";

const { SearchContainer, PokemonCard, PokemonImage, PokemonName } =
  SearchPokemonStyled;

const SearchPokemon: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const pokemons = useSelector(selectAllPokemons);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isModalOpen && pokemons.length === 0) {
      dispatch(fetchAllPokemons());
    }
  }, [isModalOpen, dispatch, pokemons.length]);

  const filteredPokemons = pokemons.filter((pokemon: PokemonInterface) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const lastPokemonRef = (node: HTMLDivElement | null) => {
    if (isFetching) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsFetching(true);
          dispatch(fetchAllPokemons()).finally(() => setIsFetching(false));
        }
      },
      { threshold: 1.0 }
    );
    if (node) observer.current.observe(node);
  };

  const handlePokemonClick = (name: string) => {
    setIsModalOpen(false);
    navigate(`/detail/${name}`);
  };

  return (
    <SearchContainer>
      <Input
        placeholder="Buscar Pokémon..."
        onClick={() => setIsModalOpen(true)}
        readOnly
      />

      <Modal
        title="Buscar Pokémon"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width="100vw"
        style={{ top: 0, padding: 0 }}
        bodyStyle={{ height: "100vh", overflowY: "auto", padding: "20px" }}
      >
        <Input
          placeholder="Filtrar Pokémon..."
          value={searchTerm}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
          style={{ marginBottom: "10px" }}
        />

        <Row gutter={[16, 16]} justify="center">
          {filteredPokemons.map((pokemon:any, index:any) => (
            <Col
              key={pokemon.name}
              xs={12}
              sm={8}
              md={6}
              lg={4}
              xl={3}
              ref={index === filteredPokemons.length - 1 ? lastPokemonRef : null}
            >
              <PokemonCard onClick={() => handlePokemonClick(pokemon.name)}>
                <PokemonImage src={pokemon.image} alt={pokemon.name} />
                <PokemonName>{pokemon.name}</PokemonName>
              </PokemonCard>
            </Col>
          ))}
        </Row>

        {isFetching && (
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <Spin />
          </div>
        )}
      </Modal>
    </SearchContainer>
  );
};

export default SearchPokemon;
