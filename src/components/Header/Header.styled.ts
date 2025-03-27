import { Link } from "react-router-dom";
import { styled } from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  background: linear-gradient(135deg, #ff7f7f, #ffd699);
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
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
    color: #ffcc00;
    text-decoration: underline;
  }
`;

export const HeaderStyled = { HeaderContainer, NavMenu, NavItem };
