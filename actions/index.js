import { types } from "../constants";

export const getAllDecks = () => {
  return {
    type: types.GET_ALL_DECKS
  };
};
