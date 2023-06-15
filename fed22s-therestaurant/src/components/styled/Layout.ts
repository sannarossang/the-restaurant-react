import styled from "styled-components";
import img from "../../assets/background.png";

interface ContentWrapperProps {
  filter?: string;
}

export const ContentWrapper = styled.div<ContentWrapperProps>`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "main"
    "footer";
  position: relative;

  header {
    position: relative;
  }

  &.home {
      &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${img});
      background-position: center;
      background-size: cover;
      filter: ${(props: ContentWrapperProps) => props.filter};
      opacity: 0.9;
    }
  }
`;
