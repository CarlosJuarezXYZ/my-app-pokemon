import { FC } from "react";
import { PokemonCardStyled } from "./PokemonCard.styled";

interface PokemonCardInterface {
  onClick: () => void;
  name: string;
  image: string;
  alt: string;
}

const { CardContainer, PokemonImage, PokemonName } = PokemonCardStyled;

const PokemonCard: FC<PokemonCardInterface> = ({
  onClick,
  name,
  image,
  alt,
}) => {
  return (
    <CardContainer onClick={onClick}>
      <PokemonImage src={image} alt={alt} />
      <PokemonName>{name}</PokemonName>
    </CardContainer>
  );
};

export default PokemonCard;
