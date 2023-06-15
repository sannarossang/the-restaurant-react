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
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  z-index: 99;

  @media ${DeviceQuery.DESKTOP} {
    width: 60%;
    height: 95vh;
    border: 2px solid black;
    overflow-y: scroll;
  }
`;

export const ModalContent = styled.div`
  margin-top: 10%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;

  @media ${DeviceQuery.DESKTOP} {
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 1rem;
`;

export const ModalNavWrapper = styled.div`
  width: 100%;
  background-color: lightgrey;
  height: 10%;
  display: grid;
  grid-template-columns: auto auto;
  justify-items: end;
`;

export const ExitButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.7rem;
  margin-right: 2%;

  a {
    color: inherit;
    text-decoration: inherit;
  }
`;
