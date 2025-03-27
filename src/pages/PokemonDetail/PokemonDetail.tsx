import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchPokemonDetail, addToHistory } from "../../redux/slices/pokemonSlice";
import Loader from "../../components/Loader/Loader";
import { FaArrowLeft } from "react-icons/fa";
import { PokemonDetailStyled } from "./PokemonDetail.styled";

const { Container, Card, BackButton } = PokemonDetailStyled;

const PokemonDetail = () => {
  const { name } = useParams<{ name: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { pokemonDetail, status, error, visitedPokemons } = useSelector(
    (state: RootState) => state.pokemon
  );

  useEffect(() => {
    if (name) dispatch(fetchPokemonDetail(name));
  }, [dispatch, name]);

  useEffect(() => {
    if (pokemonDetail && !visitedPokemons.some((pokemon) => pokemon.id === pokemonDetail.id)) {
      dispatch(addToHistory(pokemonDetail));
    }
  }, [dispatch, pokemonDetail, visitedPokemons]);

  if (status === "loading") return <Loader />;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </BackButton>
      <Card>
        <h2>Detalles de {pokemonDetail?.name}</h2>
        <img src={pokemonDetail?.image} alt={pokemonDetail?.name} width={150} />
        <p><strong>Altura:</strong> {pokemonDetail?.height} decímetros</p>
        <p><strong>Peso:</strong> {pokemonDetail?.weight} hectogramos</p>
        <p><strong>Tipos:</strong> {pokemonDetail?.types?.join(", ")}</p>
        <p><strong>Habilidades:</strong> {pokemonDetail?.abilities?.join(", ")}</p>
      </Card>
    </Container>
  );
};

export default PokemonDetail;
