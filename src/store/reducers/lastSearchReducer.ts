import IDev from "../../dtos/IDev";
import {
  saveLastSearchOnLocalStorage,
  searchLocalStorage,
} from "../../helpers/manageLocalStorage";
import { ActionLastSearch } from "../actions/lastSearchActions";

export interface LastSearchState {
  lastSearch: IDev[];
}

const INITIAL_STATE = {
  lastSearch: searchLocalStorage("lastSearch"),
};

const lastSearchReducer = (
  state: LastSearchState = INITIAL_STATE,
  action: ActionLastSearch
) => {
  switch (action.type) {
    case "ADD_LAST_SEARCH":
      saveLastSearchOnLocalStorage(action.payload);
      return {
        ...state,
        lastSearch: [...state.lastSearch, action.payload],
      };

    default:
      return state;
  }
};

export { lastSearchReducer };
