import IDev from "../../dtos/IDev";
import {
  saveToLocalStorage,
  searchLocalStorage,
} from "../../helpers/manageLocalStorage";
import { ActionSearch } from "../actions/searchesActions";

export interface DevsSearchState {
  searchedDevs: IDev[];
}

const INITIAL_STATE = {
  searchedDevs: searchLocalStorage("search-history"),
};

const searchesReducer = (
  state: DevsSearchState = INITIAL_STATE,
  action: ActionSearch
) => {
  switch (action.type) {
    case "ADD_SEARCH":
      saveToLocalStorage(action.payload, "search-history");

      const checkIfUserIsAlreadyInState = state.searchedDevs.some(
        (dev) => dev.id === action.payload.id
      );

      if (checkIfUserIsAlreadyInState) {
        return state;
      }

      return {
        ...state,
        searchedDevs: [...state.searchedDevs, action.payload],
      };

    default:
      return state;
  }
};

export { searchesReducer };
