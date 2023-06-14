import styled from "styled-components";
import { DeviceQuery } from "../../styles/breakpoints";

export const AmountInputWrapper = styled.div`
  /* width: 100vw;
  height: 100%;
  display: flex;
  /* flex-direction: column;
  justify-content: center;
  align-items: center; */
  border: 2px solid red;
  height: min-content;

  @media ${DeviceQuery.DESKTOP} {
  }
`;

export const AmountForm = styled.form`
  .css-1jqq78o-placeholder {
    width: 300px;
    font-size: 12px;
  }

  .css-1jj59y3-MenuList2 {
    font-size: 12px;
    max-height: 600px;
    border-radius: 0px;
    border: 2px #ff1c6f;
  }

  .css-d7l1ni-option {
    //HOVRAD GÄST
    background-color: transparent;
    border: 2px solid #ff1c6f;
    padding: 6px 10px;
    font-size: 12px;
  }

  .css-10wo9uf-option {
    font-size: 12px;
  }

  .css-1nmdiq5-menu {
    position: initial;
    box-shadow: 1px;
    border-radius: 0px;
  }

  @media ${DeviceQuery.DESKTOP} {
  }
`;

export const AmountSmallHeading = styled.form`
  font-weight: bold;
  font-size: 13px;
  padding-bottom: 5px;

  @media ${DeviceQuery.DESKTOP} {
  }
`;
