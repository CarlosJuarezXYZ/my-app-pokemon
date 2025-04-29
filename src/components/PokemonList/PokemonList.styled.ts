import { Carousel } from "antd";
import { styled } from "styled-components";

const CarouselContainer = styled.div`
  width: 100%;
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
    width: 44px;
    height: 44px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    display: flex !important;
    align-items: center;
    justify-content: center;
    z-index: 10;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: background 0.3s ease-in-out;
    cursor: pointer;
  }

  .slick-prev {
    left: -20px;
  }

  .slick-next {
    right: -20px;
  }

  .slick-prev:hover,
  .slick-next:hover {
    background-color: rgba(0, 0, 0, 0.85);
  }

  .slick-prev:before,
  .slick-next:before {
    color: white !important;
    font-size: 30px;
    font-weight: bold !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const pokemonListStyles = {
  CarouselContainer,
  StyledCarousel,
};
