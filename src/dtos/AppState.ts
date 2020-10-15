import IDev from "./IDev";

export interface AppState {
  favorites: {
    favoriteDevs: IDev[];
  };
  searches: {
    searchedDevs: IDev[];
  };
  lastSearch: {
    lastSearch: IDev[];
  };
}
