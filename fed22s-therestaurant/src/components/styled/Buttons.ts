import styled from "styled-components";

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 2rem;
`;

export const DefaultButton = styled.button`
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
`;
