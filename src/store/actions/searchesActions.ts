import IDev from "../../dtos/IDev";

export type ActionSearch = {
  type: "ADD_SEARCH";
  payload: IDev;
};

export type ActionClearSearch = {
  type: "CLEAR_SEARCH_HISTORY";
  payload: undefined;
};

export const addSearch = (dev: IDev): ActionSearch => ({
  type: "ADD_SEARCH",
  payload: dev,
});

export const clearSearchHistory = (): ActionClearSearch => ({
  type: "CLEAR_SEARCH_HISTORY",
  payload: undefined,
});
