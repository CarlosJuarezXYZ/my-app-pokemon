import { HeaderStyled } from "./Header.styled";
import { Link } from "react-router-dom";

const { HeaderContainer, NavMenu} = HeaderStyled;

const Header = () => {
  return (
    <HeaderContainer>
      <NavMenu>
        <Link to="/">Inicio</Link>
        <Link to="/history">Historial</Link>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
