import { AsyncStorage } from "react-native";
import { DECK_STORAGE_KEY } from "../constants";

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(res => JSON.parse(res));
}

export function saveDeckTitle(title) {
  return getDecks().then(allDecks => {
    const timestamp = Date.now();
    const newTitle = { [title]: { title, questions: [], timestamp } };
    const newDecks = Object.assign({}, newTitle, allDecks);
    return AsyncStorage.setItem(
      DECK_STORAGE_KEY,
      JSON.stringify(newDecks)
    ).then(res => res);
  });
}

export function addCardToDeck(title, card) {
  return getDecks().then(allDecks => {
    const deckToUpdate = allDecks[title];
    const timestamp = deckToUpdate.timestamp;
    const updatedQuestions = deckToUpdate.questions.push(card);
    const updatedTitle = {
      [title]: { title, questions: updatedQuestions, timestamp }
    };
    const updatedDecks = Object.assign({}, updatedTitle, allDecks);
    return AsyncStorage.setItem(
      DECK_STORAGE_KEY,
      JSON.stringify(updatedDecks)
    ).then(res => res);
  });
}

export function removeAllDecks() {
  return AsyncStorage.removeItem(DECK_STORAGE_KEY).then(res =>
    console.log("I did as you wished and only left: ", res)
  );
}
