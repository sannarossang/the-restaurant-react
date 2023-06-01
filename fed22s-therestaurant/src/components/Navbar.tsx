import { NavItem, StyledNavbar } from "./styled/Navbar";

export const Navbar = () => {
  return (
    <>
      <StyledNavbar>
        <NavItem>Hem</NavItem>
        <NavItem>Meny</NavItem>
        <NavItem>Kontakt</NavItem>
        <NavItem>Boka bord</NavItem>
      </StyledNavbar>
    </>
  );
};
