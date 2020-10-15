import { combineReducers, createStore } from "redux";
import { favoritesReducer } from "./reducers/favoritesReducer";
import { lastSearchReducer } from "./reducers/lastSearchReducer";
import { searchesReducer } from "./reducers/searchesReducer";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  searches: searchesReducer,
  lastSearch: lastSearchReducer,
});

const store = createStore(rootReducer);

export default store;
