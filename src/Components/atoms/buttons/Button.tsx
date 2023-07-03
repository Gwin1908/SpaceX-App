import { type } from "@testing-library/user-event/dist/type";
import { styled } from "styled-components";

export const ButtonEl = styled.button`
  border: none;
  background: none;
  color: #556b84;
  text-align: center;
  font-size: 24px;
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
`;

type ButtonProps = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <Container>
      <ButtonEl onClick={onClick}>{text}</ButtonEl>
    </Container>
  );
};
