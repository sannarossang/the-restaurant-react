import { styled } from "styled-components";

export const AdminWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const CreateBookingBtn = styled.button`
  margin-top: 5px;
  padding: 0.5rem;
  background-color: pink;
  border: none;
  border-radius: 5px;
  border: 1px solid transparent;

  &:hover {
    background-color: hotpink;
    border: 1px solid black;
  }
`;
