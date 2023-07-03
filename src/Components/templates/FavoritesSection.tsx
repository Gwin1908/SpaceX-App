import { styled } from "styled-components";

export const FavoritesSection = styled.section`
  height: 440px;
  background: url("image 2.png") no-repeat;
  background-size: cover;
  position: relative;
  &:after {
    content: "";
    height: 440px;
    position: absolute;
    display: block;
    inset: 0;
    opacity: 0.6399999856948853;
    background: #1e1e1e;
  }
`;


