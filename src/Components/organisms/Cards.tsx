import React, { useEffect, useState, forwardRef } from "react";
import { styled } from "styled-components";
import { gql, useQuery } from "@apollo/client";
import { BuyButton } from "../atoms/buttons/BuyButton";
import { LikeButton } from "../atoms/buttons/LikeButton";
import { ButtonRight } from "../atoms/buttons/ButtonRight";
import { ButtonLeft } from "../atoms/buttons/ButtonLeft";
import { useRecoilState } from "recoil";
import { FavoritesAtom } from "../../Recoil/atom/FavoritesAtom";
import { CardsSliderContainer } from "../molecules/CardsSliderContainer";
import { Slider } from "../atoms/Slider";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardsSection = styled.div`
  height: 740px;
  margin: 96px 80px;
  position: relative;
`;

const CardsHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderTitle = styled.h2`
  color: #1e1e1e;
  text-align: center;
  font-size: 32px;
  font-family: Syne;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 411px;
  height: 572px;
  border: 1px solid #d3eaff;
`;

const CardImg = styled.img`
  width: 411px;
  height: 296px;
`;

const CardTitle = styled.h3`
  color: #1e1e1e;
  text-align: center;
  font-size: 24px;
  font-family: Syne;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;

const CardText = styled.p`
  color: #556b84;
  text-align: center;
  font-size: 24px;
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const CardButtons = styled.div`
  width: 347px;
  height: 53px;
  display: flex;
  gap: 10px;
`;

type CardProps = {
  id: string;
  name: string;
  description: string;
  image: string;
  isFavorited: boolean;
};

export const Cards = forwardRef<HTMLDivElement>((props, ref) => {
  const [allCards, setAllCards] = useState([] as any);
  const [shownCards, setShownCards] = useState([] as any);
  const [firstCard, setFirstCard] = useState(0);

  const [_, setFavorites] = useRecoilState(FavoritesAtom);

  const GET_ROCKETS = gql`
    query RocketsQuery {
      rockets {
        id
        description
        name
      }
    }
  `;

  const RocketsData = useQuery(GET_ROCKETS);

  const addFavoritesProp = (arr: any[]) => {
    const newArr = JSON.parse(JSON.stringify(arr));
    newArr.map((item: CardProps) => {
      item.isFavorited = false;
      return item;
    });
    return newArr;
  };

  const addImagesToArr = (arr: any) => {
    const newArr = JSON.parse(JSON.stringify(arr));
    let counter = 1;
    newArr.map((item: CardProps) => {
      if (counter <= 3) {
        item.image = `${counter}.png`;
        counter++;
      } else if (counter > 3) {
        counter = 1;
        item.image = `${counter}.png`;
      }
      return item;
    });
    console.log(newArr);
    return newArr;
  };

  const trimStr = (str: string) => {
    if (str.length > 80) return str.substring(0, 80) + "...";
    return str;
  };

  const carouselNext = () => {
    if (firstCard > 0) {
      setFirstCard(firstCard - 1);
    }
  };

  const carouselPrevious = () => {
    if (shownCards.length > firstCard + 2) {
      setFirstCard(firstCard + 1);
    }
  };

  const setListedCards = (arr: any[]) => {
    const cardsArr: any[] = [...arr];
    cardsArr.slice(firstCard, firstCard + 3);
    if (firstCard + 2 < cardsArr.length) {
      const newArr: any[] = cardsArr.slice(firstCard, firstCard + 3);
      setShownCards(newArr);
    }
  };

  const changeFavorite = (id: string) => {
    const newArr = [...allCards];
    newArr.forEach((item: CardProps) => {
      if (item.id === id) {
        item.isFavorited = !item.isFavorited;
      }
      return item;
    });
    console.log(newArr);
  };

  const updateFavorites = () => {
    const filteredCards = allCards.filter(
      (item: CardProps) => item.isFavorited === true
    );
    setFavorites(filteredCards);
  };

  useEffect(() => {
    RocketsData.data &&
      setAllCards(addImagesToArr(addFavoritesProp(RocketsData.data.rockets)));
  }, [RocketsData.data]);

  useEffect(() => {
    !!allCards && setListedCards(allCards);
  }, [allCards, firstCard]);

  return !!RocketsData.data && RocketsData.data ? (
    <Wrapper ref={ref}>
      <CardsSection>
        <CardsHeader>
          <HeaderTitle>Popular tours</HeaderTitle>
          <ButtonContainer>
            <ButtonRight onClick={() => carouselNext()} />
            <ButtonLeft onClick={() => carouselPrevious()} />
          </ButtonContainer>
        </CardsHeader>
        <CardsContainer>
          {shownCards.map(({ id, description, name, image }: CardProps) => (
            <Card key={id}>
              <CardImg src={`${image}`} />
              <CardTitle>{name}</CardTitle>
              <CardText>{trimStr(description)}</CardText>
              <CardButtons>
                <BuyButton>Buy</BuyButton>
                <LikeButton
                  onClick={() => {
                    changeFavorite(id);
                    updateFavorites();
                  }}
                />
              </CardButtons>
            </Card>
          ))}
        </CardsContainer>
        <CardsSliderContainer>
          <Slider onClick={() => setFirstCard(0)} active={firstCard === 0} />
          <Slider
            onClick={() => console.log("limited amount of cards")}
            active={firstCard === 3}
          />
          <Slider onClick={() => setFirstCard(1)} active={firstCard === 1} />
        </CardsSliderContainer>
      </CardsSection>
    </Wrapper>
  ) : (
    <h2>Loading</h2>
  );
});
