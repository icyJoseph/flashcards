import { AsyncStorage } from "react-native";

export function getDecks() {
  console.log("All Decks");
}

export function getDeck(id) {
  console.log("get", id);
}

export function saveDeckTitle(title) {
  console.log("saved", title);
}

export function addCardToDeck(title, card) {
  console.log(title, card);
}
