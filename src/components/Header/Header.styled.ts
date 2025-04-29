import { Link } from "react-router-dom";
import { styled } from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  background: linear-gradient(135deg,#ffffff, #A5D8FF);
  //background: linear-gradient(135deg, #1e1e2f, #4a6fa1);
  padding: 15px 10px;
  display: flex;
  justify-content: start;
  align-items: center;
  top: 0;
  left: 0;
  border:1px solid #A5D8FF;
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 30px;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  color: #222;
  transition: all 0.3s ease;

  &:hover {
    color:rgb(165, 193, 255);
    text-decoration: underline;
  }
`;

export const HeaderStyled = { HeaderContainer, NavMenu, NavItem };
