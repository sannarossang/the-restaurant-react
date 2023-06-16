import styled from "styled-components";

export const MySpinner = styled.div`
  border: 16px solid pink;
  border-top: 16px deeppink solid;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
