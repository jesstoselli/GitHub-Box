import IDev from "../../dtos/IDev";

export type ActionSearch = {
  type: "ADD_SEARCH";
  payload: IDev;
};

export const addSearch = (dev: IDev): ActionSearch => ({
  type: "ADD_SEARCH",
  payload: dev,
});
