import { AsyncStorage } from "react-native";
import { DECK_STORAGE_KEY } from "../constants";

export function getDecks() {
  AsyncStorage.getAllKeys(DECK_STORAGE_KEY)
    .then(res => console.log("All decks", res))
    .catch(err => console.log("Error getting all decks", err));
}

export function getDeck(id) {
  console.log("get", id);
}

export function saveDeckTitle(title) {
  AsyncStorage.setItem(title, { title: title, questions: [] })
    .then(res => console.log("saved deck title", res))
    .catch(err => console.log("Error saving deck title", err));
}

export function addCardToDeck(title, card) {
  console.log(title, card);
}
