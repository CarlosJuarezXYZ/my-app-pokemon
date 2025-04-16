import { Modal } from "antd";
import { styled } from "styled-components";

const SearchContainer = styled.div`
  text-align: center;
  width: 300px;
`;

const ModalPokemon = styled(Modal)`
  top: 0;
  padding: 0;
  height: "100vh";
  overflowy: "auto";
  padding: "20px";
`;

export const SearchPokemonStyled = {
  SearchContainer,
  ModalPokemon,
};
