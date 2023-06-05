import { Link } from "react-router-dom";
import { Nav, NavItem, NavWrapper } from "./styled/Navbar";

export const Navbar = () => {
  return (
    <>
      <NavWrapper>
        <Nav>
          <NavItem>
            <Link to="/">Hem</Link>
          </NavItem>
          <NavItem>Meny</NavItem>
          <NavItem>
            <Link to="/contact">Kontakta oss</Link>
          </NavItem>
          <NavItem>
            <Link to="/booking">Boka bord</Link>
          </NavItem>
        </Nav>
      </NavWrapper>
    </>
  );
};
