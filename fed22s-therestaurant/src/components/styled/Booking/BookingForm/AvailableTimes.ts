import styled from "styled-components";
import { DeviceQuery } from "../../../../styles/breakpoints";
import { Color } from "../../../../styles/colors";

export const Wrapper = styled.div`
  width: 100vw;
  height: min-content;
  display: flex;
  align-items: center;
`;

export const SeatingTimesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SeatingTimeSlot = styled.button`
  @media ${DeviceQuery.DESKTOP} {
    width: 50%;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 60px;
  border: 2px solid black;
  background-color: transparent;
  margin: 10px;
  font-size: 1rem;
  color: black;
  cursor: pointer;

  &:enabled:hover {
    background-color: #ff1c6f;
    border: none;
    color: white;
  }

  &:disabled {
    cursor: default;
    background-color: ${Color.DISABLED};
    border: none;
    color: #363636;
  }
`;

export const SeatingTime = styled.span`
  margin-left: 10px;
`;

export const BookSeating = styled.span`
  margin-right: 20px;
  font-weight: bold;
`;
