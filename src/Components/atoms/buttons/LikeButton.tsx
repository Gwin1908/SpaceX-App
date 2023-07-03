import { styled } from "styled-components";

export const LikeButtonEl = styled.button`
  border: none;
  display: flex;
  width: 53px;
  height: 53px;
  justify-content: center;
  align-items: center;
  background: #ececec;
  border: transparent;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background: #dd377d;
  }
`;

const Like = styled.img`
  &:active {
    filter: invert(1);
  }
`;

type ButtonTypes = {
  onClick?: () => void;
};

export const LikeButton = ({ onClick }: ButtonTypes) => {
  return (
    <LikeButtonEl onClick={onClick}>
      <Like src="heart.svg" alt="Like" />
    </LikeButtonEl>
  );
};
