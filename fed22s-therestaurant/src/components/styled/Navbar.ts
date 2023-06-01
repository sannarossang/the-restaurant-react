import styled from "styled-components";

export const NavWrapper = styled.div`
  width: 100vw;
  color: white;
  background-color: black;
  height: 8vh;
  margin: 0;
  padding: 0;
`;

export const Nav = styled.ul`
  display: inline-flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: white;

    &:hover {
      color: pink;
    }
  }
`;

export const NavItem = styled.li`
  display: inline;
`;
