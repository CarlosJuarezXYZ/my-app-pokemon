import { LoaderStyled } from "./Loader.styled";

const { LoaderContainer, Pokeball } = LoaderStyled;

const Loader = () => {
  return (
    <LoaderContainer>
      <Pokeball />
    </LoaderContainer>
  );
};

export default Loader;
