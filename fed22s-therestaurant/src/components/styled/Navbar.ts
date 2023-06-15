import styled from "styled-components";
import { Color } from "../../styles/colors";
import { DeviceQuery } from "../../styles/breakpoints";

export const NavWrapper = styled.div`
  width: 100vw;
  color: ${Color.PRIMARY_DARK};
  background-color: rgba(146, 146, 146, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;
  margin: 0;
  padding: 0;
`;

export const Nav = styled.ul`
  width: 80%;
  margin-top: 10px;
  padding: 0;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 0.8rem;
  gap: 5%;
  color: ${Color.PRIMARY_LIGHT};

  a {
    text-decoration: none;
    color: ${Color.PRIMARY_LIGHT};

    &:hover {
      text-shadow: 1px 1px ${Color.TRANSPARENT_PINK};
    }
  }

  @media ${DeviceQuery.DESKTOP} {
    margin-top: 1%;
    justify-content: space-between;
    color: ${Color.PRIMARY_LIGHT};
    gap: 20px;
  }
`;

export const NavItem = styled.li`
  display: inline;
`;
