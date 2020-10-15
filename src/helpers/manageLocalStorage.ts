import IDev from "../dtos/IDev";

export const saveToLocalStorage = (item: IDev, origin: string) => {
  const storagedItems = localStorage.getItem(`@GithubBox:${origin}`);

  let itemsToBeAdded: IDev[] = [];

  if (storagedItems) {
    itemsToBeAdded = JSON.parse(storagedItems);
  }

  const isItemAlreadySaved = itemsToBeAdded.some((i) => i.id === item.id);

  if (isItemAlreadySaved) {
    return;
  } else {
    itemsToBeAdded = [...itemsToBeAdded, item];
    return localStorage.setItem(
      `@GithubBox:${origin}`,
      JSON.stringify(itemsToBeAdded)
    );
  }
};

export const removeFromLocalStorage = (item: IDev, origin: string) => {
  const storagedItems = localStorage.getItem(`@GithubBox:${origin}`);

  let updatedItems: IDev[] = [];
  if (storagedItems) {
    updatedItems = JSON.parse(storagedItems).filter(
      (storaged: IDev) => storaged.id !== item.id
    );
  }

  return localStorage.setItem(
    `@GithubBox:${origin}`,
    JSON.stringify(updatedItems)
  );
};

export const saveLastSearchOnLocalStorage = (list: IDev[]) => {
  return localStorage.setItem(`@GithubBox:lastSearch`, JSON.stringify(list));
};

export const searchLocalStorage = (origin: string) => {
  let savedItems = localStorage.getItem(`@GithubBox:${origin}`);

  if (savedItems) {
    return JSON.parse(savedItems);
  }
  return [];
};
