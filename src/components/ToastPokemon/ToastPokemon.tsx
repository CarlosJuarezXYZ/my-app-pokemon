import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ToastPokemonStyled } from "./ToastPokemon.styled";

const { ToastContainer, CloseButton } = ToastPokemonStyled;

const ToastPokemon = () => {
  const lastViewed = useSelector((state: RootState) => state.pokemon.lastViewed);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
  }, [lastViewed]);

  if (!lastViewed || !visible) return null;

  return (
    <ToastContainer>
      <img src={lastViewed.image} alt={lastViewed.name} width={40} height={40} />
      <span>{lastViewed.name}</span>
      <CloseButton onClick={() => setVisible(false)}>X</CloseButton>
    </ToastContainer>
  );
};

export default ToastPokemon;
