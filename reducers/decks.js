import { types } from "../constants";

export default function deck(state = {}, action) {
  switch (action.type) {
    case types.GET_ALL_DECKS:
      return action.payload;
  }
}
