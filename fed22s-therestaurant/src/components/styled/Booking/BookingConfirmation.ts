import styled from "styled-components";
import { DeviceQuery } from "../../../styles/breakpoints";

interface ConfirmationProps {
  weight?: string;
  size?: string;
  padding?: string;
}

export const ConfirmationWrapper = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  padding: 30px;
  width: 70%;

  @media ${DeviceQuery.DESKTOP} {
  }
`;

export const ConfirmationTextBox = styled.div`
  margin: 0px;
  padding-bottom: 30px;

  @media ${DeviceQuery.DESKTOP} {
  }
`;

export const ConfirmationDetails = styled.div`
  background-color: #fcf3e8;
  width: 70%;

  @media ${DeviceQuery.DESKTOP} {
    width: 70%;
  }
`;

export const ConfirmationReference = styled.div`
  margin: 20px;
  border-bottom: 1px solid;
  @media ${DeviceQuery.DESKTOP} {
  }
`;

export const ConfirmationGuestBox = styled.div`
  margin: 20px;
  border-bottom: 1px solid;
  @media ${DeviceQuery.DESKTOP} {
  }
`;

export const ConfirmationText = styled.p<ConfirmationProps>`
  font-size: ${(props: ConfirmationProps) => props.size || "12px"};
  font-weight: ${(props: ConfirmationProps) => props.weight};
  @media ${DeviceQuery.DESKTOP} {
  }
`;
