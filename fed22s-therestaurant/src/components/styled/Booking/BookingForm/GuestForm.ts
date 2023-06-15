import styled from "styled-components";
import { DeviceQuery } from "../../../../styles/breakpoints";

export const GuestFormWrapper = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    width: 80%;
    @media ${DeviceQuery.DESKTOP} {
      width: 90%;
    }
  }
`;

export const SmallContactHeading = styled.p`
  font-weight: bold;
  @media ${DeviceQuery.DESKTOP} {
    align-items: center;
    justify-content: center;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 100%;
  font-size: 20px;

  @media ${DeviceQuery.DESKTOP} {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0;
  }
`;

export const InputContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;

  @media ${DeviceQuery.DESKTOP} {
    width: 48%;
    margin: 0;
    padding: 0;
  }
`;

export const Input = styled.input.attrs({
  type: "text",
})`
  border-radius: 0px;
  height: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: start;
  width: 100%;
  padding-top: 12%;
  padding-bottom: 12%;
  padding-left: 5%;
  font-size: 1.3rem;
  box-sizing: border-box;

  &::placeholder {
    position: absolute;
    left: 5px;
    top: 5px;
    padding: 5px;
    font-size: 10px;
  }

  &:hover {
    border: 2px solid #ff1c6f;
  }

  &:focus {
    border: 2px solid #ff1c6f;
    border-radius: 0px;
  }

  &:visited {
    border-radius: 2px solid black;
  }

  &:active {
    border: 2px solid pink;
    border-radius: 0px;
  }

  @media ${DeviceQuery.DESKTOP} {
    font-size: 1rem;
    height: 80px;
    column-gap: 20px;
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 5%;
  }
`;

export const MessageInput = styled(Input)`
  font-size: 1rem;

  @media ${DeviceQuery.DESKTOP} {
    width: 100%;
    margin-top: 5px;
  }
`;

export const NextButton = styled.button`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  border: 2px solid black;
  background-color: transparent;
  font-size: 1rem;
  margin-top: 20px;
  color: black;
  cursor: pointer;
  &:enabled:hover {
    background-color: #ff1c6f;
    border: none;
    color: white;
  }
  &:disabled {
    cursor: default;
    background-color: lightgrey;
    border: none;
  }

  @media ${DeviceQuery.DESKTOP} {
    width: 100%;
  }
`;

export const ValidationError = styled.p`
  font-size: 10px;
  color: red;
  @media ${DeviceQuery.DESKTOP} {
  }
`;
