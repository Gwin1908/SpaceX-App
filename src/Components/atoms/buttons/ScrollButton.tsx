import { type } from "@testing-library/user-event/dist/type";
import { styled } from "styled-components";

export const ButtonEl = styled.button`
  border: none;
  background: none;
  // position: absolute;
  color: #fff;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 32px;
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
  justify-content: center;
`;

const Icon = styled.img`
  position: absolute;
`;

type ButtonProps = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export const ScrollButton = ({ text, onClick }: ButtonProps) => {
  return (
    <Container>
      <ButtonEl onClick={onClick}>
        {text} <Icon src="Arrow - Down.svg" alt="arrow" />
      </ButtonEl>
    </Container>
  );
};
