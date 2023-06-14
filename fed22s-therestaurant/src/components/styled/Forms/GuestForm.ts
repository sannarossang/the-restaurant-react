import styled from "styled-components";
import { DeviceQuery } from "../../../styles/breakpoints";

export const GuestFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 100%;
  /* height: 15vh;
  background-color: yellow; */
  font-size: 20px;

  @media ${DeviceQuery.DESKTOP} {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
`;

export const MessageInput = styled.input`
  width: 95%;
  height: 80px;
  border-radius: 0px;
  &::placeholder {
    color: pink;
  }
`;

export const StyledGuestForm = styled.form`
  display: flex;
  /* width: 80vw; */
  flex-direction: column;
  align-items: center;

  button {
    width: 50px;
  } /* ska vi göra en återanvändningsbar knapp för både detta och contact form? 
  eller vill vi ha såpass olika styling på dom? 
  */
`;

export const GuestInput = styled.input`
  border-radius: 0px;
  height: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: start;

  &::placeholder {
    color: pink;
  }

  @media ${DeviceQuery.DESKTOP} {
    width: 48%;
    height: 80px;
    color: blue;
  }
`;
