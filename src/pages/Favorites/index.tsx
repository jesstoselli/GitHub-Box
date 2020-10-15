import React from "react";
import { useSelector } from "react-redux";

// Interfaces
import { AppState } from "../../dtos/AppState";

// Components
import TitleHeader from "../../components/TitleHeader";
import DevCard from "../../components/DevCard";

import { Container, Content } from "./styles";
import IDev from "../../dtos/IDev";

const Favorites: React.FC = () => {
  const favoriteDevs = useSelector<AppState, IDev[]>(
    (state) => state.favorites.favoriteDevs
  );

  return (
    <Container>
      <TitleHeader title='Seus devs favoritos' goBack={true} />

      <Content>
        {favoriteDevs &&
          favoriteDevs.map((favoriteDev) => (
            <DevCard key={favoriteDev.id} devData={favoriteDev} />
          ))}
      </Content>
    </Container>
  );
};

export default Favorites;
