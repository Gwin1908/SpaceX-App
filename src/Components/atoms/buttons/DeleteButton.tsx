import { styled } from "styled-components";

export const DeleteButtonEl = styled.button`
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
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

const Delete = styled.img``;

type ButtonTypes = {
  onClick: () => void;
}; 


export const DeleteButton = ({ onClick }: ButtonTypes) => {
  return (
    <DeleteButtonEl onClick={onClick}>
      <Delete src="Delete.svg" alt="Like" />
    </DeleteButtonEl>
  );
};
