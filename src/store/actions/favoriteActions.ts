import IDev from "../../dtos/IDev";

export type ActionFavorite = {
  type: "ADD_FAVORITE" | "REMOVE_FAVORITE";
  payload: IDev;
};

export const addFavoriteDev = (dev: IDev): ActionFavorite => ({
  type: "ADD_FAVORITE",
  payload: dev,
});

export const removeFavoriteDev = (dev: IDev): ActionFavorite => ({
  type: "REMOVE_FAVORITE",
  payload: dev,
});
