import { css, styled } from "styled-components";

export const Slider = styled.button`
  background: transparent;
  border: 1px solid#fff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    props.active === true
      ? css`
          background-color: white;
        `
      : css`
          background-color: transparent;
        `}
`;
