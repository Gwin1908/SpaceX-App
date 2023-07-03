import { styled } from "styled-components";
import { Title } from "../atoms/Title";

const Container = styled.div<{ $margin?: string }>`
  position: relative;
  z-index: 1;
  margin: ${(props) => props.$margin || "0"};
`;

type TitleContainerProps = {
  text: string;
  fontSize: string;
  margin: string;
};

export const TitleContainer = ({ fontSize, text, margin }: TitleContainerProps) => {
  return (
    <Container $margin={margin}>
      <Title fontSize={fontSize} text={text} />
    </Container>
  );
};
