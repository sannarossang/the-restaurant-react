import styled from "styled-components";
import { DeviceQuery } from "../../../styles/breakpoints";
import {
  ConfirmationDetails,
  ConfirmationReference,
  ConfirmationText,
  ConfirmationWrapper,
} from "../Booking/BookingConfirmation";
import { DefaultButton } from "../Buttons";

interface ReservationProps {
  weight?: string;
  size?: string;
  padding?: string;
}

export const ReservationWrapper = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  align-items: center;
  padding: 30px;

  @media ${DeviceQuery.DESKTOP} {
  }
`;

export const ReservationHeader = styled.h1`
  font-size: 1.4em;
  @media ${DeviceQuery.DESKTOP} {
    font-size: 1.8em;
  }
`;

export const ReservationReference = styled(ConfirmationReference)`
  @media ${DeviceQuery.DESKTOP} {
  }
`;

export const ReservationDetails = styled(ConfirmationDetails)`
  @media ${DeviceQuery.DESKTOP} {
  }
`;

export const ReservationText = styled.p<ReservationProps>`
  font-size: ${(props: ReservationProps) => props.size || "17px"};
  font-weight: ${(props: ReservationProps) => props.weight};
  @media ${DeviceQuery.DESKTOP} {
    font-size: ${(props: ReservationProps) => props.size || "12px"};
  }
`;

export const DeletedWrapper = styled(ConfirmationWrapper)`
  @media ${DeviceQuery.DESKTOP} {
  }
`;

export const DeletedText = styled.h1<ReservationProps>`
  font-size: ${(props: ReservationProps) => props.size || "20px"};
  font-weight: ${(props: ReservationProps) => props.weight};
  @media ${DeviceQuery.DESKTOP} {
  }
`;

export const DeleteButton = styled(DefaultButton)`
  width: 70%;
  @media ${DeviceQuery.DESKTOP} {
    width: 50%;
  }
`;
