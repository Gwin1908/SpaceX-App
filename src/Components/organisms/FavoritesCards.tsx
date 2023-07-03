import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import { Button } from "../atoms/buttons/Button";
import { BuyButton } from "../atoms/buttons/BuyButton";
import { DeleteButton } from "../atoms/buttons/DeleteButton";
import { FavoritesAtom } from "../../Recoil/atom/FavoritesAtom";

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
  margin: 20px 0;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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

function FavoritesCards() {
  const favoritesList = useRecoilValue(FavoritesAtom);
  const [_, setFavorites] = useRecoilState(FavoritesAtom);

  const [allCards, setAllCards] = useState([] as any);

  useEffect(() => {
    setAllCards(favoritesList);
  }, [favoritesList]);

  const trimStr = (str: string) => {
    if (str.length > 80) return str.substring(0, 80) + "...";
    return str;
  };

  const updateFavorites = (arr: any[]) => {
    const filteredCards = arr.filter(
      (item: CardProps) => item.isFavorited === true
    );
    setFavorites(filteredCards);
  };

  const deleteFavorite = (id: string) => {
    const newArr = JSON.parse(JSON.stringify(allCards));
    newArr.forEach((item: CardProps) => {
      if (item.id === id) {
        item.isFavorited = false;
      }
      return item;
    });
    console.log(newArr);
    updateFavorites(newArr);
  };

  return (
    <Wrapper>
      <CardsSection>
        <CardsHeader>
          <Button text="Clear all" onClick={() => setFavorites([])} />
        </CardsHeader>
        <CardsContainer>
          {!!allCards &&
            allCards.map(({ id, description, name, image }: CardProps) => (
              <Card key={id}>
                <CardImg src={`${image}`} />
                <CardTitle>{name}</CardTitle>
                <CardText>{trimStr(description)}</CardText>
                <CardButtons>
                  <BuyButton>Buy</BuyButton>
                  <DeleteButton
                    onClick={() => {
                      deleteFavorite(id);
                    }}
                  />
                </CardButtons>
              </Card>
            ))}
        </CardsContainer>
      </CardsSection>
    </Wrapper>
  );
}

export default FavoritesCards;
