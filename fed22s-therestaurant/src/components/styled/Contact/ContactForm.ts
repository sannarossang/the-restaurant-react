import styled from "styled-components";
import { DeviceQuery } from "../../../styles/breakpoints";
import { Input, InputWrapper, ValidationError } from "../Booking/BookingForm/GuestForm";
import { DefaultButton } from "../Buttons";

export const ContactTitle = styled.h1`
  margin: 0;
  font-size: 1.2rem;
  padding-bottom: 10px;
  text-align: left;
`;

export const ContactFormWrapper = styled.form`
  width: 60%;
  height: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${DeviceQuery.DESKTOP} {
    width: 30%;
  }
`;

export const InputContactForm = styled(Input)`
  @media ${DeviceQuery.DESKTOP} {
    width: 100%;
  }
`;

export const InputContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 20px;

  @media ${DeviceQuery.DESKTOP} {
    justify-content: space-between;
    margin: 0;
  }
`;

export const ContactButton = styled(DefaultButton)`
  @media ${DeviceQuery.DESKTOP} {
  }
`;

export const ValidationErrorContactForm = styled(ValidationError)`
  @media ${DeviceQuery.DESKTOP} {
  }
`;
