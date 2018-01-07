import { types } from "../constants";

export default function deck(state = {}, action) {
  switch (action.type) {
    case types.LOAD_ALL_DECKS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
