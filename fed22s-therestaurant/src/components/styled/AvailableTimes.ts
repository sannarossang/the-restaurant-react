import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const SeatingTimesWrapper = styled.div`
  width: 90%;
`;

export const SeatingTimeSlot = styled.div`
  height: 30px;
  background-color: lightblue;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const SeatingTime = styled.span`
  margin-left: 10px;
`;

export const BookSeating = styled.span`
  margin-right: 20px;
  font-weight: bold;
`;
