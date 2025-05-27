import { Card } from "antd";
import { styled } from "styled-components";

const Container = styled.div`
  padding: 20px;
  text-align: center;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color:  #A5D8FF;
  text-shadow: 2px 2px 0px #fff;
  margin-bottom: 20px;
`;

const StyledCard = styled(Card)`
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export const HistoryPokemonStyled = { Container, Title, StyledCard };
