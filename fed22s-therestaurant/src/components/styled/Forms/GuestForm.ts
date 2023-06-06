import styled from "styled-components";

export const GuestFormWrapper = styled.div``;

export const StyledGuestForm = styled.form`
  display: flex;
  width: 80vw;
  flex-direction: column;
  align-items: center;

  button {
    width: 50px;
  } /* ska vi göra en återanvändningsbar knapp för både detta och contact form? 
  eller vill vi ha såpass olika styling på dom? 
  */
`;

export const GuestInput = styled.input`
  width: 100%;
  height: 10vh;
`;
