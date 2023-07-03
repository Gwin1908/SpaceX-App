import { styled } from "styled-components";

const Container = styled.div`
  position: relative;
  z-index: 1;
`;

const TitleEl = styled.h1<{ $fontsize?: string }>`
  margin: 0;
  color: #fff;
  text-align: center;
  font-size: ${(props) => props.$fontsize || "36px"};
  font-family: Syne;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
`;

type TitleProps = {
  text: string;
  fontSize: string;
};

export const Title = ({ text, fontSize }: TitleProps) => {
  return <TitleEl $fontsize={fontSize}>{text}</TitleEl>;
};
