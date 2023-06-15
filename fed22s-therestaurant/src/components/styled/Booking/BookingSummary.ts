import { styled } from "styled-components";
import { Color } from "../../../styles/colors";
interface InfoTextProps {
  weight?: string;
}

interface DetailProps {
  weight?: string;
}

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
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
  display: flex;
  flex-direction: column;
  /* gap: 20px; */
`;

export const InfoText = styled.span<InfoTextProps>`
  font-weight: ${(props: InfoTextProps) => props.weight};
  display: block;
  /* margin: 0;
  padding: 0; */
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
