import { styled } from "styled-components";
import { Color } from "../../../styles/colors";
import { BookButton } from "../Home/Home";
import { DefaultButton } from "../Buttons";
import { DeviceQuery } from "../../../styles/breakpoints";
interface InfoTextProps {
  weight?: string;
}

interface DetailProps {
  weight?: string;
}

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media ${DeviceQuery.DESKTOP} {
    gap: 50px;
  }
`;

export const BookingDetailsWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${Color.DISABLED};
  display: flex;
  padding-bottom: 20px;
`;

export const BookingDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  gap: 20%;
`;

export const Detail = styled.span<DetailProps>`
  margin: 0;
  font-weight: ${(props: DetailProps) => props.weight};
`;

export const GDPRcheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  display: inline;
`;

export const GDPRWrapper = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  flex-direction: column;
  gap: 10%;

  @media ${DeviceQuery.DESKTOP} {
    gap: 30px;
  }
`;

export const ConfirmationWrapper = styled.div`
  width: 90%;
`;

export const InfoText = styled.span<InfoTextProps>`
  font-weight: ${(props: InfoTextProps) => props.weight};
  display: block;
`;

export const TermsAndConditions = styled.span`
  display: block;
  border: 1px solid grey;
  box-sizing: border-box;
  padding: 5%;
`;

export const ConfirmationText = styled.span`
  display: inline;
`;

export const ConfirmBookingButton = styled(DefaultButton)`
  width: 90%;

  &:hover {
    background-color: lightblue;
  }

  &:disabled {
    background-color: lightgrey;
  }
`;
