import { styled } from "styled-components";

export const GDPRcheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  display: inline;
`;

export const GDPRWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InfoText = styled.span`
  display: block;
`;

export const TermsAndConditions = styled.span`
  display: block;
`;

export const ConfirmationText = styled.span`
  display: inline;
`;

export const ConfirmBookingButton = styled.button`
  margin-top: 20px;
  width: 100px;
  padding: 0.4rem 0.4rem;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: lightblue;
  }

  &:disabled {
    background-color: lightgrey;
  }
`;
