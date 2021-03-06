// AsyncStorage key
export const DECK_STORAGE_KEY = "deckStorage:personal";
export const NOTIFICATION_KEY = "notification:flashcard";

// Action types for Redux
export const types = {
  GET_ALL_DECKS: "get_all_decks",
  LOAD_ALL_DECKS: "load_all_decks",
  FAILED_ALL_DECKS: "failed_all_decks",

  CREATE_NEW_DECK: "create_new_deck",
  FAILED_NEW_DECK: "failed_new_deck",

  GET_DECK: "get_deck",
  LOAD_DECK: "load_deck",
  FAILED_DECK: "fail_deck",

  ADD_CARD: "add_card",
  FAILED_ADD_CARD: "failed_add_card"
};
