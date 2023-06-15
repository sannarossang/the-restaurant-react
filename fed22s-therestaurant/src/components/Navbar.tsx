import { Link } from "react-router-dom";
import { Nav, NavItem, NavWrapper } from "./styled/Navbar";

export const Navbar = () => {
  return (
    <>
      <NavWrapper>
        <Nav>
          <NavItem>
            <Link to="/">HEM</Link>
          </NavItem>

          <NavItem>
            <Link to=""> MENY</Link>
          </NavItem>

          <NavItem>
            <Link to="/booking"> BOKA BORD</Link>
          </NavItem>
          <NavItem>
            <Link to="/contact">KONTAKTA OSS</Link>
          </NavItem>
        </Nav>
      </NavWrapper>
    </>
  );
};
