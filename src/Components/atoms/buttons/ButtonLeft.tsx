import { styled } from "styled-components";

const Button = styled.button`
  border: none;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
`;

const ArrowLeft = styled.img`
  padding: 10px;
  transform: rotate(180deg);
`;

export const ButtonLeft: React.FC<{
  onClick?: React.MouseEventHandler<HTMLElement>;
}> = ({onClick}) => {
  return (
    <Button>
      <ArrowLeft src="Arrow - Right 2.svg" onClick={onClick} />
    </Button>
  );
};