import { styled } from "styled-components";

const Button = styled.button`
  border: none;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
`;

const ArrowRigt = styled.img`
  padding: 10px;
`;

export const ButtonRight: React.FC<{onClick?: React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
  return (
    <Button>
      <ArrowRigt src="Arrow - Right 2.svg" onClick={onClick} />
    </Button>
  );
};
