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

export const pokemonListStyles = {
  CarouselContainer,
  StyledCarousel,
};
