import { AsyncStorage } from "react-native";
import { DECK_STORAGE_KEY } from "../constants";

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(res => JSON.parse(res));
}

export function getDeck(id) {
  console.log("get", id);
}

export function saveDeckTitle(title) {
  return getDecks().then(allDecks => {
    const newTitle = { [title]: { title, questions: [] } };
    const newDecks = Object.assign({}, newTitle, allDecks);
    return AsyncStorage.setItem(
      DECK_STORAGE_KEY,
      JSON.stringify(newDecks)
    ).then(res => res);
  });
}

export function addCardToDeck(title, card) {
  console.log(title, card);
}

export function removeAllDecks() {
  return AsyncStorage.removeItem(DECK_STORAGE_KEY).then(res =>
    console.log("REMOVED", res)
  );
}
