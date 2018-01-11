import { takeEvery } from "redux-saga/effects";
import { loadAllDecks } from "./loadAllDecks";
import { createNewDeck } from "./createNewDeck";
import { addNewCardToDeck } from "./addCard";
import { types } from "../constants";

function* rootSaga() {
  yield takeEvery(types.GET_ALL_DECKS, loadAllDecks);
  yield takeEvery(types.CREATE_NEW_DECK, createNewDeck);
  yield takeEvery(types.ADD_CARD, addNewCardToDeck);
}

export default rootSaga;
