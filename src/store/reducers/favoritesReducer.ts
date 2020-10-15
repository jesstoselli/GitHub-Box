import IDev from "../../dtos/IDev";
import {
  removeFromLocalStorage,
  saveToLocalStorage,
  searchLocalStorage,
} from "../../helpers/manageLocalStorage";
import { ActionFavorite } from "../actions/favoriteActions";

export interface DevsState {
  favoriteDevs: IDev[];
}

const INITIAL_STATE = {
  favoriteDevs: searchLocalStorage("favorites"),
};

const favoritesReducer = (
  state: DevsState = INITIAL_STATE,
  action: ActionFavorite
) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      saveToLocalStorage(action.payload, "favorites");
      return {
        ...state,
        favoriteDevs: [...state.favoriteDevs, action.payload],
      };
    case "REMOVE_FAVORITE":
      removeFromLocalStorage(action.payload, "favorites");

      const devsToKeep = state.favoriteDevs?.filter(
        (dev) => dev.id !== action.payload.id
      );

      return {
        ...state,
        favoriteDevs: [...devsToKeep],
      };

    default:
      return state;
  }
};

export { favoritesReducer };
