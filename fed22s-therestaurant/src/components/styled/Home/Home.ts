import styled from "styled-components";
import { DeviceQuery } from "../../../styles/breakpoints";
import { Color } from "../../../styles/colors";

export const HomeWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${DeviceQuery.DESKTOP} {
  }
`;

export const RestaurantTitle = styled.h1`
  font-size: 5rem;
  text-shadow: 1px 3px ${Color.PRIMARY_LIGHT};
  margin: 0;
  color: ${Color.TRANSPARENT_PINK};

  @media ${DeviceQuery.DESKTOP} {
    font-size: 10rem;
  }
`;

export const BookButton = styled.button`
  width: 200px;
  padding: 0.7rem;
  background-color: transparent;
  border: 1px solid white;
  font-size: 1.2rem;
  color: ${Color.PRIMARY_LIGHT};
  background-color: rgba(146, 146, 146, 0.5);
  border: 1px solid ${Color.PRIMARY_LIGHT};

  &:hover {
    cursor: pointer;
    box-shadow: -2px 2px white;
  }
`;
