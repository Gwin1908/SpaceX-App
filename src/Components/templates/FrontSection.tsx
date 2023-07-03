import { styled } from "styled-components";

export const FrontSection = styled.section<{ $background?: string }>`
  height: 959px;
  width: 100%;
  background: ${(props) => props.$background || url("back1.png")};
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  transition-duration: 500ms;
  transition-property: background;
  &:after {
    content: "";
    height: 959px;
    position: absolute;
    display: block;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;
