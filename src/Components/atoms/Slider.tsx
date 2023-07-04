import { css, styled } from "styled-components";

export const Slider = styled.button<{ active: boolean }>`
  background: transparent;
  border: 1px solid #fff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    props.active === true
      ? css`
          // background-color: white;
          &::after {
            content: "";
            position: absolute;
            top: 5px;
            left: 5px;
            background-color: #fff;
            height: 12px;
            width: 12px;
            border-radius: 50%;
          }
        `
      : css`
          background-color: transparent;
        `}
`;
