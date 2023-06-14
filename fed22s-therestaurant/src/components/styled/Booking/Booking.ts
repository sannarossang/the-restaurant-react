import { styled } from "styled-components";
import { DeviceQuery } from "../../../styles/breakpoints";

export const BookingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookingModal = styled.div`
  margin-top: -8vh;
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;

  @media ${DeviceQuery.DESKTOP} {
    width: 70%;
    height: 90vh;
    border: 2px solid black;
  }
`;
