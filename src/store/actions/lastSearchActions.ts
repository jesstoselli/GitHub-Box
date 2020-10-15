import IDev from "../../dtos/IDev";

export type ActionLastSearch = {
  type: "ADD_LAST_SEARCH";
  payload: IDev[];
};

export const addLastSearch = (devs: IDev[]): ActionLastSearch => ({
  type: "ADD_LAST_SEARCH",
  payload: devs,
});
