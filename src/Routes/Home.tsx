import React, { useRef, useState } from "react";
import { ScrollButton } from "../Components/atoms/buttons/ScrollButton";
import { Header } from "../Components/organisms/Header";
import { FrontSection } from "../Components/templates/FrontSection";
import { Cards } from "../Components/organisms/Cards";
import { TitleContainer } from "../Components/molecules/TitleContainer";
import { SliderContainer } from "../Components/molecules/SliderContainer";
import { Slider } from "../Components/atoms/Slider";


function Home() {
  const cardsRef = useRef<null | HTMLDivElement>(null);
  const [slideNumber, setSlideNumber] = useState(1);

  return (
    <main>
      <FrontSection $background={`url(back${slideNumber}.png)`}>
        <SliderContainer>
          <Slider
            onClick={() => setSlideNumber(1)}
            active={slideNumber === 1}
          />
          <Slider
            onClick={() => setSlideNumber(2)}
            active={slideNumber === 2}
          />
          <Slider
            onClick={() => setSlideNumber(3)}
            active={slideNumber === 3}
          />
        </SliderContainer>
        <Header />
        <TitleContainer
          margin="232px auto 0 "
          fontSize="48px"
          text="The space is waiting for"
        />
        <TitleContainer margin="0 auto 129px " fontSize="310px" text="You" />
        <ScrollButton
          text="Explore tours"
          onClick={() =>
            cardsRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
      </FrontSection>
      <Cards ref={cardsRef} />
    </main>
  );
}

export default Home;
