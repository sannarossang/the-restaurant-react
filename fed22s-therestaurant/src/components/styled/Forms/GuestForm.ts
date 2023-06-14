import styled from "styled-components";
import { DeviceQuery } from "../../../styles/breakpoints";

export const GuestFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SmallContactHeading = styled.p`
  font-weight: bold;
  @media ${DeviceQuery.DESKTOP} {
    align-items: center;
    justify-content: center;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 100%;
  font-size: 20px;

  @media ${DeviceQuery.DESKTOP} {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
`;

// export const StyledGuestForm = styled.form`
//   /* display: flex;
//   /* width: 80vw; */
//   /* flex-direction: column;
//   align-items: center; */ */

//   /* button {
//     width: 50px;
//   } /* ska vi göra en återanvändningsbar knapp för både detta och contact form?
//   eller vill vi ha såpass olika styling på dom?
//   */
// `;

export const GuestInput = styled.input`
  border-radius: 0px;
  height: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: start;
  width: 100%;

  &::placeholder {
    position: absolute;
    left: 5px;
    top: 5px;
    padding: 5px;
    font-size: 10px;
  }

  @media ${DeviceQuery.DESKTOP} {
    width: 47%;
    height: 80px;
    column-gap: 20px;
    margin: 5px;
  }
`;

export const Input = styled.input.attrs({
  type: "text",
})`
  border-radius: 0px;
  height: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: start;
  width: 100%;

  &::placeholder {
    position: absolute;
    left: 5px;
    top: 5px;
    padding: 5px;
    font-size: 10px;
  }

  &:focus {
    border: 2px solid pink;
    background-color: pink;
  }

  &:hover {
    background-color: yellow;
  }

  &:visited {
    border-radius: 2px solid black;
  }

  &:active {
    border-radius: 2px solid blue;
  }

  @media ${DeviceQuery.DESKTOP} {
    width: 47%;
    height: 80px;
    column-gap: 20px;
    margin: 5px;
  }
`;

export const MessageInput = styled.input`
  width: 100%;
  height: 80px;
  border-radius: 0px;

  &::placeholder {
    position: absolute;
    width: 50%;
    left: 5px;
    top: 5px;
    padding: 5px;
    font-size: 10px;
  }

  @media ${DeviceQuery.DESKTOP} {
    /* width: 48%;
    height: 80px; */
    font-size: 15px;
    margin-top: 5px;
  }
`;

export const NextButton = styled.button`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  border: 2px solid black;
  background-color: transparent;
  font-size: 1rem;
  margin-top: 20px;
  color: black;
  cursor: pointer;
  &:enabled:hover {
    background-color: #ff1c6f;
    border: none;
    color: white;
  }
  &:disabled {
    cursor: default;
    background-color: lightgrey;
    border: none;
  }

  @media ${DeviceQuery.DESKTOP} {
    width: 100%;
  }
`;

export const ValidationError = styled.p`
  font-size: 10px;
  color: red;
  @media ${DeviceQuery.DESKTOP} {
  }
`;
