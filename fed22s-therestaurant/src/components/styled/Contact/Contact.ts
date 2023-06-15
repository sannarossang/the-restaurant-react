import styled from "styled-components";
import { DeviceQuery } from "../../../styles/breakpoints";

export const ContactWrapper = styled.div`
  width: 100vw;
  height: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${DeviceQuery.DESKTOP} {
    height: 15vw;
  }
`;
