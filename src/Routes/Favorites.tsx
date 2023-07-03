import React from "react";
import { FavoritesSection } from "../Components/templates/FavoritesSection";
import { Header } from "../Components/organisms/Header";
import { TitleContainer } from "../Components/molecules/TitleContainer";
import FavoritesCards from "../Components/organisms/FavoritesCards";

function Favorites() {
  return (
    <FavoritesSection>
      <Header />
      <TitleContainer margin="140px auto" fontSize="48px" text="Favorites" />
      <FavoritesCards />
    </FavoritesSection>
  );
}

export default Favorites;
