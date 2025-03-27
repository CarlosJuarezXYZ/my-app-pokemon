import React from "react";
import { useSelector } from "react-redux";
import { selectVisitedPokemons } from "../../redux/slices/pokemonSlice";
import { Card, Row, Col } from "antd";
import { HistoryPokemonStyled } from "./HistoryPokemon.styled";

const {Container, Title, StyledCard} = HistoryPokemonStyled;

const HistoryPokemon: React.FC = () => {
  const visitedPokemons = useSelector(selectVisitedPokemons);

  return (
    <Container>
      <Title>Historial de Pokémon Visitados</Title>
      {visitedPokemons.length === 0 ? (
        <p>Aún no has visitado ningún Pokémon. ¡Explora y atrápalos todos!</p>
      ) : (
        <Row gutter={[16, 16]} justify="center">
          {visitedPokemons.map((pokemon: any) => (
            <Col xs={24} sm={12} md={8} lg={6} key={pokemon.name}>
              <StyledCard hoverable cover={<img alt={pokemon.name} src={pokemon.image} />}>
                <Card.Meta title={pokemon.name} />
              </StyledCard>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default HistoryPokemon;
