import { Carousel } from "antd";
import { styled } from "styled-components";

const CarouselContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  overflow: hidden;
  height: 300px;
`;

const StyledCarousel = styled(Carousel)`
  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-list {
    padding: 10px 0;
  }

  .slick-prev, .slick-next {
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 50%;
    display: flex !important;
    align-items: center;
    justify-content: center;
    z-index: 10;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: background 0.3s ease-in-out;
  }

  .slick-prev { left: -15px; }
  .slick-next { right: -15px; }

  .slick-prev:hover, .slick-next:hover {
    background-color: rgba(0, 0, 0, 1);
  }

  .slick-prev:before, .slick-next:before {
    color: white !important;
    font-size: 24px;
    font-weight: bold;
  }
`;

const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  width: 110px;
  margin: 0 5px;

  &:hover {
    transform: scale(1.05);
  }
`;

const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const PokemonName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  text-transform: capitalize;
`;

export const pokemonListStyles = {
  CarouselContainer,
  StyledCarousel,
  PokemonCard,
  PokemonImage,
  PokemonName
};
