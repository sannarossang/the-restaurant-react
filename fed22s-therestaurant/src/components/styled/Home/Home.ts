import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RestaurantTitle = styled.h1`
  margin: 0;
  font-size: 5rem;
`;

export const BookButton = styled.button`
  width: 200px;
  padding: 0.7rem;
  border-radius: 10px;
  border-style: none;
  font-size: 1rem;

  &:hover {
    border: 1px solid black;
  }
`;

export const StyledLink = styled(Link)``;
