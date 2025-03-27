import { HeaderStyled } from "./Header.styled";

const { HeaderContainer, NavMenu, NavItem } = HeaderStyled;

const Header = () => {
  return (
    <HeaderContainer>
      <NavMenu>
        <NavItem to="/">Inicio</NavItem>
        <NavItem to="/history">Historial</NavItem>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
